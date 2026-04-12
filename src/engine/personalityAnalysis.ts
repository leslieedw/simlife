import type { PersonalityScores, HiddenTag } from '../types';

export interface PersonalityResult {
  typeName: string;
  typeEmoji: string;
  summary: string;
  dimensions: DimensionResult[];
  keywords: string[];
  insight: string;
}

export interface DimensionResult {
  label: string;
  leftLabel: string;
  rightLabel: string;
  score: number;   // -10 ~ +10
  description: string;
}

// ============================================================
// 维度描述
// ============================================================

function describeAdventure(score: number): string {
  if (score >= 6) return '你天生热爱冒险，愿意为了可能性赌上稳定。';
  if (score >= 2) return '你不排斥变化，但不会无谓冒险。';
  if (score >= -2) return '你在冒险和稳定之间保持平衡。';
  if (score >= -6) return '你倾向于稳妥，走一步看一步。';
  return '你非常谨慎，把确定性看得比一切都重要。';
}

function describeRational(score: number): string {
  if (score >= 6) return '你用逻辑和数据做决定，情感是需要管控的变量。';
  if (score >= 2) return '你偏理性，但也会让情感参与决策。';
  if (score >= -2) return '你的理性与感性相对均衡。';
  if (score >= -6) return '你更依赖直觉和感受，而非分析。';
  return '你是纯粹的感性动物，情感是你的指南针。';
}

function describeExtrovert(score: number): string {
  if (score >= 6) return '你在人群中充电，社交是你的能量来源。';
  if (score >= 2) return '你喜欢社交，但也需要独处时间。';
  if (score >= -2) return '你对社交与独处没有强烈偏好。';
  if (score >= -6) return '你更喜欢小圈子，对陌生人保持距离。';
  return '你是深度内向者，独处才能恢复能量。';
}

function describeResilience(score: number): string {
  if (score >= 6) return '你在逆境中愈发坚韧，压力反而能激发你。';
  if (score >= 2) return '你能承受挫折，但有时也需要发泄出口。';
  if (score >= -2) return '你的抗压能力中等，好的环境让你更好。';
  if (score >= -6) return '逆境会打击你，你需要更多支持才能站起来。';
  return '你很容易被击倒，也许是因为承受了太多不该你承受的。';
}

function describeMaterialistic(score: number): string {
  if (score >= 6) return '物质安全感对你来说极为重要，这驱动着你的大多数选择。';
  if (score >= 2) return '你务实，钱和资源是你考虑问题的重要因素。';
  if (score >= -2) return '你对物质与精神保持相对均衡的态度。';
  if (score >= -6) return '你更看重意义感，金钱够用就行。';
  return '你是理想主义者，宁可穷着也不愿为钱妥协。';
}

function describeEmpathy(score: number): string {
  if (score >= 6) return '你对他人的痛苦高度敏感，有时甚至忘了自己的需求。';
  if (score >= 2) return '你体贴他人，也能照顾好自己。';
  if (score >= -2) return '你对自我与他人的关注较为平衡。';
  if (score >= -6) return '你更习惯以自我为中心，这是生存策略，不是恶意。';
  return '你高度自我中心，也许是因为没人曾经真正照顾过你。';
}

// ============================================================
// 根据分数组合生成人格类型名
// ============================================================

function generateTypeName(scores: PersonalityScores): { name: string; emoji: string } {
  const { adventure, rational, extrovert, resilience, materialistic, empathy } = scores;

  // 几个有代表性的类型
  if (adventure >= 4 && resilience >= 3 && materialistic >= 3)
    return { name: '野心破局者', emoji: '🔥' };
  if (adventure >= 4 && empathy >= 3 && extrovert >= 3)
    return { name: '热血开拓者', emoji: '🌟' };
  if (adventure <= -4 && rational >= 3 && resilience >= 2)
    return { name: '沉稳谋士', emoji: '🏛️' };
  if (empathy >= 4 && extrovert >= 2 && materialistic <= 0)
    return { name: '温柔守光者', emoji: '🕯️' };
  if (rational >= 4 && extrovert <= -2 && adventure <= 0)
    return { name: '孤独深思者', emoji: '🌙' };
  if (resilience >= 4 && empathy <= -2 && materialistic >= 2)
    return { name: '冷静生存者', emoji: '🗿' };
  if (adventure >= 3 && extrovert <= -3)
    return { name: '独行侠客', emoji: '🌊' };
  if (empathy >= 3 && resilience <= -2)
    return { name: '敏感灵魂', emoji: '🌸' };
  if (materialistic <= -3 && empathy >= 2 && adventure >= 1)
    return { name: '理想漫游者', emoji: '☁️' };
  if (resilience <= -3 && empathy >= 3)
    return { name: '善良的碎片', emoji: '🪞' };
  if (resilience >= 3 && adventure >= 2 && rational >= 2)
    return { name: '韧性斗士', emoji: '⚔️' };

  // 默认
  return { name: '平凡行路人', emoji: '🛤️' };
}

// ============================================================
// 生成关键词
// ============================================================

function generateKeywords(
  scores: PersonalityScores,
  tags: Set<HiddenTag>,
): string[] {
  const kw: string[] = [];

  if (scores.adventure >= 4) kw.push('冒险');
  if (scores.adventure <= -4) kw.push('谨慎');
  if (scores.rational >= 4) kw.push('理性');
  if (scores.rational <= -4) kw.push('感性');
  if (scores.extrovert >= 4) kw.push('外向');
  if (scores.extrovert <= -4) kw.push('内敛');
  if (scores.resilience >= 4) kw.push('坚韧');
  if (scores.resilience <= -4) kw.push('敏感');
  if (scores.materialistic >= 4) kw.push('务实');
  if (scores.materialistic <= -4) kw.push('理想主义');
  if (scores.empathy >= 4) kw.push('共情');
  if (scores.empathy <= -4) kw.push('独立');

  if (tags.has('childhood_trauma')) kw.push('伤痕');
  if (tags.has('ambitious')) kw.push('野心');
  if (tags.has('creative_soul')) kw.push('创造力');
  if (tags.has('resilient')) kw.push('逆境中生长');
  if (tags.has('toxic_relationship')) kw.push('爱的伤');
  if (tags.has('poverty_scar')) kw.push('出身的重量');
  if (tags.has('street_smart')) kw.push('江湖阅历');
  if (tags.has('rebel_spirit')) kw.push('反骨');

  return kw.slice(0, 5);
}

// ============================================================
// 生成人生洞察语句
// ============================================================

function generateInsight(scores: PersonalityScores, tags: Set<HiddenTag>): string {
  if (tags.has('childhood_trauma') && scores.resilience >= 3)
    return '你从未有过一个"应该有的童年"，但你用自己的方式长大了。这是你最深的勋章。';
  if (tags.has('toxic_relationship') && scores.resilience <= 0)
    return '你爱的方式，和你被爱的方式，让你走了很多弯路。但那些弯路，让你更清楚地知道自己值得什么。';
  if (tags.has('ambitious') && scores.materialistic >= 3)
    return '你把"成功"看得很重，也为此付出了很多。现在的你，还记得当初是为了什么而出发吗？';
  if (scores.empathy >= 4 && scores.resilience <= 0)
    return '你太善良了，总是把别人放在自己前面。有时候，照顾好自己，也是一种勇气。';
  if (scores.adventure >= 4 && scores.resilience >= 3)
    return '你这一生跌跌撞撞，但你总是在摔倒之后，选择站起来再走一步。这很了不起。';
  if (scores.extrovert <= -4 && scores.rational >= 3)
    return '你话不多，但你观察到的，比大多数人说出来的都要多。';
  if (tags.has('poverty_scar') && scores.materialistic >= 2)
    return '出身决定了你的起点，但你用行动证明，这不是终点。';
  if (scores.adventure <= -4 && scores.resilience >= 2)
    return '你选择了一条安稳的路，并且把它走得很扎实。这不是懦弱，这是另一种智慧。';

  return '你走过的每一步，做过的每一个选择，都在悄悄塑造着你。这就是人生。';
}

// ============================================================
// 主函数：生成完整分析
// ============================================================

export function generatePersonalityAnalysis(
  scores: PersonalityScores,
  tags: Set<HiddenTag>,
): PersonalityResult {
  const { name, emoji } = generateTypeName(scores);

  const dimensions: DimensionResult[] = [
    {
      label: '冒险指数',
      leftLabel: '稳健保守',
      rightLabel: '敢于冒险',
      score: scores.adventure,
      description: describeAdventure(scores.adventure),
    },
    {
      label: '决策方式',
      leftLabel: '感性直觉',
      rightLabel: '理性分析',
      score: scores.rational,
      description: describeRational(scores.rational),
    },
    {
      label: '社交取向',
      leftLabel: '独立内省',
      rightLabel: '外向合群',
      score: scores.extrovert,
      description: describeExtrovert(scores.extrovert),
    },
    {
      label: '逆境反应',
      leftLabel: '敏感易伤',
      rightLabel: '坚韧抗压',
      score: scores.resilience,
      description: describeResilience(scores.resilience),
    },
    {
      label: '价值取向',
      leftLabel: '理想精神',
      rightLabel: '物质现实',
      score: scores.materialistic,
      description: describeMaterialistic(scores.materialistic),
    },
    {
      label: '关系模式',
      leftLabel: '自我中心',
      rightLabel: '利他共情',
      score: scores.empathy,
      description: describeEmpathy(scores.empathy),
    },
  ];

  const keywords = generateKeywords(scores, tags);
  const insight = generateInsight(scores, tags);

  const summary = `你是一个${name}——${dimensions[0].description}${dimensions[2].description}`;

  return { typeName: name, typeEmoji: emoji, summary, dimensions, keywords, insight };
}
