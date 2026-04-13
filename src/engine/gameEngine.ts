import type {
  GameState,
  Stats,
  BirthProfile,
  EventCard,
  ChoiceOption,
  EventRequirement,
  HiddenTag,
  FamilyWealth,
  PersonalityScores,
} from '../types';
import { ALL_EVENTS } from '../data/events';
import { ENDINGS } from '../data/endings';

// ============================================================
// 时间轴
// ============================================================

export const AGE_TIMELINE: number[] = [
  1, 3, 6,
  7, 8, 9, 10, 11, 12,
  13, 14, 15, 16, 17, 18,
  19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
  33, 36, 39, 42, 45,
  50, 55, 60,
];

export function getNextAge(currentAge: number): number | null {
  const idx = AGE_TIMELINE.indexOf(currentAge);
  if (idx === -1 || idx >= AGE_TIMELINE.length - 1) return null;
  return AGE_TIMELINE[idx + 1];
}

// ============================================================
// 家庭财富等级
// ============================================================

const WEALTH_RANK: Record<FamilyWealth, number> = {
  poor: 0, working: 1, middle: 2, rich: 3, elite: 4,
};

export function wealthAtLeast(actual: FamilyWealth, required: FamilyWealth): boolean {
  return WEALTH_RANK[actual] >= WEALTH_RANK[required];
}

// ============================================================
// 检查需求
// ============================================================

export function checkRequirement(req: EventRequirement, state: GameState): boolean {
  const { stats, birth, hiddenTags, age } = state;

  if (req.ageRange) {
    const [min, max] = req.ageRange;
    if (age < min || age > max) return false;
  }
  if (req.minStats) {
    for (const [key, val] of Object.entries(req.minStats) as [keyof Stats, number][]) {
      if (stats[key] < val) return false;
    }
  }
  if (req.maxStats) {
    for (const [key, val] of Object.entries(req.maxStats) as [keyof Stats, number][]) {
      if (stats[key] > val) return false;
    }
  }
  if (req.hasTags) {
    for (const tag of req.hasTags) {
      if (!hiddenTags.has(tag)) return false;
    }
  }
  if (req.lacksTag) {
    for (const tag of req.lacksTag) {
      if (hiddenTags.has(tag)) return false;
    }
  }
  if (req.minWealth) {
    if (!wealthAtLeast(birth.familyWealth, req.minWealth)) return false;
  }
  if (req.birthCity) {
    if (!req.birthCity.includes(birth.birthCity)) return false;
  }
  return true;
}

// ============================================================
// 选项可用性
// ============================================================

export function isChoiceAvailable(choice: ChoiceOption, state: GameState): boolean {
  if (!choice.requirement) return true;
  return checkRequirement(choice.requirement, state);
}

// ============================================================
// 抽取事件
// ============================================================

export function drawEvent(state: GameState): EventCard | null {
  const { age } = state;
  const eligible = ALL_EVENTS.filter(event => {
    const [min, max] = event.ageRange;
    if (age < min || age > max) return false;
    if (event.requirement && !checkRequirement(event.requirement, state)) return false;
    if (state.lifeHistory.some(h => h.eventId === event.id)) return false;
    return true;
  });

  if (eligible.length === 0) return null;

  const totalWeight = eligible.reduce((sum, e) => sum + (e.weight ?? 1), 0);
  let rand = Math.random() * totalWeight;
  for (const event of eligible) {
    rand -= event.weight ?? 1;
    if (rand <= 0) return event;
  }
  return eligible[eligible.length - 1];
}

// ============================================================
// 应用选择
// ============================================================

export function applyChoice(state: GameState, event: EventCard, choice: ChoiceOption): GameState {
  const newStats = { ...state.stats };
  const newTags = new Set(state.hiddenTags);
  const newPersonality = { ...state.personality };

  if (choice.statChanges) {
    for (const [key, delta] of Object.entries(choice.statChanges) as [keyof Stats, number][]) {
      // 先计算原始值（允许负数，用于触发溢出事件）
      const raw = newStats[key] + delta;
      newStats[key] = Math.max(0, Math.min(100, raw));

      // 溢出惩罚：财富降到 0 → 触发负债
      if (key === 'wealth' && raw < -10 && !newTags.has('in_debt')) {
        newTags.add('in_debt');
      }
      // 溢出惩罚：内心降到 0 → 加重连锁
      if (key === 'inner' && raw < -10) {
        newStats.social = Math.max(0, newStats.social - 5); // 内心崩溃连带社交退缩
      }
    }
  }

  choice.addTags?.forEach(t => newTags.add(t));
  choice.removeTags?.forEach(t => newTags.delete(t));

  if (choice.personalityDelta) {
    for (const [key, delta] of Object.entries(choice.personalityDelta) as [keyof PersonalityScores, number][]) {
      newPersonality[key] = Math.max(-10, Math.min(10, newPersonality[key] + delta));
    }
  }

  const historyEntry = {
    age: state.age,
    eventId: event.id,
    title: event.title,
    choiceText: choice.text,
    followUpText: choice.followUpText ?? '',
    statChanges: choice.statChanges ?? {},
  };

  return {
    ...state,
    stats: newStats,
    hiddenTags: newTags,
    personality: newPersonality,
    lifeHistory: [...state.lifeHistory, historyEntry],
    currentEvent: null,
    phase: choice.triggerEnding ? 'ending' : 'result',
    endingId: choice.triggerEnding ?? state.endingId,
  };
}

// ============================================================
// 初始化
// ============================================================

export function createInitialState(birth: BirthProfile): GameState {
  return {
    phase: 'playing',
    age: AGE_TIMELINE[0],
    birth,
    stats: generateBirthStats(birth),
    hiddenTags: generateBirthTags(birth),
    personality: {
      selfExpression: 0,
      resistance: 0,
      structuralAwareness: 0,
      connection: 0,
      authenticity: 0,
      thriving: 0,
    },
    lifeHistory: [],
    currentEvent: null,
    endingId: null,
  };
}

function rand(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateBirthStats(birth: BirthProfile): Stats {
  const wealthBonus: Record<FamilyWealth, number> = {
    poor: -15, working: -5, middle: 0, rich: 15, elite: 25,
  };
  const wb = wealthBonus[birth.familyWealth];
  // 世俗认可：家庭越好初始越高
  const worldlyBase = Math.max(10, rand(20, 50) + wb + Math.round(birth.familyLove * 0.2));
  // 内心能量：主要看家庭爱
  const innerBase = Math.max(10, Math.round(birth.familyLove * 0.6 + rand(10, 30)));
  return {
    intelligence: rand(30, 80),
    eq: Math.max(10, rand(20, 70) + Math.round(birth.familyLove * 0.2)),
    appearance: rand(30, 80),
    fitness: rand(40, 80),
    luck: rand(20, 80),
    wealth: Math.max(0, Math.min(100, rand(20, 60) + wb)),
    worldly: Math.min(100, worldlyBase),
    inner: innerBase,
    social: rand(30, 60),
  };
}

function generateBirthTags(birth: BirthProfile): Set<HiddenTag> {
  const tags = new Set<HiddenTag>();
  if (birth.familyLove < 35) tags.add('good_girl_conditioning');
  if (birth.familyLove < 20) tags.add('maternal_wound');
  if (birth.familyWealth === 'poor') tags.add('poverty_scar');

  // 家庭结构标签
  if (birth.familyStructure === 'orphan') {
    tags.add('orphan_born');
    tags.add('maternal_wound');
  } else if (birth.familyStructure === 'single_parent') {
    tags.add('has_mother');
    if (birth.familyLove > 60) tags.add('female_solidarity');
  } else {
    // complete, divorced
    tags.add('has_mother');
    tags.add('has_father');
  }

  return tags;
}

// ============================================================
// 调试：快速模拟完整人生
// ============================================================

export function simulateFullGame(): GameState {
  // 随机出生
  const wealths: import('../types').FamilyWealth[] = ['poor', 'working', 'middle', 'rich', 'elite'];
  const structures: import('../types').FamilyStructure[] = ['complete', 'single_parent', 'divorced', 'orphan'];
  const cities: import('../types').BirthCity[] = ['rural', 'small_city', 'mid_city', 'mega_city', 'beijing_shanghai'];
  const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

  const birth: import('../types').BirthProfile = {
    familyWealth: pick(wealths),
    familyStructure: pick(structures),
    birthCity: pick(cities),
    parentEducation: pick(['low', 'mid', 'high'] as const),
    familyLove: Math.floor(Math.random() * 80) + 10,
  };

  let state = createInitialState(birth);

  // 遍历所有年龄，每个年龄抽事件 + 随机选可用选项
  for (const age of AGE_TIMELINE) {
    state = { ...state, age };
    const event = drawEvent(state);
    if (!event) continue;

    // 从可用选项里随机选一个
    const available = event.choices.filter(c => isChoiceAvailable(c, state));
    if (available.length === 0) continue;
    const choice = pick(available);
    state = applyChoice(state, event, choice);

    // 如果选项触发了提前结局
    if (state.phase === 'ending') break;
  }

  // 判定结局
  if (state.phase !== 'ending') {
    const endingId = determineEnding(state);
    state = { ...state, phase: 'ending', endingId };
  }

  return state;
}

// ============================================================
// 结局判定
// ============================================================

export function determineEnding(state: GameState): string {
  for (const ending of ENDINGS) {
    if (!ending.requirement) continue;
    const req = ending.requirement;
    let match = true;

    if (req.minStats) {
      for (const [key, val] of Object.entries(req.minStats) as [keyof Stats, number][]) {
        if (state.stats[key] < val) { match = false; break; }
      }
    }
    if (match && req.maxStats) {
      for (const [key, val] of Object.entries(req.maxStats) as [keyof Stats, number][]) {
        if (state.stats[key] > val) { match = false; break; }
      }
    }
    if (match && req.hasTags) {
      for (const tag of req.hasTags) {
        if (!state.hiddenTags.has(tag)) { match = false; break; }
      }
    }
    if (match && req.personalityMin) {
      for (const [key, val] of Object.entries(req.personalityMin) as [keyof PersonalityScores, number][]) {
        if (state.personality[key] < val) { match = false; break; }
      }
    }

    if (match) return ending.id;
  }
  return 'ordinary_passage';
}
