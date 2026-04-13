import { useMemo } from 'react';
import type { Ending, LifeEvent } from '../types';

interface Props {
  ending: Ending;
  history: LifeEvent[];
  onViewAnalysis: () => void;
  onRestart: () => void;
}

const RARITY_STYLE: Record<string, string> = {
  common: 'text-gray-400',
  uncommon: 'text-blue-300',
  rare: 'text-purple-300',
  hidden: 'text-amber-300',
};

const RARITY_LABEL: Record<string, string> = {
  common: '普通结局',
  uncommon: '特殊结局',
  rare: '稀有结局',
  hidden: '隐藏结局',
};

export function EndingScreen({ ending, history, onViewAnalysis, onRestart }: Props) {
  const quote = useMemo(() => {
    const quotes = ending.culturalQuotes;
    return quotes[Math.floor(Math.random() * quotes.length)];
  }, [ending.id]);

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex flex-col max-w-lg mx-auto px-6">

      {/* 结局标题 */}
      <div className="pt-16 pb-8 text-center">
        <div className={`text-xs uppercase tracking-widest mb-3 ${RARITY_STYLE[ending.rarity]}`}>
          {RARITY_LABEL[ending.rarity]}
        </div>
        <h1 className="text-3xl font-bold text-white mb-5">{ending.title}</h1>
        <p className="text-gray-300 leading-relaxed text-sm">{ending.description}</p>

        {/* 结局金句 */}
        <div className="mt-6 p-5 bg-white/[0.04] border border-white/8 rounded-xl text-left">
          <p className="text-gray-300 text-sm leading-relaxed italic">
            「{quote.text}」
          </p>
          <p className="text-gray-600 text-xs mt-3 text-right">
            —— {quote.attribution}
          </p>
        </div>

        <p className="text-gray-600 text-xs mt-4 italic">{ending.flavor}</p>
      </div>

      {/* 人生回顾 */}
      <div className="flex-1 pb-8">
        <div className="text-xs text-gray-500 uppercase tracking-widest mb-4">她这一生</div>
        <div className="space-y-0">
          {history.map((event, i) => (
            <div key={i} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-7 h-7 rounded-full bg-white/8 border border-white/10 flex items-center justify-center text-xs text-gray-500 flex-shrink-0">
                  {event.age}
                </div>
                {i < history.length - 1 && (
                  <div className="w-px flex-1 bg-white/8 mt-1 min-h-4" />
                )}
              </div>
              <div className="pb-4 pt-1">
                <div className="text-white/80 text-sm font-medium">{event.title}</div>
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
          查看她的人格分析
        </button>
        <button
          onClick={onRestart}
          className="w-full py-3 border border-white/15 text-gray-500 rounded-xl hover:border-white/30 hover:text-gray-300 transition-all text-sm"
        >
          重新活一遍
        </button>
      </div>
    </div>
  );
}
