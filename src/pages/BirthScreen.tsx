import { useState } from 'react';
import type { BirthProfile, FamilyWealth, FamilyStructure, BirthCity } from '../types';

interface Props {
  onComplete: (birth: BirthProfile) => void;
  onDebugSimulate?: () => void;
}

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
  const [step, setStep] = useState(0);
  const [wealth, setWealth] = useState<FamilyWealth | null>(null);
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

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex flex-col">
      {/* 顶部标题 */}
      <div className="text-center pt-12 pb-8 px-6">
        <p className="text-gray-600 text-xs italic mb-4">「一个人如果没有房间，就没有完整的自我。」</p>
        <h1 className="text-3xl font-bold text-white tracking-wide">她的一生</h1>
        <p className="text-gray-500 text-sm mt-2">每一个选择，都算数</p>
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

        {step > 0 && (
          <button
            onClick={() => setStep(step - 1)}
            className="mt-4 text-sm text-gray-500 hover:text-gray-300 transition-colors"
          >
            ← 返回
          </button>
        )}
      </div>

      {/* 随机出生 + 调试按钮 */}
      {step === 0 && (
        <div className="px-6 pb-10 max-w-lg mx-auto w-full space-y-3">
          <button
            onClick={handleRandom}
            className="w-full py-3 border border-white/20 rounded-xl text-gray-400 text-sm hover:border-white/40 hover:text-gray-200 transition-all"
          >
            随机出生（快速开始）
          </button>
          {onDebugSimulate && (
            <button
              onClick={onDebugSimulate}
              className="w-full py-3 border border-dashed border-amber-500/30 rounded-xl text-amber-500/60 text-xs hover:border-amber-500/60 hover:text-amber-500 transition-all"
            >
              DEV: 快速模拟完整人生 → 直达结局
            </button>
          )}
        </div>
      )}
    </div>
  );
}
