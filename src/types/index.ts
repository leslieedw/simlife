// ============================================================
// 核心属性
// ============================================================

export interface Stats {
  intelligence: number;  // 智识 0-100
  appearance: number;    // 外貌 0-100
  fitness: number;       // 体能 0-100
  luck: number;          // 运气 0-100
  wealth: number;        // 财富 0-100
  worldly: number;       // 世俗认可 0-100（低不代表差）
  inner: number;         // 内心能量 0-100（真实心理状态）
  social: number;        // 社交情商 0-100（人际 + 情感智力）
}

// ============================================================
// 出生背景
// ============================================================

export type FamilyWealth = 'poor' | 'working' | 'middle' | 'rich' | 'elite';
export type FamilyStructure = 'complete' | 'single_parent' | 'orphan' | 'divorced';

export interface BirthProfile {
  familyWealth: FamilyWealth;
  familyStructure: FamilyStructure;
  parentEducation: 'low' | 'mid' | 'high';
  familyLove: number;
}

// ============================================================
// 隐性标记——女性成长的结构性印记
// ============================================================

export type HiddenTag =
  | 'good_girl_conditioning'    // 好女孩驯化：从小被要求听话、不哭、不生气
  | 'beauty_currency'           // 容貌货币化：意识到外貌可以换取好处或保护
  | 'internalized_misogyny'     // 内化厌女：不信任其他女性，视女性为竞争者
  | 'maternal_wound'            // 母性创伤：与母亲关系复杂，爱恨交织
  | 'male_gaze_trauma'          // 凝视创伤：过早被男性注视/骚扰，身体不再属于自己
  | 'protective_relationship'   // 保护性依赖：依靠某个男性获得安全感，代价未知
  | 'academic_escape'           // 学业逃脱：用成绩/学历作为逃离原生家庭的工具
  | 'early_sexualization'       // 早期性化：在准备好之前被推入成人世界
  | 'female_solidarity'         // 女性联结：有真实的、能托底的女性友谊
  | 'creative_outlet'           // 创意出口：通过创作、写作、音乐处理无法言说的感受
  | 'economic_independence_drive' // 经济自主意识：把财务独立视为最重要的自由
  | 'body_shame'                // 身体羞耻：对自己的身体感到陌生或厌恶
  | 'high_sensitivity'          // 高敏感体质：对情感和环境高度敏感（创造力与痛苦并存）
  | 'trauma_bond'               // 创伤联结：与施害者产生情感依赖
  | 'glass_ceiling_seen'        // 看见了天花板：清晰感受到职场/社会的性别壁垒
  | 'second_shift_burden'       // 第二班次：同时承担职业与全部家务的重量
  | 'survived_violence'         // 幸存者：经历过身体或性暴力并活了下来
  | 'childless_by_choice'       // 主动不婚不育
  | 'late_bloomer'              // 晚开的花：在沉默很久之后，终于开始活出自己
  | 'poverty_scar'              // 贫困烙印
  | 'rebel_spirit'              // 反骨：不愿被定义，一直在越界
  // ── 生命路径状态标签 ──
  | 'dropped_out'               // 辍学：未完成高中或大学
  | 'higher_education'          // 大学路径：考入并就读大学
  | 'married'                   // 已婚状态
  | 'has_children'              // 已育
  | 'never_married'             // 主动选择不进入婚姻
  | 'abroad_experience'         // 有出国经历
  | 'entrepreneur'              // 有创业经历
  // ── 状态类标签（会在游戏中显示）──
  | 'addiction'                 // 上瘾：酒精/药物/赌博依赖
  | 'divorced'                  // 离异
  | 'in_debt'                   // 负债
  // ── 出生家庭结构标签（由出生背景自动生成）──
  | 'has_mother'                // 有/曾有母亲
  | 'has_father'                // 有/曾有父亲
  | 'orphan_born';              // 孤儿，无父母

// ============================================================
// 人格维度——女性成长六维
// ============================================================

export interface PersonalityScores {
  selfExpression: number;       // 自我压抑 ↔ 自我表达       (-10 ~ +10)
  resistance: number;           // 顺应驯化 ↔ 反抗越界       (-10 ~ +10)
  structuralAwareness: number;  // 自我归因 ↔ 看见结构       (-10 ~ +10)
  connection: number;           // 孤立竞争 ↔ 女性联结       (-10 ~ +10)
  authenticity: number;         // 表演取悦 ↔ 活出真实       (-10 ~ +10)
  thriving: number;             // 生存挣扎 ↔ 生命绽放       (-10 ~ +10)
}

// ============================================================
// 游戏状态
// ============================================================

export type GamePhase =
  | 'birth'
  | 'playing'
  | 'event'
  | 'result'
  | 'ending'
  | 'analysis';

export interface GameState {
  phase: GamePhase;
  age: number;
  birth: BirthProfile;
  stats: Stats;
  hiddenTags: Set<HiddenTag>;
  personality: PersonalityScores;
  lifeHistory: LifeEvent[];
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
  minWealth?: FamilyWealth;
  ageRange?: [number, number];
}

export interface ChoiceOption {
  id: string;
  text: string;
  requirement?: EventRequirement;
  lockedHint?: string;
  statChanges?: Partial<Stats>;
  addTags?: HiddenTag[];
  removeTags?: HiddenTag[];
  personalityDelta?: Partial<PersonalityScores>;
  followUpText?: string;
  triggerEnding?: string;
}

export interface EventCard {
  id: string;
  ageRange: [number, number];
  title: string;
  description: string;
  requirement?: EventRequirement;
  choices: ChoiceOption[];
  weight?: number;
}

// ============================================================
// 生命记录
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
// 结局 + 文化配对语录
// ============================================================

export interface CulturalQuote {
  text: string;
  attribution: string;
  type: 'lyric' | 'poem' | 'prose';
}

export interface Ending {
  id: string;
  title: string;
  description: string;
  requirement: EventRequirement & {
    personalityMin?: Partial<PersonalityScores>;
    hasTags?: HiddenTag[];
    minStats?: Partial<Stats>;
    maxStats?: Partial<Stats>;
  };
  rarity: 'common' | 'uncommon' | 'rare' | 'hidden';
  flavor: string;
  culturalQuotes: CulturalQuote[];
}
