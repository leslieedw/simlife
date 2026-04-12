import type { Ending, LifeEvent } from '../types';

interface Props {
  ending: Ending;
  history: LifeEvent[];
  onViewAnalysis: () => void;
  onRestart: () => void;
}

const RARITY_STYLE: Record<string, string> = {
  common: 'text-gray-400',
  uncommon: 'text-blue-400',
  rare: 'text-purple-400',
  hidden: 'text-amber-400',
};

const RARITY_LABEL: Record<string, string> = {
  common: '普通结局',
  uncommon: '特殊结局',
  rare: '稀有结局',
  hidden: '隐藏结局',
};

export function EndingScreen({ ending, history, onViewAnalysis, onRestart }: Props) {
  return (
    <div className="min-h-screen bg-[#0f0f0f] flex flex-col max-w-lg mx-auto px-6">
      {/* 顶部 */}
      <div className="pt-16 pb-8 text-center">
        <div className={`text-xs uppercase tracking-widest mb-3 ${RARITY_STYLE[ending.rarity]}`}>
          {RARITY_LABEL[ending.rarity]}
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">{ending.title}</h1>
        <p className="text-gray-300 leading-relaxed">{ending.description}</p>
        <p className="text-gray-500 text-sm mt-4 italic">「{ending.flavor}」</p>
      </div>

      {/* 人生回顾 */}
      <div className="flex-1 pb-8">
        <div className="text-xs text-gray-500 uppercase tracking-widest mb-4">你这一生</div>
        <div className="space-y-3">
          {history.map((event, i) => (
            <div key={i} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-gray-500 flex-shrink-0">
                  {event.age}
                </div>
                {i < history.length - 1 && (
                  <div className="w-px flex-1 bg-white/10 mt-1" />
                )}
              </div>
              <div className="pb-4">
                <div className="text-white text-sm font-medium">{event.title}</div>
                <div className="text-gray-500 text-xs mt-0.5">「{event.choiceText}」</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 按钮 */}
      <div className="pb-12 space-y-3">
        <button
          onClick={onViewAnalysis}
          className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all"
        >
          查看我的性格分析
        </button>
        <button
          onClick={onRestart}
          className="w-full py-3 border border-white/20 text-gray-400 rounded-xl hover:border-white/40 hover:text-white transition-all text-sm"
        >
          重新出生
        </button>
      </div>
    </div>
  );
}
