// ============================================================
// 核心属性
// ============================================================

export interface Stats {
  intelligence: number;  // 智力 0-100
  eq: number;            // 情商 0-100
  appearance: number;    // 颜值 0-100
  fitness: number;       // 体能 0-100
  luck: number;          // 运气 0-100
  wealth: number;        // 财富 0-100 (家庭给的起点)
  mental: number;        // 心理健康 0-100
  social: number;        // 社会关系 0-100
}

// ============================================================
// 出生背景
// ============================================================

export type FamilyWealth = 'poor' | 'working' | 'middle' | 'rich' | 'elite';
export type FamilyStructure = 'complete' | 'single_parent' | 'orphan' | 'divorced';
export type BirthCity = 'rural' | 'small_city' | 'mid_city' | 'mega_city' | 'beijing_shanghai';

export interface BirthProfile {
  familyWealth: FamilyWealth;
  familyStructure: FamilyStructure;
  birthCity: BirthCity;
  parentEducation: 'low' | 'mid' | 'high';
  familyLove: number;    // 家庭温暖度 0-100，影响心理健康基线
}

// ============================================================
// 隐性标记（Vulnerability / Trait tags）
// ============================================================

export type HiddenTag =
  | 'childhood_trauma'      // 童年创伤
  | 'lack_of_love'          // 缺乏关爱
  | 'witnessed_violence'    // 目睹暴力
  | 'poverty_scar'          // 贫困烙印
  | 'overprotected'         // 过度保护
  | 'prodigy'               // 天才迹象
  | 'resilient'             // 天生韧性
  | 'rebel_spirit'          // 叛逆基因
  | 'people_pleaser'        // 讨好型人格萌芽
  | 'ambitious'             // 强烈野心
  | 'toxic_relationship'    // 深陷有毒关系
  | 'addiction_risk'        // 成瘾风险
  | 'creative_soul'         // 创造力觉醒
  | 'street_smart';         // 江湖智慧

// ============================================================
// 性格维度（用于最终分析）
// ============================================================

export interface PersonalityScores {
  adventure: number;     // 冒险 vs 稳健        (-10 ~ +10)
  rational: number;      // 理性 vs 感性         (-10 ~ +10)
  extrovert: number;     // 外向 vs 内省         (-10 ~ +10)
  resilience: number;    // 坚韧 vs 顺从         (-10 ~ +10)
  materialistic: number; // 物质 vs 理想         (-10 ~ +10)
  empathy: number;       // 利他 vs 自我         (-10 ~ +10)
}

// ============================================================
// 游戏状态
// ============================================================

export type GamePhase =
  | 'birth'        // 出生设置
  | 'playing'      // 游戏进行中
  | 'event'        // 显示事件/选择
  | 'result'       // 年度结果
  | 'ending'       // 结局
  | 'analysis';    // 性格分析

export interface GameState {
  phase: GamePhase;
  age: number;
  birth: BirthProfile;
  stats: Stats;
  hiddenTags: Set<HiddenTag>;
  personality: PersonalityScores;
  lifeHistory: LifeEvent[];       // 已发生的事件记录
  currentEvent: EventCard | null;
  endingId: string | null;
}

// ============================================================
// 事件系统
// ============================================================

export interface EventRequirement {
  minStats?: Partial<Stats>;
  maxStats?: Partial<Stats>;
  hasTags?: HiddenTag[];
  lacksTag?: HiddenTag[];
  minWealth?: FamilyWealth;       // 至少这个家庭条件
  ageRange?: [number, number];
  birthCity?: BirthCity[];
}

export interface ChoiceOption {
  id: string;
  text: string;
  // 此选项是否可见/可选
  requirement?: EventRequirement;
  lockedHint?: string;            // 锁定时显示的提示文字
  // 选择后的效果
  statChanges?: Partial<Stats>;
  addTags?: HiddenTag[];
  removeTags?: HiddenTag[];
  personalityDelta?: Partial<PersonalityScores>;
  followUpText?: string;          // 选择后的结果描述
  // 特殊触发
  triggerEnding?: string;
}

export interface EventCard {
  id: string;
  ageRange: [number, number];
  title: string;
  description: string;
  requirement?: EventRequirement;  // 触发此事件的条件
  choices: ChoiceOption[];
  weight?: number;                 // 抽取权重，默认1
}

// ============================================================
// 生命记录（历史日志）
// ============================================================

export interface LifeEvent {
  age: number;
  eventId: string;
  title: string;
  choiceText: string;
  followUpText: string;
  statChanges: Partial<Stats>;
}

// ============================================================
// 结局
// ============================================================

export interface Ending {
  id: string;
  title: string;
  description: string;
  requirement: EventRequirement & {
    personalityMin?: Partial<PersonalityScores>;
    hasTags?: HiddenTag[];
    minStats?: Partial<Stats>;
  };
  rarity: 'common' | 'uncommon' | 'rare' | 'hidden';
  flavor: string;  // 一句话感悟
}
