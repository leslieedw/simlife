import type { PersonalityScores, HiddenTag } from '../types';

export interface DimensionResult {
  label: string;
  leftLabel: string;
  rightLabel: string;
  score: number;
  description: string;
  dualEdge?: string; // 双刃性描述
}

export interface CulturalMatch {
  writer: { name: string; work: string; reason: string };
  // 一句真正共鸣的话——诗词、歌词、散文，来自世界各地
  resonantQuote: { text: string; attribution: string };
}

export interface PersonalityResult {
  typeName: string;
  typeSubtitle: string;
  dimensions: DimensionResult[];
  keywords: string[];
  insight: string;
  culturalMatch: CulturalMatch;
}

// ============================================================
// 维度文字描述
// ============================================================

function describeSelfExpression(score: number): { desc: string; dual?: string } {
  if (score >= 6) return {
    desc: '你能够清晰地表达自己的感受和需求，不为别人的舒适而沉默自己。',
    dual: '但有时候，你的直接也会让习惯沉默的世界感到不适。这不是你的问题。',
  };
  if (score >= 2) return {
    desc: '你在学着说出来，虽然有时候还会咽下去一些话。',
  };
  if (score >= -2) return {
    desc: '你的表达和压抑处于一种微妙的平衡里。',
  };
  if (score >= -6) return {
    desc: '你习惯把感受藏起来，让别人先，让自己的需求等一等。',
    dual: '长期的压抑会变成身体的语言，有时候会更重。',
  };
  return {
    desc: '你几乎不开口说自己真正的感受，不是因为没有，是因为很早就学会了不说是更安全的。',
    dual: '那个被你锁起来的自己，一直都在。',
  };
}

function describeResistance(score: number): { desc: string; dual?: string } {
  if (score >= 6) return {
    desc: '你有一种天然的反骨，看见不对就想说，看见规则就想知道为什么。',
    dual: '反抗需要代价，你比大多数人付出了更多——但你也比大多数人，更自由。',
  };
  if (score >= 2) return {
    desc: '你不是顺从的人，但你也知道什么时候该选择战场。',
  };
  if (score >= -2) return {
    desc: '你在顺应和反抗之间找到了一种生存方式。',
  };
  if (score >= -6) return {
    desc: '你更习惯顺着走，减少摩擦，让事情顺滑一些。',
    dual: '顺应有时候是智慧，有时候是代价——只有你自己知道是哪一种。',
  };
  return {
    desc: '你很少反抗。也许是太早就知道反抗的代价，也许是你把力气放在了别处。',
    dual: '没有反抗不代表没有愤怒。那个愤怒在哪里？',
  };
}

function describeStructuralAwareness(score: number): { desc: string; dual?: string } {
  if (score >= 6) return {
    desc: '你能够清楚地看见那些结构性的不公平——它们不是偶然，不是你个人的问题，是系统。',
    dual: '看见了，有时候反而更难继续假装没看见。这是一种清醒的代价。',
  };
  if (score >= 2) return {
    desc: '你开始能区分"这是我的错"和"这是系统对我的事"。',
  };
  if (score >= -2) return { desc: '你的意识在两者之间游走，有时清醒，有时又会归因于自己。' };
  if (score >= -6) return {
    desc: '遇到问题，你更容易先检讨自己。',
    dual: '自我反省是好事，但当它用来承担不属于你的责任时，就变成了重量。',
  };
  return {
    desc: '你把很多不属于你的事情都扛在了自己身上。那些重量，很多不是你的。',
    dual: '这不是你的错，这是你从小学到的生存方式。',
  };
}

function describeConnection(score: number): { desc: string; dual?: string } {
  if (score >= 6) return {
    desc: '你有真实的、深层的女性联结。那些女性是你的镜子、盾牌，也是你的港湾。',
    dual: '女性联结是力量，但它不能替代你和自己的关系。',
  };
  if (score >= 2) return { desc: '你有一些真正信任的女性朋友，哪怕不多，但是真的。' };
  if (score >= -2) return { desc: '你的人际关系里有女性，但也许还有一点距离和防备。' };
  if (score >= -6) return {
    desc: '你和其他女性之间有一堵墙，有时候是竞争，有时候是不信任。',
    dual: '这堵墙通常不是你建的，是环境教你建的。',
  };
  return {
    desc: '你不太信任其他女性，更习惯独自面对一切。',
    dual: '那些被"女人就是这样"教会你的不信任，保护了谁的利益？',
  };
}

function describeAuthenticity(score: number): { desc: string; dual?: string } {
  if (score >= 6) return {
    desc: '你是一个高度活在自己内心标准里的人。别人的眼光不是你的地图。',
    dual: '真实的代价是孤独，有时候你会感到没人理解。但被理解，和被看见，不总是同一件事。',
  };
  if (score >= 2) return { desc: '你有自己的价值感，虽然有时候还会在意别人怎么看。' };
  if (score >= -2) return { desc: '你在真实和表演之间保持着某种平衡。' };
  if (score >= -6) return {
    desc: '你花了很多能量在管理别人对你的印象上——让人喜欢你，让人觉得你没问题。',
    dual: '表演是消耗。那个疲惫，不是软弱，是真实存在的重量。',
  };
  return {
    desc: '你几乎活在别人的期待里。那个最真实的你，被藏得很深。',
    dual: '但她没有消失。她只是在等一个安全的地方。',
  };
}

function describeThriving(score: number): { desc: string; dual?: string } {
  if (score >= 6) return {
    desc: '你不只是活着，你在真正地生长——向着光，向着自己，向着你还没到达的地方。',
  };
  if (score >= 2) return { desc: '你的生命大部分时候有生气，有方向，有想做的事。' };
  if (score >= -2) return { desc: '你有时候在绽放，有时候只是撑着，两种状态都有。' };
  if (score >= -6) return {
    desc: '你很多时候处在生存模式里——消耗大于滋养，只是撑过每一天。',
    dual: '生存模式通常不是选择，是环境逼的。能活下来，本身就是力气。',
  };
  return {
    desc: '你一直在很艰难地撑着。这需要巨大的力量，哪怕旁边没有人看见。',
    dual: '你值得的不只是"活下来"。虽然先活下来，才有后来的一切。',
  };
}

// ============================================================
// 人格类型名
// ============================================================

// 所有人格类型定义 + 评分函数
interface PersonalityType {
  name: string;
  subtitle: string;
  score: (s: PersonalityScores, t: Set<HiddenTag>) => number;
}

const PERSONALITY_TYPES: PersonalityType[] = [
  // ── Fire types (反抗/力量) ──
  { name: '野火', subtitle: '越烧越亮',
    score: (s) => (s.resistance >= 9 ? 5 : 0) + (s.selfExpression >= 7 ? 4 : 0) },
  { name: '闷烧', subtitle: '火在里面，出口堵了',
    score: (s) => (s.resistance >= 5 ? 4 : 0) + (s.selfExpression <= 0 ? 5 : 0) },
  { name: '火柴', subtitle: '只亮了一下，但她记得那道光',
    score: (s) => (s.resistance >= 3 && s.resistance <= 6 ? 4 : 0) + (s.thriving <= 0 ? 5 : 0) },
  { name: '雷暴', subtitle: '她的沉默攒够了，一次说完',
    score: (s, t) => (s.resistance >= 6 ? 4 : 0) + (s.structuralAwareness >= 7 ? 3 : 0) + (t.has('survived_violence') ? 5 : 0) },

  // ── Water types (联结/流动) ──
  { name: '暗流', subtitle: '不喊口号，但不可逆转',
    score: (s) => (s.connection >= 6 ? 4 : 0) + (s.authenticity >= 6 ? 3 : 0) + (s.resistance >= 3 && s.resistance <= 6 ? 3 : 0) },
  { name: '深井', subtitle: '她很深，没人看得见底',
    score: (s, t) => (t.has('high_sensitivity') ? 5 : 0) + (s.selfExpression <= 0 ? 5 : 0) },
  { name: '潮汐', subtitle: '来来去去，每次都留下什么',
    score: (s) => (s.connection >= 6 ? 4 : 0) + (s.selfExpression >= 5 ? 4 : 0) },
  { name: '织网的人', subtitle: '她把断掉的线重新接上',
    score: (s, t) => (s.connection >= 8 ? 5 : 0) + (t.has('female_solidarity') ? 3 : 0) },

  // ── Plant types (成长/生命力) ──
  { name: '石缝草', subtitle: '没有土壤也能长',
    score: (s, t) => (t.has('poverty_scar') ? 6 : 0) + (s.thriving >= 1 ? 3 : 0) },
  { name: '霜后花', subtitle: '来得晚，但开得真',
    score: (s, t) => (t.has('late_bloomer') ? 6 : 0) + (s.thriving >= 2 ? 3 : 0) },
  { name: '向阳花', subtitle: '不管怎样，一直朝着光',
    score: (s) => (s.thriving >= 5 ? 5 : 0) + (s.authenticity >= 5 ? 4 : 0) },
  { name: '枯木', subtitle: '她停了，不是不想长',
    score: (s, t) => (s.thriving <= -3 ? 5 : 0) + (t.has('addiction') ? 6 : 0) },

  // ── Light/Shadow types (意识/真实) ──
  { name: '醒着的人', subtitle: '知道了就回不去了',
    score: (s) => (s.structuralAwareness >= 8 ? 5 : 0) + (s.selfExpression >= 5 ? 4 : 0) },
  { name: '第三只眼', subtitle: '看见了，但说不出口',
    score: (s) => (s.structuralAwareness >= 6 ? 4 : 0) + (s.resistance <= 2 ? 5 : 0) },
  { name: '镜子', subtitle: '她先看清了自己',
    score: (s) => (s.authenticity >= 7 ? 5 : 0) + (s.structuralAwareness >= 6 ? 4 : 0) },
  { name: '面具', subtitle: '戴太久，长在脸上了',
    score: (s, t) => (s.authenticity <= -3 ? 6 : 0) + (t.has('good_girl_conditioning') ? 3 : 0) },

  // ── Object types (角色/负担) ──
  { name: '蜡烛', subtitle: '照亮所有人，烧完自己',
    score: (s, t) => (t.has('second_shift_burden') ? 5 : 0) + (s.thriving <= 0 ? 4 : 0) + (s.connection >= 3 ? 2 : 0) },
  { name: '盾牌', subtitle: '她保护别人，没人保护她',
    score: (s, t) => (t.has('has_children') ? 5 : 0) + (s.connection >= 4 ? 3 : 0) + (s.thriving <= 1 ? 3 : 0) },
  { name: '钥匙', subtitle: '她找到了那把锁的答案',
    score: (s, t) => (t.has('economic_independence_drive') ? 5 : 0) + (s.resistance >= 5 ? 4 : 0) },
  { name: '空房间', subtitle: '伍尔夫笔下的那间',
    score: (s, t) => (t.has('creative_outlet') ? 5 : 0) + (s.authenticity >= 5 ? 4 : 0) },

  // ── Blade types (智识/锋利) ──
  { name: '刀锋', subtitle: '太聪明是一种孤独',
    score: (_s, t) => (t.has('academic_escape') ? 5 : 0) + (t.has('glass_ceiling_seen') ? 5 : 0) },
  { name: '磨刀石', subtitle: '用知识把自己磨出来',
    score: (s, t) => (t.has('academic_escape') ? 4 : 0) + (t.has('higher_education') ? 4 : 0) + (s.structuralAwareness >= 4 ? 3 : 0) },
  { name: '纸上谈兵', subtitle: '什么都懂，什么都改变不了',
    score: (s) => (s.structuralAwareness >= 7 ? 4 : 0) + (s.resistance <= 1 ? 5 : 0) + (s.thriving <= 0 ? 3 : 0) },

  // ── Bird types (自由/关系) ──
  { name: '笼中鸟', subtitle: '她以为那是家',
    score: (_s, t) => (t.has('married') ? 4 : 0) + (t.has('trauma_bond') ? 6 : 0) },
  { name: '出笼的鸟', subtitle: '终于飞出去了',
    score: (_s, t) => (t.has('abroad_experience') ? 5 : 0) + (t.has('rebel_spirit') ? 4 : 0) },
  { name: '候鸟', subtitle: '一直在找一个可以停的地方',
    score: (s, t) => (t.has('abroad_experience') ? 5 : 0) + (s.connection <= 2 ? 5 : 0) },
  { name: '孤岛', subtitle: '不是孤独，是完整',
    score: (s, t) => (t.has('never_married') ? 5 : 0) + (s.authenticity >= 6 ? 4 : 0) },

  // ── Trauma/Rebirth types ──
  { name: '裂缝', subtitle: '伤口是光进来的地方',
    score: (_s, t) => (t.has('high_sensitivity') ? 4 : 0) + (t.has('creative_outlet') ? 5 : 0) },
  { name: '灰烬', subtitle: '从烧完的地方重新长出来',
    score: (s, t) => (t.has('survived_violence') ? 5 : 0) + (s.thriving >= 3 ? 4 : 0) },
  { name: '疤', subtitle: '证明她活过最难的部分',
    score: (s, t) => (t.has('survived_violence') ? 5 : 0) + (s.thriving <= 1 ? 4 : 0) },

  // ── Self types ──
  { name: '自洽', subtitle: '不需要世界同意',
    score: (s) => (s.authenticity >= 8 ? 5 : 0) + (s.thriving >= 4 ? 4 : 0) },
  { name: '寻路人', subtitle: '还在走，还没到',
    score: () => 2 }, // 默认有基底分，永远有机会

  // ── Special combo types ──
  { name: '容器', subtitle: '所有碎片都装进了创作里',
    score: (_s, t) => (t.has('creative_outlet') ? 4 : 0) + (t.has('high_sensitivity') ? 3 : 0) + (t.has('trauma_bond') ? 4 : 0) },
  { name: '根', subtitle: '在土里撑住了上面所有人',
    score: (s, t) => (s.connection >= 5 ? 4 : 0) + (t.has('second_shift_burden') ? 4 : 0) + (s.thriving >= 1 ? 3 : 0) },
  { name: '种子', subtitle: '还没发芽，但她是完整的',
    score: (s) => {
      const dims = [s.selfExpression, s.resistance, s.structuralAwareness, s.connection, s.authenticity, s.thriving];
      const allMild = dims.every(d => d >= -2 && d <= 2);
      return allMild ? 8 : 0;
    } },
];

function generateTypeName(scores: PersonalityScores, tags: Set<HiddenTag>): { name: string; subtitle: string } {
  // 边界：所有分数都是 0（玩家跳过了所有选择）
  const allZero = Object.values(scores).every(v => v === 0);
  if (allZero) return { name: '旁观者', subtitle: '站在岔路口，一步没迈' };

  // 评分所有类型
  const scored = PERSONALITY_TYPES
    .map(t => ({ ...t, s: t.score(scores, tags) }))
    .filter(t => t.s > 0)
    .sort((a, b) => b.s - a.s);

  if (scored.length === 0) return { name: '寻路人', subtitle: '还在走，还没到' };

  // 从前3名里加权随机（分数越高概率越大，但不是100%）
  const top = scored.slice(0, 3);
  const totalWeight = top.reduce((sum, t) => sum + t.s * t.s, 0); // 平方让高分更有优势但不绝对
  let rand = Math.random() * totalWeight;
  for (const t of top) {
    rand -= t.s * t.s;
    if (rand <= 0) return { name: t.name, subtitle: t.subtitle };
  }
  return { name: top[0].name, subtitle: top[0].subtitle };
}

// ============================================================
// 关键词
// ============================================================

function generateKeywords(scores: PersonalityScores, tags: Set<HiddenTag>): string[] {
  const kw: string[] = [];
  if (scores.selfExpression >= 4) kw.push('说出口');
  if (scores.selfExpression <= -4) kw.push('沉默的重量');
  if (scores.resistance >= 4) kw.push('越界');
  if (scores.resistance <= -4) kw.push('顺水的苦');
  if (scores.structuralAwareness >= 4) kw.push('看见结构');
  if (scores.structuralAwareness <= -4) kw.push('自我归因');
  if (scores.connection >= 4) kw.push('女性联结');
  if (scores.connection <= -4) kw.push('孤身作战');
  if (scores.authenticity >= 4) kw.push('活出真实');
  if (scores.authenticity <= -4) kw.push('表演的疲惫');
  if (scores.thriving >= 4) kw.push('生命绽放');
  if (scores.thriving <= -4) kw.push('生存模式');
  if (tags.has('high_sensitivity')) kw.push('高敏感');
  if (tags.has('creative_outlet')) kw.push('创造力');
  if (tags.has('female_solidarity')) kw.push('女性力量');
  if (tags.has('survived_violence')) kw.push('幸存者');
  if (tags.has('economic_independence_drive')) kw.push('经济自主');
  if (tags.has('rebel_spirit')) kw.push('反骨');
  if (tags.has('good_girl_conditioning')) kw.push('好女孩训导');
  if (tags.has('beauty_currency')) kw.push('容貌货币化');
  if (tags.has('late_bloomer')) kw.push('晚开的花');
  if (tags.has('glass_ceiling_seen')) kw.push('天花板');
  if (tags.has('second_shift_burden')) kw.push('隐形劳动');
  if (tags.has('poverty_scar')) kw.push('贫穷的印记');
  return kw.slice(0, 6);
}

// ============================================================
// 核心洞察语
// ============================================================

function generateInsight(scores: PersonalityScores, tags: Set<HiddenTag>): string {
  const allZero = Object.values(scores).every(v => v === 0);
  if (allZero) return '你看完了所有的选项，但没有选。也许是因为每一个都不够好，也许是因为你还没有准备好。旁观本身，也是一种姿态。';
  if (tags.has('survived_violence') && scores.thriving >= 2)
    return '你经历的那些，没有人应该经历。你活了下来，这是你做过的最勇敢的事，即使没有人颁奖给你。';
  if (tags.has('good_girl_conditioning') && scores.resistance >= 4)
    return '你是在"好女孩"的土壤里，长出了一点点野草。那是你自己生长的方向，没有人帮你。';
  if (scores.selfExpression <= -5 && scores.thriving <= -2)
    return '你把自己藏得很深，也许是有原因的。但那个真实的你没有消失——她只是在等一个更安全的地方。';
  if (scores.connection >= 4 && tags.has('female_solidarity'))
    return '你懂得联结的力量。在一个习惯让女性互相竞争的世界里，这是一种反抗，也是一种礼物。';
  if (scores.structuralAwareness >= 5)
    return '看见系统需要勇气。很多人宁可相信是自己的问题，因为那样改变自己就够了。你选了那个更难但更真实的路。';
  if (tags.has('beauty_currency') && scores.authenticity <= -2)
    return '你用外貌换过很多东西，也付出过很多代价。有一个问题值得慢慢想：如果那些都不算，你是谁？';
  if (tags.has('academic_escape') && scores.thriving >= 2)
    return '知识是你给自己的礼物，也是你凿出来的那条路。你用最有力的方式说了"我要走"。';
  if (scores.authenticity >= 5)
    return '活在自己的标准里不容易，尤其在一个一直告诉你"女人应该"的世界。你做到了，哪怕有代价。';
  if (scores.thriving <= -4)
    return '生存模式是真实的重量。你一直在撑着，即使没有人知道那有多重。你不是不够好，是压着你的太重。';
  if (tags.has('late_bloomer') && scores.thriving >= 2)
    return '你花了很长时间才走到这里。有人说你太晚了——但你知道吗，那些"太晚了"都是别人的时间表，不是你的。你的时钟，从来只有你自己能设。';
  if (tags.has('second_shift_burden') && scores.selfExpression <= 0)
    return '你照顾了那么多人，有没有人问过你，你还好吗？你值得被照顾，不是因为你做了什么，而是因为你也是一个人。';
  if (scores.resistance >= 4 && scores.selfExpression <= -3)
    return '你体内有很多力气，但它还没找到出口。那种憋着的感觉——那是真实的力量在积蓄，不是软弱。';
  if (scores.structuralAwareness >= 4 && scores.resistance <= -2)
    return '你看见了那些不公平，却选择了留在里面。这不是愚蠢，这是复杂的生存。看见和离开，是两件不同的事。';
  if (tags.has('glass_ceiling_seen') && scores.selfExpression >= 2)
    return '你给那些一直存在却没有名字的东西，起了名字。这是一件被严重低估的事——命名是改变的开始。';
  if (tags.has('poverty_scar') && scores.thriving >= 1)
    return '那种贫瘠的土壤没有教你该怎么长，但你还是长起来了。这不是奇迹，这是韧性——只有在那种土地上生长过的人才知道那需要多少力气。';
  return '你这一生所有的选择，包括那些你最后悔的，都是在你拥有的那些条件下，你能做到的最好。这不是开脱，这是事实。';
}

// ============================================================
// 文化配对
// ============================================================

// 随机选一个
function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// 每个作家的语录池
interface WriterProfile {
  writer: CulturalMatch['writer'];
  quotes: CulturalMatch['resonantQuote'][];
}

const WRITER_PROFILES: Record<string, WriterProfile> = {
  xiaohong: {
    writer: { name: '萧红', work: '《呼兰河传》', reason: '她一生都在逃离，也一生都在写那个逃不掉的地方。她的文字是废墟里长出来的花，不是温室里培育的。' },
    quotes: [
      { text: '我一个人走了，不带一点留恋，不带一点犹豫，不带一点悲哀。', attribution: '萧红 · 《呼兰河传》' },
      { text: '逆来顺受，你说我的生命可惜，我自己却不在乎。你看着很危险，我却自以为得意。', attribution: '萧红 · 《呼兰河传》' },
      { text: '我不能选择怎么生怎么死，但我能决定怎么爱怎么活。这是我要的自由。', attribution: '萧红 · 精神' },
      { text: '我不怕风暴，因为我正在学习驾驶自己的船。', attribution: 'Louisa May Alcott · 《小妇人》' },
    ],
  },
  zhangailing: {
    writer: { name: '张爱玲', work: '《半生缘》《倾城之恋》', reason: '她不美化爱情，不评判女人的选择，只是用极度精准的眼睛，把那些无法言说的处境，写成了语言。' },
    quotes: [
      { text: '也许每一个男子全都有过这样的两个女人，至少两个。娶了红玫瑰，久而久之，红的变了墙上的一抹蚊子血，白的还是"床前明月光"。', attribution: '张爱玲 · 《红玫瑰与白玫瑰》' },
      { text: '生活是一袭华美的袍，爬满了蚤子。', attribution: '张爱玲' },
      { text: '你如果认识从前的我，也许你会原谅现在的我。', attribution: '张爱玲 · 《倾城之恋》' },
      { text: '因为懂得，所以慈悲。', attribution: '张爱玲' },
      { text: '长的是磨难，短的是人生。', attribution: '张爱玲 · 《半生缘》' },
    ],
  },
  woolf: {
    writer: { name: '弗吉尼亚·伍尔夫', work: '《一间自己的房间》', reason: '她说女性需要钱和一间自己的屋子。她说的不只是书房，是一个没有人可以进来要求你的空间——哪怕只存在于内心。' },
    quotes: [
      { text: '不必行色匆匆，不必光芒四射，不必成为别人，只需做自己。', attribution: '弗吉尼亚·伍尔夫' },
      { text: '你无法通过逃避生活来获得平静。', attribution: '弗吉尼亚·伍尔夫' },
      { text: '一个人如果没有房间，就没有完整的自我。', attribution: '弗吉尼亚·伍尔夫 · 《一间自己的房间》' },
      { text: '女人要有自己的钱和自己的房间。这不是贪婪，这是最基本的自由。', attribution: '弗吉尼亚·伍尔夫 · 《一间自己的房间》' },
    ],
  },
  beauvoir: {
    writer: { name: '西蒙·波伏娃', work: '《第二性》', reason: '她把"女人是什么"这个问题，从哲学的角度彻底拆开来看。她的清醒让很多人不舒服，但也让更多人，第一次能够命名自己的处境。' },
    quotes: [
      { text: '女人不是天生的，是被塑造的。', attribution: '西蒙·波伏娃 · 《第二性》' },
      { text: '当任何一个女性还不自由的时候，我就不是自由的——即使她的枷锁和我的完全不同。', attribution: 'Audre Lorde' },
      { text: '我太聪明，太渴望，太骄傲，不可能去过一种没有意义的生活。', attribution: '西蒙·波伏娃 · 《名士风流》' },
      { text: '自由并不是轻松的选择。自由是艰难的选择之后，不后悔。', attribution: '西蒙·波伏娃 · 精神' },
    ],
  },
  sanmao: {
    writer: { name: '三毛', work: '《撒哈拉的故事》', reason: '她把"女人可以去很远的地方"这件事，用自己的人生做了证明。不是没有代价，是她觉得那个代价值得。' },
    quotes: [
      { text: '告诉我，你打算用你这狂野而珍贵的一生做什么？', attribution: 'Mary Oliver · 《夏日》' },
      { text: '我不管多少人说不行，我要去，我要自己去，我要走到另一个地方去，去看看。', attribution: '三毛 · 《撒哈拉的故事》' },
      { text: '心若没有栖息的地方，到哪里都是在流浪。', attribution: '三毛' },
      { text: '如果有来生，要做一棵树，站成永恒，没有悲伤的姿势。', attribution: '三毛 · 《说给自己听》' },
    ],
  },
  yishu: {
    writer: { name: '亦舒', work: '《我的前半生》《喜宝》', reason: '她笔下的女人，要么非常清醒地选择妥协，要么非常清醒地拒绝妥协。她从不告诉你哪个更对。只是照见。' },
    quotes: [
      { text: '我要很多很多的爱，如果没有爱，那就很多很多的钱，如果两件都没有，有健康也是好的。', attribution: '亦舒 · 《喜宝》' },
      { text: '能够说出的委屈，便不算委屈；能够抢走的爱人，便不算爱人。', attribution: '亦舒 · 《开到荼蘼》' },
      { text: '做人凡事要静：静静地来，静静地去，静静努力，静静收获，切忌喧哗。', attribution: '亦舒' },
      { text: '真正有气质的女人，从不炫耀自己拥有的一切。她不告诉人她读过什么书，去过什么地方，有多少件衣裳，买过什么珠宝，因为她没有自卑感。', attribution: '亦舒 · 《圆舞》' },
    ],
  },
  lorde: {
    writer: { name: 'Audre Lorde', work: '《Sister Outsider》', reason: '她是黑人、女性、酷儿、诗人。她说沉默不会保护你，说出来才会。她的写作是为了所有被边缘化的女性。' },
    quotes: [
      { text: '分裂我们的不是差异，是我们无法承认、接受和尊重那些差异。', attribution: 'Audre Lorde · 《Sister Outsider》' },
      { text: '你的沉默保护不了你。', attribution: 'Audre Lorde · 《Sister Outsider》' },
      { text: '关爱自己不是自我放纵，而是自我保存——这是一种政治行为。', attribution: 'Audre Lorde' },
      { text: '我不是要变得自由。我本来就是自由的。', attribution: 'Toni Morrison' },
    ],
  },
  duras: {
    writer: { name: '玛格丽特·杜拉斯', work: '《情人》《广岛之恋》', reason: '她写那些难以言说的感情——不道德的、令人困惑的、无法被归类的。她不解释，不辩护，只是把它们放在那里，非常诚实。' },
    quotes: [
      { text: '很早以前，在我还是少女的时候，一个男人朝我走来，他说：我比你年轻，请你不要像爱一个老女人一样爱我。', attribution: '玛格丽特·杜拉斯 · 《情人》' },
      { text: '爱是始终想触碰却又收回的手。', attribution: '玛格丽特·杜拉斯 · 《情人》' },
      { text: '我在你身上认出了我曾经历过的所有悲伤和疲惫。我在你脸上看见了我自己。', attribution: '玛格丽特·杜拉斯 · 《广岛之恋》' },
      { text: '毁灭我的，也是让我存在的。', attribution: '玛格丽特·杜拉斯 · 精神' },
    ],
  },
  oliver: {
    writer: { name: 'Mary Oliver', work: '《Wild Geese》《夏日》', reason: '她写的不是波澜壮阔的人生，是一个早晨的光，一片树叶，一群飞鸟。她说：你只需要让那个柔软的动物，爱它所爱的。' },
    quotes: [
      { text: '你不必做一个好人。你不必跪着穿过荒漠一百英里来忏悔。你只需让心中那只柔软的动物去爱它所爱的。', attribution: 'Mary Oliver · 《Wild Geese》' },
      { text: '有人用一辈子才学会留意。我不想到最后才发现自己从来没有活过。', attribution: 'Mary Oliver · 《夏日》' },
      { text: '注意力是祈祷最基本的形式。', attribution: 'Mary Oliver' },
      { text: '你唯一的人生，是这一个。它一直在这里，等你去注意它。', attribution: 'Mary Oliver · 精神' },
    ],
  },
  yangbenfen: {
    writer: { name: '杨本芬', work: '《秋园》', reason: '她七十岁才开始写作，写的是她母亲和那一代普通中国女性的一生。她说：她们活过，她们应该被记住。' },
    quotes: [
      { text: '那些在暗处发光的人，只是因为没有人记录，不等于她们不存在。', attribution: '杨本芬 · 《我本芬芳》' },
      { text: '没有什么是完美的，但一些事情已经很好了。', attribution: '杨本芬 · 《秋园》' },
      { text: '有些花，是要等到霜降之后，才开得出那个颜色。', attribution: '席慕蓉 · 意境' },
      { text: '她的故事没有人记得了，但她来过，她活过，这件事是真的。', attribution: '杨本芬 · 《秋园》精神' },
    ],
  },
  ximurong: {
    writer: { name: '席慕蓉', work: '《一棵开花的树》', reason: '她写时间、遗忘、爱与错过，用非常轻的笔触写非常重的事。她的诗不喊叫，但你读完之后，会在心里安静很久。' },
    quotes: [
      { text: '所有的结局都已写好，所有的泪水都已启程，却忘了给你一个吻，让你从此不再想起。', attribution: '席慕蓉 · 《一棵开花的树》' },
      { text: '在长长的一生里，为什么，欢乐总是乍现就凋落？走得最急的，都是最美的时光。', attribution: '席慕蓉' },
      { text: '我一直想要，和你一样的一颗心，我一直想要，可以和你并肩走的路。', attribution: '席慕蓉 · 《无怨的青春》' },
      { text: '请让我成为你的故事里的一棵树，在你经过的时候，刚好开满了花。', attribution: '席慕蓉 · 《一棵开花的树》' },
    ],
  },
};

// 每个作家的亲和度评分
interface WriterScorer {
  key: string;
  score: (s: PersonalityScores, t: Set<HiddenTag>) => number;
}

const WRITER_SCORERS: WriterScorer[] = [
  { key: 'xiaohong', score: (s, t) =>
    (t.has('poverty_scar') ? 4 : 0) + (t.has('academic_escape') ? 2 : 0) +
    (s.resistance >= 3 ? 2 : 0) + (s.thriving >= 0 && s.thriving <= 3 ? 1 : 0) },
  { key: 'zhangailing', score: (s, t) =>
    (t.has('trauma_bond') ? 4 : 0) + (t.has('beauty_currency') ? 3 : 0) +
    (s.structuralAwareness >= 3 ? 2 : 0) + (s.authenticity <= 0 ? 2 : 0) },
  { key: 'woolf', score: (s, t) =>
    (t.has('creative_outlet') ? 4 : 0) + (s.authenticity >= 3 ? 2 : 0) +
    (s.selfExpression >= 3 ? 2 : 0) + (t.has('higher_education') ? 1 : 0) },
  { key: 'beauvoir', score: (s, t) =>
    (s.structuralAwareness >= 4 ? 3 : 0) + (s.resistance >= 3 ? 2 : 0) +
    (t.has('glass_ceiling_seen') ? 3 : 0) + (s.connection >= 2 ? 1 : 0) },
  { key: 'sanmao', score: (s, t) =>
    (t.has('rebel_spirit') ? 4 : 0) + (s.authenticity >= 3 ? 2 : 0) +
    (s.resistance >= 3 ? 2 : 0) + (t.has('abroad_experience') ? 3 : 0) },
  { key: 'yishu', score: (s, t) =>
    (t.has('economic_independence_drive') ? 4 : 0) + (s.authenticity >= 2 ? 2 : 0) +
    (t.has('entrepreneur') ? 3 : 0) + (s.thriving >= 1 ? 1 : 0) },
  { key: 'lorde', score: (s, t) =>
    (s.connection >= 3 ? 3 : 0) + (t.has('female_solidarity') ? 4 : 0) +
    (s.selfExpression >= 2 ? 2 : 0) + (s.structuralAwareness >= 3 ? 1 : 0) },
  { key: 'duras', score: (s, t) =>
    (s.thriving <= -1 ? Math.abs(s.thriving) : 0) + (t.has('trauma_bond') ? 3 : 0) +
    (s.selfExpression <= -2 ? 2 : 0) + (s.authenticity <= -1 ? 1 : 0) },
  { key: 'oliver', score: (s, t) =>
    (t.has('high_sensitivity') ? 4 : 0) + (s.thriving >= 0 ? 2 : 0) +
    (s.authenticity >= 1 ? 1 : 0) + (s.connection >= 1 ? 1 : 0) },
  { key: 'yangbenfen', score: (s, t) =>
    (t.has('late_bloomer') ? 5 : 0) + (s.thriving >= 0 ? 1 : 0) +
    (s.connection >= 1 ? 2 : 0) + (t.has('has_children') ? 1 : 0) },
  { key: 'ximurong', score: (s) =>
    2 + (s.authenticity >= 0 ? 1 : 0) + (s.thriving >= -1 && s.thriving <= 3 ? 1 : 0) }, // 默认基底分
];

function generateCulturalMatch(scores: PersonalityScores, tags: Set<HiddenTag>): CulturalMatch {
  // 评分所有作家
  const scored = WRITER_SCORERS
    .map(w => ({ key: w.key, s: w.score(scores, tags) }))
    .filter(w => w.s > 0)
    .sort((a, b) => b.s - a.s);

  // 从前4名里加权随机
  const top = scored.slice(0, 4);
  const totalWeight = top.reduce((sum, w) => sum + w.s * w.s, 0);
  let rand = Math.random() * totalWeight;
  let chosen = top[0].key;
  for (const w of top) {
    rand -= w.s * w.s;
    if (rand <= 0) { chosen = w.key; break; }
  }

  const profile = WRITER_PROFILES[chosen] ?? WRITER_PROFILES.ximurong;
  return {
    writer: profile.writer,
    resonantQuote: pickRandom(profile.quotes),
  };
}

// ============================================================
// 主函数
// ============================================================

export function generatePersonalityAnalysis(
  scores: PersonalityScores,
  tags: Set<HiddenTag>,
): PersonalityResult {
  const { name, subtitle } = generateTypeName(scores, tags);

  const dimSelfExp = describeSelfExpression(scores.selfExpression);
  const dimResist = describeResistance(scores.resistance);
  const dimStruct = describeStructuralAwareness(scores.structuralAwareness);
  const dimConn = describeConnection(scores.connection);
  const dimAuth = describeAuthenticity(scores.authenticity);
  const dimThrive = describeThriving(scores.thriving);

  const dimensions: DimensionResult[] = [
    { label: '自我表达', leftLabel: '压抑沉默', rightLabel: '说出来', score: scores.selfExpression, description: dimSelfExp.desc, dualEdge: dimSelfExp.dual },
    { label: '反抗越界', leftLabel: '顺应驯化', rightLabel: '越界反叛', score: scores.resistance, description: dimResist.desc, dualEdge: dimResist.dual },
    { label: '结构意识', leftLabel: '自我归因', rightLabel: '看见系统', score: scores.structuralAwareness, description: dimStruct.desc, dualEdge: dimStruct.dual },
    { label: '女性联结', leftLabel: '孤立竞争', rightLabel: '联结共生', score: scores.connection, description: dimConn.desc, dualEdge: dimConn.dual },
    { label: '活出真实', leftLabel: '表演取悦', rightLabel: '内心标准', score: scores.authenticity, description: dimAuth.desc, dualEdge: dimAuth.dual },
    { label: '生命状态', leftLabel: '生存挣扎', rightLabel: '生长绽放', score: scores.thriving, description: dimThrive.desc, dualEdge: dimThrive.dual },
  ];

  return {
    typeName: name,
    typeSubtitle: subtitle,
    dimensions,
    keywords: generateKeywords(scores, tags),
    insight: generateInsight(scores, tags),
    culturalMatch: generateCulturalMatch(scores, tags),
  };
}
