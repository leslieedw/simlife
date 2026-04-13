import type { GameState, HiddenTag } from '../types';
import { isChoiceAvailable } from '../engine/gameEngine';

interface Props {
  state: GameState;
  totalAges: number;
  currentAgeIndex: number;
  skippedAges: number[];
  onChoice: (choiceId: string) => void;
  onContinue: () => void;
  onSkip: () => void;
  onEndEarly: () => void;
}

const STAT_LABELS: Record<string, string> = {
  intelligence: '智力',
  eq: '情商',
  appearance: '颜值',
  fitness: '体能',
  luck: '运气',
  wealth: '财富',
  worldly: '世俗',
  inner: '内心',
  social: '社交',
};

// 需要展示在状态栏的标签及其中文名/样式
const VISIBLE_TAGS: Record<string, { label: string; color: string }> = {
  married:                  { label: '已婚', color: 'bg-pink-500/20 text-pink-300 border-pink-500/30' },
  divorced:                 { label: '离异', color: 'bg-gray-500/20 text-gray-300 border-gray-500/30' },
  has_children:             { label: '有孩子', color: 'bg-sky-500/20 text-sky-300 border-sky-500/30' },
  never_married:            { label: '未婚', color: 'bg-violet-500/20 text-violet-300 border-violet-500/30' },
  childless_by_choice:      { label: '丁克', color: 'bg-violet-500/20 text-violet-300 border-violet-500/30' },
  higher_education:         { label: '大学', color: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
  dropped_out:              { label: '辍学', color: 'bg-amber-500/20 text-amber-300 border-amber-500/30' },
  abroad_experience:        { label: '海外', color: 'bg-teal-500/20 text-teal-300 border-teal-500/30' },
  entrepreneur:             { label: '创业', color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' },
  addiction:                { label: '上瘾', color: 'bg-red-500/20 text-red-300 border-red-500/30' },
  in_debt:                  { label: '负债', color: 'bg-red-500/20 text-red-300 border-red-500/30' },
  trauma_bond:              { label: '创伤依赖', color: 'bg-rose-500/20 text-rose-300 border-rose-500/30' },
  survived_violence:        { label: '幸存者', color: 'bg-amber-500/20 text-amber-300 border-amber-500/30' },
  economic_independence_drive: { label: '经济自主', color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' },
  female_solidarity:        { label: '女性联结', color: 'bg-purple-500/20 text-purple-300 border-purple-500/30' },
  orphan_born:              { label: '孤儿', color: 'bg-gray-500/20 text-gray-300 border-gray-500/30' },
  rebel_spirit:             { label: '反骨', color: 'bg-orange-500/20 text-orange-300 border-orange-500/30' },
  glass_ceiling_seen:       { label: '看见天花板', color: 'bg-slate-500/20 text-slate-300 border-slate-500/30' },
  late_bloomer:             { label: '晚开的花', color: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' },
};

function StatBar({ label, value }: { label: string; value: number }) {
  const color =
    value >= 70 ? 'bg-emerald-500' :
    value >= 40 ? 'bg-amber-500' :
    'bg-rose-500';

  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-400 text-xs w-8 flex-shrink-0">{label}</span>
      <div className="flex-1 bg-white/10 rounded-full h-1.5">
        <div
          className={`h-1.5 rounded-full transition-all duration-500 ${color}`}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="text-gray-400 text-xs w-6 text-right">{value}</span>
    </div>
  );
}

// 根据跳过的年份生成一句自然的"时光流逝"描述
function buildTimePassedText(skippedAges: number[]): string {
  if (skippedAges.length === 0) return '';
  if (skippedAges.length === 1) return `${skippedAges[0]}岁那年，没有什么特别的事发生。`;
  const first = skippedAges[0];
  const last = skippedAges[skippedAges.length - 1];
  return `从${first}岁到${last}岁，生活平静地流过，没有什么值得一说的。`;
}

export function GameScreen({ state, totalAges, currentAgeIndex, skippedAges, onChoice, onContinue, onSkip, onEndEarly }: Props) {
  const { age, stats, currentEvent, phase } = state;
  const progress = (currentAgeIndex / (totalAges - 1)) * 100;
  const timePassedText = buildTimePassedText(skippedAges);

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex flex-col max-w-lg mx-auto">
      {/* 顶部：年龄 + 进度 */}
      <div className="px-6 pt-8 pb-4">
        <div className="flex justify-between items-center mb-3">
          <span className="text-4xl font-bold text-white">{age}<span className="text-lg font-normal text-gray-500 ml-1">岁</span></span>
          <span className="text-gray-500 text-sm">人生进度 {Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-1">
          <div
            className="h-1 rounded-full bg-white transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* 属性栏 */}
      <div className="px-6 py-3 bg-white/[0.03] border-y border-white/5">
        <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
          {Object.entries(stats).map(([key, val]) => (
            <StatBar key={key} label={STAT_LABELS[key] ?? key} value={val} />
          ))}
        </div>

        {/* 状态标签 */}
        {(() => {
          const visibleEntries = Array.from(state.hiddenTags)
            .filter((tag): tag is HiddenTag => tag in VISIBLE_TAGS)
            .map(tag => ({ tag, ...VISIBLE_TAGS[tag] }));
          if (visibleEntries.length === 0) return null;
          return (
            <div className="flex flex-wrap gap-1.5 mt-2.5 pt-2.5 border-t border-white/5">
              {visibleEntries.map(({ tag, label, color }) => (
                <span key={tag} className={`text-[10px] px-2 py-0.5 rounded-full border ${color}`}>
                  {label}
                </span>
              ))}
            </div>
          );
        })()}
      </div>

      {/* 主体内容 */}
      <div className="flex-1 px-6 py-6 flex flex-col">
        {phase === 'event' && currentEvent ? (
          <>
            {/* 时光流逝提示（如果从空白年跳过来）*/}
            {timePassedText && (
              <div className="mb-5 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5">
                <p className="text-gray-500 text-sm italic">{timePassedText}</p>
              </div>
            )}

            {/* 事件卡 */}
            <div className="mb-6">
              <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">发生了什么</div>
              <h2 className="text-xl font-bold text-white mb-3">{currentEvent.title}</h2>
              <p className="text-gray-300 leading-relaxed">{currentEvent.description}</p>
            </div>

            {/* 选项 */}
            <div className="space-y-3">
              {currentEvent.choices.map(choice => {
                const available = isChoiceAvailable(choice, state);
                return (
                  <button
                    key={choice.id}
                    onClick={() => available && onChoice(choice.id)}
                    disabled={!available}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      available
                        ? 'border-white/20 bg-white/5 text-white hover:border-white/50 hover:bg-white/10 active:scale-[0.98]'
                        : 'border-white/5 bg-white/[0.02] text-gray-600 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-white/30 font-mono text-sm mt-0.5">
                        {available ? '▶' : '🔒'}
                      </span>
                      <div>
                        <div className="text-sm leading-relaxed">{choice.text}</div>
                        {!available && choice.lockedHint && (
                          <div className="text-xs text-gray-600 mt-1">{choice.lockedHint}</div>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* 跳过 / 提前结束 */}
            <div className="mt-4 flex justify-center gap-4">
              <button
                onClick={onSkip}
                className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
              >
                换一道题
              </button>
              <span className="text-gray-700">·</span>
              <button
                onClick={onEndEarly}
                className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
              >
                就活到这里
              </button>
            </div>
          </>
        ) : phase === 'result' && state.lifeHistory.length > 0 ? (
          <>
            <div className="flex-1 flex flex-col justify-center">
              <div className="text-xs text-gray-500 uppercase tracking-widest mb-4">你的选择</div>
              {(() => {
                const last = state.lifeHistory[state.lifeHistory.length - 1];
                return (
                  <div className="space-y-4">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="text-gray-400 text-sm mb-2">你选择了：</div>
                      <div className="text-white font-medium">「{last.choiceText}」</div>
                    </div>
                    {last.followUpText && (
                      <p className="text-gray-300 leading-relaxed italic">
                        {last.followUpText}
                      </p>
                    )}
                    {Object.keys(last.statChanges).length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {Object.entries(last.statChanges).map(([key, delta]) => (
                          delta !== 0 && (
                            <span
                              key={key}
                              className={`text-xs px-2 py-1 rounded-full ${
                                (delta as number) > 0
                                  ? 'bg-emerald-500/20 text-emerald-400'
                                  : 'bg-rose-500/20 text-rose-400'
                              }`}
                            >
                              {STAT_LABELS[key]} {(delta as number) > 0 ? '+' : ''}{delta}
                            </span>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
            <button
              onClick={onContinue}
              className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all mt-6"
            >
              继续人生 →
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}
