import type { GameState } from '../types';
import { isChoiceAvailable } from '../engine/gameEngine';

interface Props {
  state: GameState;
  totalAges: number;
  currentAgeIndex: number;
  onChoice: (choiceId: string) => void;
  onContinue: () => void;
}

const STAT_LABELS: Record<string, string> = {
  intelligence: '智力',
  eq: '情商',
  appearance: '颜值',
  fitness: '体能',
  luck: '运气',
  wealth: '财富',
  mental: '心理',
  social: '社交',
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

export function GameScreen({ state, totalAges, currentAgeIndex, onChoice, onContinue }: Props) {
  const { age, stats, currentEvent, phase } = state;
  const progress = (currentAgeIndex / (totalAges - 1)) * 100;

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
      </div>

      {/* 主体内容 */}
      <div className="flex-1 px-6 py-6 flex flex-col">
        {phase === 'event' && currentEvent ? (
          <>
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
          </>
        ) : phase === 'result' && state.lifeHistory.length > 0 ? (
          <>
            {/* 结果展示 */}
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
                    {/* 属性变化提示 */}
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
        ) : (
          /* 没有事件，直接跳过 */
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <div className="text-gray-500 mb-6">这一年，平静地过去了。</div>
            <button
              onClick={onContinue}
              className="px-8 py-3 border border-white/20 text-white rounded-xl hover:bg-white/10 transition-all"
            >
              继续 →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
