import type { PersonalityScores, HiddenTag } from '../types';
import { generatePersonalityAnalysis } from '../engine/personalityAnalysis';

interface Props {
  personality: PersonalityScores;
  tags: Set<HiddenTag>;
  onRestart: () => void;
}

function DimensionBar({ score, leftLabel, rightLabel, label, description }: {
  score: number;
  leftLabel: string;
  rightLabel: string;
  label: string;
  description: string;
}) {
  // score: -10 ~ +10，转换为 0-100%
  const pct = ((score + 10) / 20) * 100;

  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-500">{leftLabel}</span>
        <span className="text-xs text-white font-medium">{label}</span>
        <span className="text-xs text-gray-500">{rightLabel}</span>
      </div>
      <div className="relative w-full h-2 bg-white/10 rounded-full">
        <div
          className="absolute top-0 h-2 bg-white rounded-full transition-all duration-700"
          style={{ left: '50%', width: `${Math.abs(score) * 5}%`, transform: score >= 0 ? 'none' : 'translateX(-100%)' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white/30 rounded-full" />
      </div>
      <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}

export function AnalysisScreen({ personality, tags, onRestart }: Props) {
  const result = generatePersonalityAnalysis(personality, tags);

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex flex-col max-w-lg mx-auto px-6">
      {/* 头部：类型卡片 */}
      <div className="pt-12 pb-8 text-center">
        <div className="text-4xl mb-3">{result.typeEmoji}</div>
        <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">你的人格类型</div>
        <h1 className="text-3xl font-bold text-white mb-4">【{result.typeName}】</h1>

        {/* 关键词 */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {result.keywords.map(kw => (
            <span key={kw} className="px-3 py-1 rounded-full bg-white/10 text-gray-300 text-sm">
              #{kw}
            </span>
          ))}
        </div>

        {/* 核心洞察 */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <p className="text-gray-300 text-sm leading-relaxed italic">
            「{result.insight}」
          </p>
        </div>
      </div>

      {/* 六维分析 */}
      <div className="flex-1 pb-8">
        <div className="text-xs text-gray-500 uppercase tracking-widest mb-5">人格维度分析</div>
        <div className="space-y-6">
          {result.dimensions.map(dim => (
            <DimensionBar
              key={dim.label}
              score={dim.score}
              label={dim.label}
              leftLabel={dim.leftLabel}
              rightLabel={dim.rightLabel}
              description={dim.description}
            />
          ))}
        </div>
      </div>

      {/* 分享提示 + 重玩 */}
      <div className="pb-12 space-y-3">
        <div className="text-center text-xs text-gray-600 mb-2">
          截图分享给朋友，看看你们的人格有多不同
        </div>
        <button
          onClick={onRestart}
          className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all"
        >
          用另一种人生再试一次
        </button>
      </div>
    </div>
  );
}
