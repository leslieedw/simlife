import { useEffect } from 'react';
import type { PersonalityScores, HiddenTag } from '../types';
import { generatePersonalityAnalysis } from '../engine/personalityAnalysis';

interface Props {
  personality: PersonalityScores;
  tags: Set<HiddenTag>;
  onRestart: () => void;
}

function DimensionBar({ score, leftLabel, rightLabel, label, description, dualEdge }: {
  score: number; leftLabel: string; rightLabel: string;
  label: string; description: string; dualEdge?: string;
}) {
  const barWidth = Math.abs(score) * 5;
  const isRight = score >= 0;

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-500">{leftLabel}</span>
        <span className="text-xs text-white/70 font-medium">{label}</span>
        <span className="text-xs text-gray-500">{rightLabel}</span>
      </div>
      <div className="relative w-full h-1.5 bg-white/10 rounded-full">
        <div className="absolute top-1/2 left-1/2 w-px h-3 bg-white/20 -translate-y-1/2" />
        <div
          className="absolute top-0 h-1.5 bg-white rounded-full transition-all duration-700"
          style={{
            left: isRight ? '50%' : `${50 - barWidth}%`,
            width: `${barWidth}%`,
          }}
        />
      </div>
      <p className="text-xs text-gray-400 leading-relaxed">{description}</p>
      {dualEdge && (
        <p className="text-xs text-gray-600 leading-relaxed italic">{dualEdge}</p>
      )}
    </div>
  );
}

export function AnalysisScreen({ personality, tags, onRestart }: Props) {
  const result = generatePersonalityAnalysis(personality, tags);
  const { culturalMatch } = result;

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex flex-col max-w-lg mx-auto px-6">

      {/* 人格类型 */}
      <div className="pt-12 pb-8 text-center">
        <div className="text-xs text-gray-500 uppercase tracking-widest mb-3">你的人格</div>
        <h1 className="text-2xl font-bold text-white mb-2">【{result.typeName}】</h1>
        <p className="text-gray-400 text-sm italic mb-6">{result.typeSubtitle}</p>

        {/* 关键词 */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {result.keywords.map(kw => (
            <span key={kw} className="px-3 py-1 rounded-full bg-white/8 border border-white/10 text-gray-300 text-xs">
              #{kw}
            </span>
          ))}
        </div>

        {/* 核心洞察 */}
        <div className="bg-white/[0.04] border border-white/8 rounded-xl p-5">
          <p className="text-gray-300 text-sm leading-relaxed">
            {result.insight}
          </p>
        </div>
      </div>

      {/* 六维分析 */}
      <div className="pb-8">
        <div className="text-xs text-gray-500 uppercase tracking-widest mb-5">六维人格</div>
        <div className="space-y-6">
          {result.dimensions.map(dim => (
            <DimensionBar key={dim.label} {...dim} />
          ))}
        </div>
      </div>

      {/* 文化配对 */}
      <div className="pb-8">
        <div className="text-xs text-gray-500 uppercase tracking-widest mb-4">与你共鸣的灵魂</div>
        <div className="space-y-3">
          {/* 作家卡 */}
          <div className="p-4 bg-white/[0.04] border border-white/8 rounded-xl">
            <div className="text-xs text-gray-600 mb-2 uppercase tracking-wider">作家</div>
            <div className="text-white text-sm font-medium">{culturalMatch.writer.name}</div>
            <div className="text-gray-600 text-xs mt-0.5">{culturalMatch.writer.work}</div>
            <div className="text-gray-400 text-xs mt-2 leading-relaxed">{culturalMatch.writer.reason}</div>
          </div>

          {/* 语录卡——这是重头戏 */}
          <div className="p-5 bg-white/[0.03] border border-white/10 rounded-xl">
            <div className="text-gray-300 text-sm leading-relaxed italic">
              「{culturalMatch.resonantQuote.text}」
            </div>
            <div className="text-gray-600 text-xs mt-3 text-right">
              —— {culturalMatch.resonantQuote.attribution}
            </div>
          </div>
        </div>
      </div>

      {/* 按钮 */}
      <div className="pb-12 space-y-3">
        <div className="text-center text-xs text-gray-600 mb-2">截图分享给你的朋友，看看她的人生是什么人格</div>
        <button
          onClick={onRestart}
          className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all"
        >
          换一种人生再活一遍
        </button>
      </div>
    </div>
  );
}
