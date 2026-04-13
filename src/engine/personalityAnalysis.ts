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
  musician: { name: string; reason: string };
  song: { title: string; artist: string; reason: string };
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

function generateTypeName(scores: PersonalityScores, tags: Set<HiddenTag>): { name: string; subtitle: string } {
  const { selfExpression, resistance, structuralAwareness, connection, authenticity, thriving } = scores;

  if (resistance >= 5 && selfExpression >= 4 && authenticity >= 3)
    return { name: '燃烧的边界人', subtitle: '她知道那些规则是给谁写的，然后越过去了' };
  if (connection >= 5 && authenticity >= 3 && thriving >= 3)
    return { name: '联结者', subtitle: '她的力量来自与其他女性站在一起' };
  if (structuralAwareness >= 5 && selfExpression >= 3 && resistance >= 2)
    return { name: '清醒的目击者', subtitle: '她看见了，她说出来了，哪怕声音颤抖' };
  if (authenticity >= 5 && selfExpression >= 4 && thriving >= 2)
    return { name: '自己的人', subtitle: '活在内心标准里，而不是别人的眼光里' };
  if (tags.has('high_sensitivity') && (tags.has('creative_outlet') || selfExpression >= 3))
    return { name: '高敏感创造者', subtitle: '她感受得多，也因此创造得深' };
  if (tags.has('survived_violence') && thriving >= 2)
    return { name: '幸存与绽放', subtitle: '她从最深处走出来，依然向着光' };
  if (tags.has('academic_escape') && structuralAwareness >= 2)
    return { name: '用知识凿路的人', subtitle: '她把书页变成了离开的船票' };
  if (selfExpression <= -4 && authenticity <= -3)
    return { name: '藏起来的人', subtitle: '她的真实自我在等待一个安全的地方' };
  if (thriving <= -3 && resistance <= -2)
    return { name: '沉重的承担者', subtitle: '她扛着太多不属于自己的重量' };
  if (connection >= 3 && structuralAwareness >= 3)
    return { name: '觉醒中的女性', subtitle: '她在理解自己所在的世界，也在理解自己' };
  if (resistance >= 3 && authenticity >= 2)
    return { name: '越界的人', subtitle: '她轻轻地或者用力地走出了那条线' };

  return { name: '行走中的人', subtitle: '人生还没走完，她也还在成为自己' };
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
  return kw.slice(0, 6);
}

// ============================================================
// 核心洞察语
// ============================================================

function generateInsight(scores: PersonalityScores, tags: Set<HiddenTag>): string {
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
  return '你这一生所有的选择，包括那些你最后悔的，都是在你拥有的那些条件下，你能做到的最好。这不是开脱，这是事实。';
}

// ============================================================
// 文化配对
// ============================================================

function generateCulturalMatch(scores: PersonalityScores, tags: Set<HiddenTag>): CulturalMatch {
  const { selfExpression, resistance, structuralAwareness, connection, authenticity, thriving } = scores;

  // 萧红型：贫困/逃脱/韧性
  if (tags.has('poverty_scar') || tags.has('academic_escape') || (resistance >= 3 && thriving >= 1))
    return {
      writer: { name: '萧红', work: '《呼兰河传》《生死场》', reason: '她是用生命写作的人。贫穷、逃离、流浪——她把所有重量变成了语言里的光。' },
      musician: { name: '张惠妹', reason: '她的声音里有在废墟上生长的力量，不脆弱，不假装。' },
      song: { title: '原来你什么都不想要', artist: '张惠妹', reason: '在经历很多之后，终于知道什么是真正想要的。' },
    };

  // 张爱玲型：复杂关系/清醒/美丽的悲观
  if ((tags.has('trauma_bond') || tags.has('beauty_currency')) && structuralAwareness >= 2)
    return {
      writer: { name: '张爱玲', work: '《倾城之恋》《半生缘》', reason: '她用最精准的语言写女性在关系里的处境，不美化，不煽情，只是看见。' },
      musician: { name: '王菲', reason: '冷静、克制、但有无法忽视的情感内核——像张爱玲的文字一样。' },
      song: { title: '容易受伤的女人', artist: '王菲', reason: '清醒地感受着，清醒地受着伤。' },
    };

  // 伍尔夫型：内心世界/创意/自己的房间
  if (tags.has('creative_outlet') || (selfExpression >= 3 && authenticity >= 3))
    return {
      writer: { name: '弗吉尼亚·伍尔夫', work: '《一间自己的房间》《达洛维太太》', reason: '她在说：女性需要空间，需要自己的内心世界，需要被认真对待的思想。' },
      musician: { name: '陈绮贞', reason: '用细腻的声音写内心世界，像在纸上画微小而真实的事物。' },
      song: { title: '旅行的意义', artist: '陈绮贞', reason: '所有的旅行都是向内的，所有的答案都在自己这里。' },
    };

  // 波伏娃型：看见结构/反抗/女性主义清醒
  if (structuralAwareness >= 4 || (resistance >= 4 && connection >= 2))
    return {
      writer: { name: '西蒙·波伏娃', work: '《第二性》', reason: '她第一个系统地说出来：女人不是天生的，是被造就的。你也看见了这件事。' },
      musician: { name: '椎名林檎', reason: '她在日本主流审美里活出了完全的自己，反叛又精准，像在用音乐做女性主义宣言。' },
      song: { title: '我', artist: '王菲', reason: '我就是我，不需要解释，不需要被允许。' },
    };

  // 三毛型：自由/流浪/理想主义
  if (resistance >= 3 && authenticity >= 3 && tags.has('rebel_spirit'))
    return {
      writer: { name: '三毛', work: '《撒哈拉的故事》《雨季不再来》', reason: '她用一生证明，女性可以走很远，可以活出很不一样的故事。' },
      musician: { name: '王菲', reason: '她的人生和音乐都在说：我可以走，我可以选，我可以是我自己。' },
      song: { title: '走吧', artist: '王菲', reason: '有时候，走，就是答案。' },
    };

  // 亦舒型：独立/清醒/都市女性
  if (tags.has('economic_independence_drive') && authenticity >= 2)
    return {
      writer: { name: '亦舒', work: '《我的前半生》《喜宝》', reason: '她写都市女性的清醒与妥协，从不判断，只是照见。' },
      musician: { name: '陈珊妮', reason: '她的音乐有都市女性的冷静和锋利，清楚知道规则，也清楚知道不想遵守。' },
      song: { title: '希望这世界上的每一个人', artist: '陈珊妮', reason: '带着疲惫的温柔，依然对世界抱有某种期待。' },
    };

  // 杨本芬型：普通女性/日常的重量/安静的尊严
  if (thriving >= 1 && connection >= 1 && selfExpression >= -1)
    return {
      writer: { name: '杨本芬', work: '《秋园》《浮木》', reason: '她七十岁开始写作，写普通中国女性的一生。普通不是渺小，是世界上大多数人真实的重量。' },
      musician: { name: '李宇春', reason: '她不符合"女性应该的样子"，但她存在，真实而稳固。' },
      song: { title: '下一站天后', artist: '王菲', reason: '每一个普通女孩，心里都有一个想成为自己的愿望。' },
    };

  // 默认：席慕蓉型
  return {
    writer: { name: '席慕蓉', work: '《一棵开花的树》《无怨的青春》', reason: '她写女性对生命的温柔凝视——爱、时间、成长、消逝，都被她写成了诗。' },
    musician: { name: '陈绮贞', reason: '她的音乐有席慕蓉诗歌的质感——细腻，安静，但有力量。' },
    song: { title: '流年', artist: '陈绮贞', reason: '时光流过，但有些东西留下来了。' },
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
