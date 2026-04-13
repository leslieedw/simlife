import { useState, useMemo } from 'react';
import type { BirthProfile, FamilyWealth, FamilyStructure, BirthCity } from '../types';

interface Props {
  onComplete: (birth: BirthProfile) => void;
  onDebugSimulate?: () => void;
}

// 女字旁的字——贬义（红）和褒义（金）
const DEROGATORY_CHARS = [
  '妖', '奸', '婊', '嫉', '妒', '嫌', '奴', '妄', '娼', '婪',
  '嫖', '妨', '姘', '媚', '佞', '妓', '嫡', '妾', '嬲', '耍',
  '妖', '嫂', '婢', '妃', '嫁', '娶', '妥', '妮', '媳', '妆',
];
const POSITIVE_CHARS = [
  '好', '妙', '娟', '婉', '婷', '姿', '娴', '媛', '嫣', '姝',
];

// 随机数据池
const COVER_STATS = [
  [
    '全球 1.3 亿女孩从未踏入过学校。',
    '每三个女性中有一个经历过暴力。',
    '财富 500 强的女性 CEO 不到 10%。',
    '在一些地方，她们在出生之前就消失了。',
  ],
  [
    '全球女性承担了 75% 的无偿照护劳动。',
    '每年有 1200 万女孩在 18 岁之前被迫结婚。',
    '女性拥有全世界不到 20% 的土地。',
    '中国出生性别比最高峰达到 120:100。那些多出来的男孩背后，是消失的女孩。',
  ],
  [
    '法国女性直到 1965 年才能不经丈夫同意开银行账户。距今 61 年。',
    '瑞士女性直到 1971 年才获得投票权。距今 55 年。',
    '中国第一部《反家庭暴力法》2016 年才生效。距今 10 年。',
    '沙特女性 2018 年才被允许开车。距今 8 年。',
  ],
  [
    '剑桥大学 1869 年招收了第一个女学生，但直到 1948 年才允许女性获得学位。',
    'NASA 直到 1978 年才接受女性宇航员。',
    '全球仍有 27 个国家的法律不允许女性和男性从事同样的工作。',
    '全球女性平均收入比男性低 20%，做的工作并不少。',
  ],
];

const COVER_QUOTES = [
  { text: '一个人如果没有房间，就没有完整的自我。', attribution: '弗吉尼亚·伍尔夫' },
  { text: '女人不是天生的，是被塑造的。', attribution: '西蒙·波伏娃' },
  { text: '你的沉默保护不了你。', attribution: 'Audre Lorde' },
  { text: '我生来就是高山而非溪流。', attribution: '张桂梅' },
  { text: '我要很多很多的爱，如果没有，那就很多很多的钱。', attribution: '亦舒' },
  { text: '心若没有栖息的地方，到哪里都是在流浪。', attribution: '三毛' },
  { text: '逆来顺受，你说我的生命可惜，我自己却不在乎。', attribution: '萧红' },
  { text: '如果有来生，要做一棵树，站成永恒，没有悲伤的姿势。', attribution: '三毛' },
  { text: '女人啊，你创造了世界，世界却从未属于你。', attribution: '改自波伏娃' },
  { text: '我不管多少人说不行，我要去，我要自己去看看。', attribution: '三毛' },
  { text: '走吧，走吧，人总要学着自己长大。', attribution: '王菲' },
  { text: '我不是要变得自由。我本来就是自由的。', attribution: 'Toni Morrison' },
];

const WEALTH_OPTIONS: { value: FamilyWealth; label: string; desc: string }[] = [
  { value: 'poor', label: '贫困家庭', desc: '温饱都成问题，改变命运靠自己' },
  { value: 'working', label: '工薪家庭', desc: '父母努力维持，日子不宽裕' },
  { value: 'middle', label: '中产家庭', desc: '衣食无忧，能接受一些教育' },
  { value: 'rich', label: '富裕家庭', desc: '不用担心钱，但有自己的压力' },
  { value: 'elite', label: '精英家庭', desc: '名校、资源、人脉，一出生就赢了' },
];

const STRUCTURE_OPTIONS: { value: FamilyStructure; label: string }[] = [
  { value: 'complete', label: '父母双全' },
  { value: 'single_parent', label: '单亲家庭' },
  { value: 'divorced', label: '父母离异' },
  { value: 'orphan', label: '孤儿/寄养' },
];

const CITY_OPTIONS: { value: BirthCity; label: string; desc: string }[] = [
  { value: 'rural', label: '农村', desc: '大山里或田野间' },
  { value: 'small_city', label: '小县城', desc: '安静，机会不多' },
  { value: 'mid_city', label: '普通地级市', desc: '平凡的城市' },
  { value: 'mega_city', label: '省会/大城市', desc: '机会多，竞争也大' },
  { value: 'beijing_shanghai', label: '北上广深', desc: '最顶级的起点之一' },
];

export function BirthScreen({ onComplete, onDebugSimulate }: Props) {
  const [step, setStep] = useState(-1); // -1 = cover page
  const [wealth, setWealth] = useState<FamilyWealth | null>(null);
  const coverQuote = useMemo(() => COVER_QUOTES[Math.floor(Math.random() * COVER_QUOTES.length)], []);
  const coverStats = useMemo(() => COVER_STATS[Math.floor(Math.random() * COVER_STATS.length)], []);
  // 生成背景散落的女字旁汉字
  const bgChars = useMemo(() => {
    const chars: { char: string; x: number; y: number; size: number; opacity: number; negative: boolean }[] = [];
    for (let i = 0; i < 40; i++) {
      const isNeg = Math.random() < 0.75; // 75% 贬义
      const pool = isNeg ? DEROGATORY_CHARS : POSITIVE_CHARS;
      chars.push({
        char: pool[Math.floor(Math.random() * pool.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 14 + Math.random() * 28,
        opacity: 0.04 + Math.random() * 0.06,
        negative: isNeg,
      });
    }
    return chars;
  }, []);
  const [structure, setStructure] = useState<FamilyStructure | null>(null);
  const [city, setCity] = useState<BirthCity | null>(null);
  const [love, setLove] = useState(50);
  const [education, setEducation] = useState<'low' | 'mid' | 'high'>('mid');

  function handleRandom() {
    const w = WEALTH_OPTIONS[Math.floor(Math.random() * WEALTH_OPTIONS.length)].value;
    const s = STRUCTURE_OPTIONS[Math.floor(Math.random() * STRUCTURE_OPTIONS.length)].value;
    const c = CITY_OPTIONS[Math.floor(Math.random() * CITY_OPTIONS.length)].value;
    const l = Math.floor(Math.random() * 80) + 10;
    const e = (['low', 'mid', 'high'] as const)[Math.floor(Math.random() * 3)];
    onComplete({ familyWealth: w, familyStructure: s, birthCity: c, familyLove: l, parentEducation: e });
  }

  function handleComplete() {
    if (!wealth || !structure || !city) return;
    onComplete({ familyWealth: wealth, familyStructure: structure, birthCity: city, familyLove: love, parentEducation: education });
  }

  const steps = [
    // Step 0: 家庭财富
    <div key="wealth" className="space-y-4">
      <h2 className="text-xl font-bold text-white">你出生在什么样的家庭？</h2>
      <div className="space-y-3">
        {WEALTH_OPTIONS.map(opt => (
          <button
            key={opt.value}
            onClick={() => { setWealth(opt.value); setStep(1); }}
            className={`w-full text-left p-4 rounded-xl border transition-all ${
              wealth === opt.value
                ? 'border-amber-400 bg-amber-400/10 text-amber-400'
                : 'border-white/10 bg-white/5 text-gray-300 hover:border-white/30 hover:bg-white/10'
            }`}
          >
            <div className="font-semibold">{opt.label}</div>
            <div className="text-sm opacity-70 mt-1">{opt.desc}</div>
          </button>
        ))}
      </div>
    </div>,

    // Step 1: 家庭结构
    <div key="structure" className="space-y-4">
      <h2 className="text-xl font-bold text-white">你的家庭结构？</h2>
      <div className="space-y-3">
        {STRUCTURE_OPTIONS.map(opt => (
          <button
            key={opt.value}
            onClick={() => { setStructure(opt.value); setStep(2); }}
            className={`w-full text-left p-4 rounded-xl border transition-all ${
              structure === opt.value
                ? 'border-blue-400 bg-blue-400/10 text-blue-400'
                : 'border-white/10 bg-white/5 text-gray-300 hover:border-white/30 hover:bg-white/10'
            }`}
          >
            <div className="font-semibold">{opt.label}</div>
          </button>
        ))}
      </div>
    </div>,

    // Step 2: 出生城市
    <div key="city" className="space-y-4">
      <h2 className="text-xl font-bold text-white">你出生在哪里？</h2>
      <div className="space-y-3">
        {CITY_OPTIONS.map(opt => (
          <button
            key={opt.value}
            onClick={() => { setCity(opt.value); setStep(3); }}
            className={`w-full text-left p-4 rounded-xl border transition-all ${
              city === opt.value
                ? 'border-green-400 bg-green-400/10 text-green-400'
                : 'border-white/10 bg-white/5 text-gray-300 hover:border-white/30 hover:bg-white/10'
            }`}
          >
            <div className="font-semibold">{opt.label}</div>
            <div className="text-sm opacity-70 mt-1">{opt.desc}</div>
          </button>
        ))}
      </div>
    </div>,

    // Step 3: 家庭温暖度
    <div key="love" className="space-y-6">
      <h2 className="text-xl font-bold text-white">家里有多少爱？</h2>
      <p className="text-gray-400 text-sm">这决定了你最初的心理底色</p>
      <div className="space-y-4">
        <div className="flex justify-between text-sm text-gray-400">
          <span>冷漠、忽视</span>
          <span className="text-white font-bold">{love}</span>
          <span>温暖、有爱</span>
        </div>
        <input
          type="range" min={0} max={100} value={love}
          onChange={e => setLove(Number(e.target.value))}
          className="w-full accent-rose-400"
        />
        <div className="text-center text-sm text-gray-400">
          {love < 20 && '几乎没有爱，你一个人长大'}
          {love >= 20 && love < 40 && '偶尔有温暖，但经常感到孤独'}
          {love >= 40 && love < 60 && '普通家庭，平平淡淡'}
          {love >= 60 && love < 80 && '家里还不错，经常被关心'}
          {love >= 80 && '充满爱的家庭，你是被珍视的'}
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-gray-400 text-sm">父母学历</p>
        <div className="flex gap-3">
          {(['low', 'mid', 'high'] as const).map(e => (
            <button
              key={e}
              onClick={() => setEducation(e)}
              className={`flex-1 py-2 rounded-lg text-sm transition-all ${
                education === e
                  ? 'bg-purple-500 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {e === 'low' ? '小学/初中' : e === 'mid' ? '高中/大专' : '本科以上'}
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={handleComplete}
        className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all mt-4"
      >
        开始人生
      </button>
    </div>,
  ];

  // ====== 封面页 ======
  if (step === -1) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] flex flex-col justify-center items-center px-6 relative overflow-hidden">

        {/* 背景：女字旁汉字散落 */}
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          {bgChars.map((c, i) => (
            <span
              key={i}
              className="absolute font-serif"
              style={{
                left: `${c.x}%`,
                top: `${c.y}%`,
                fontSize: `${c.size}px`,
                opacity: c.opacity,
                color: c.negative ? '#ef4444' : '#d4a853',
                transform: `rotate(${Math.random() * 30 - 15}deg)`,
              }}
            >
              {c.char}
            </span>
          ))}
        </div>

        <div className="max-w-lg w-full text-center relative z-10">
          {/* 引子 */}
          <p className="text-gray-600 text-xs italic mb-10">
            「{coverQuote.text}」
            <span className="block mt-1 text-gray-700">—— {coverQuote.attribution}</span>
          </p>

          {/* 标题 */}
          <h1 className="text-5xl font-bold text-white tracking-widest mb-6">她</h1>

          {/* 数据 */}
          <div className="mb-10 px-2">
            <p className="text-gray-500 text-xs leading-loose">
              {coverStats.map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mt-5">
              你有没有想过，如果当时做了另一个选择，
              <br />
              你的人生会通向哪里？
            </p>
            <p className="text-gray-600 text-xs mt-5 italic">
              这不是一个有标准答案的游戏。没有最优解。
              <br />
              我们只是幸运的幸存者，回头看一遍来时的路。
            </p>
          </div>

          {/* 按钮 */}
          <button
            onClick={() => setStep(0)}
            className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all mb-3"
          >
            开始她的一生
          </button>
          <button
            onClick={handleRandom}
            className="w-full py-3 border border-white/20 rounded-xl text-gray-400 text-sm hover:border-white/40 hover:text-gray-200 transition-all"
          >
            随机出生（快速开始）
          </button>
        </div>

        {/* DEV 按钮 - 右下角小图标 */}
        {onDebugSimulate && (
          <button
            onClick={onDebugSimulate}
            className="fixed bottom-4 right-4 w-8 h-8 rounded-full border border-dashed border-amber-500/20 text-amber-500/40 text-[9px] font-mono hover:border-amber-500/50 hover:text-amber-500/80 transition-all flex items-center justify-center z-20"
            title="DEV: 快速模拟 → 直达结局"
          >
            ▶
          </button>
        )}
      </div>
    );
  }

  // ====== 出生配置页（step 0-3） ======
  return (
    <div className="min-h-screen bg-[#0f0f0f] flex flex-col">
      {/* 顶部标题 */}
      <div className="text-center pt-10 pb-6 px-6">
        <h1 className="text-xl font-bold text-white tracking-widest">她</h1>
      </div>

      {/* 进度条 */}
      <div className="flex gap-1 px-6 mb-8">
        {[0, 1, 2, 3].map(i => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-all ${i <= step ? 'bg-white' : 'bg-white/15'}`}
          />
        ))}
      </div>

      {/* 内容 */}
      <div className="flex-1 px-6 pb-6 max-w-lg mx-auto w-full">
        {steps[step]}

        <button
          onClick={() => setStep(step - 1)}
          className="mt-4 text-sm text-gray-500 hover:text-gray-300 transition-colors"
        >
          ← 返回
        </button>
      </div>
    </div>
  );
}
