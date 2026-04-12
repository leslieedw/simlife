import type { EventCard } from '../types';

export const ALL_EVENTS: EventCard[] = [

  // ============================================================
  // 0-6岁：幼年
  // ============================================================

  {
    id: 'baby_first_memory',
    ageRange: [1, 1],
    title: '最初的记忆',
    description: '你开始有了模糊的记忆。家里的气氛……',
    choices: [
      {
        id: 'warm_home',
        text: '温暖而吵闹，爸妈总是笑着',
        requirement: { minStats: { mental: 50 } },
        statChanges: { mental: 5, eq: 3 },
        personalityDelta: { empathy: 1, extrovert: 1 },
        followUpText: '那些笑声成为你心底最柔软的底色。',
      },
      {
        id: 'quiet_home',
        text: '安静，爸妈各自忙碌，很少说话',
        statChanges: { mental: -3 },
        personalityDelta: { extrovert: -1, rational: 1 },
        followUpText: '你很早就学会了一个人待着。',
      },
      {
        id: 'tense_home',
        text: '充满争吵，你躲在角落假装睡着',
        requirement: { maxStats: { mental: 60 } },
        statChanges: { mental: -8, eq: -5 },
        addTags: ['childhood_trauma'],
        personalityDelta: { resilience: 1, empathy: -1 },
        followUpText: '你学会了察言观色，也学会了沉默。',
      },
    ],
  },

  {
    id: 'kindergarten_first_day',
    ageRange: [3, 3],
    title: '第一天上幼儿园',
    description: '妈妈把你送到幼儿园门口就要离开。你……',
    choices: [
      {
        id: 'cry_loudly',
        text: '大哭，拉住妈妈的手不肯放',
        statChanges: { eq: -2 },
        personalityDelta: { extrovert: -1 },
        followUpText: '老师把你抱进去，你哭了整整一上午。',
      },
      {
        id: 'brave_wave',
        text: '努力憋住眼泪，挥手说再见',
        statChanges: { mental: 3, eq: 2 },
        personalityDelta: { resilience: 1 },
        followUpText: '那一刻你不知道，这是你人生里第一次独自面对世界。',
      },
      {
        id: 'immediately_play',
        text: '看到玩具就跑过去，把妈妈忘了',
        statChanges: { social: 4, eq: 1 },
        personalityDelta: { extrovert: 2, adventure: 1 },
        followUpText: '老师说你是她见过的适应最快的孩子。',
      },
    ],
  },

  {
    id: 'early_talent',
    ageRange: [3, 6],
    title: '你有天赋',
    description: '邻居阿姨说你画的画很像，问你要不要学画画。爸妈……',
    choices: [
      {
        id: 'rich_parents_support',
        text: '立刻给你报了最好的兴趣班',
        requirement: { minWealth: 'middle' },
        statChanges: { intelligence: 5, social: 3 },
        addTags: ['creative_soul'],
        personalityDelta: { adventure: 1 },
        followUpText: '你开始了漫长的"被培养"之路。',
      },
      {
        id: 'poor_parents_cant',
        text: '说"哪有钱学这个"，叹了口气走开了',
        requirement: { maxStats: { wealth: 30 } },
        statChanges: { mental: -3 },
        personalityDelta: { materialistic: 1 },
        followUpText: '你第一次模糊地感受到，有些事情不是努力就能有的。',
        addTags: ['poverty_scar'],
      },
      {
        id: 'self_learn',
        text: '买不起课，但你偷偷在废纸上一直画',
        statChanges: { intelligence: 3, mental: 2 },
        addTags: ['creative_soul', 'resilient'],
        personalityDelta: { adventure: 1, resilience: 2 },
        followUpText: '没有人教你，但你画的越来越好。',
      },
    ],
  },

  // ============================================================
  // 6-12岁：小学
  // ============================================================

  {
    id: 'primary_study_pressure',
    ageRange: [7, 10],
    title: '第一次考试',
    description: '期末考试成绩出来了。你考了班里第几名？',
    choices: [
      {
        id: 'top_student',
        text: '前三名，妈妈把成绩单贴在墙上',
        requirement: { minStats: { intelligence: 60 } },
        statChanges: { intelligence: 5, social: -2 },
        personalityDelta: { rational: 1, resilience: 1 },
        followUpText: '你感受到了成绩带来的认可，也感受到了它带来的压力。',
      },
      {
        id: 'middle_student',
        text: '中游，没人表扬也没人批评',
        statChanges: { mental: 1 },
        personalityDelta: {},
        followUpText: '普通，是一种奇妙的隐形。',
      },
      {
        id: 'bottom_student',
        text: '倒数，爸妈叹气，老师约谈',
        requirement: { maxStats: { intelligence: 50 } },
        statChanges: { mental: -5, intelligence: -2 },
        personalityDelta: { resilience: 1, extrovert: -1 },
        followUpText: '你开始觉得自己可能真的不是读书的料。',
      },
    ],
  },

  {
    id: 'bullied_at_school',
    ageRange: [8, 12],
    title: '校园欺凌',
    description: '班里几个男生总是针对你，抢你的东西，叫你外号。你……',
    weight: 0.6,
    requirement: { maxStats: { social: 50 } },
    choices: [
      {
        id: 'fight_back',
        text: '某天忍不住了，直接打回去',
        statChanges: { mental: 3, fitness: 2, social: -3 },
        addTags: ['rebel_spirit'],
        personalityDelta: { resilience: 2, adventure: 1 },
        followUpText: '你被叫了家长，但那几个人再也没欺负过你。',
      },
      {
        id: 'tell_teacher',
        text: '去找老师告状',
        statChanges: { mental: -2, social: 2 },
        personalityDelta: { empathy: 1, adventure: -1 },
        followUpText: '老师批评了他们，但私下里他们欺负你更狠了。',
      },
      {
        id: 'endure_silently',
        text: '忍着，不说，装作没事',
        statChanges: { mental: -8, eq: -3 },
        addTags: ['childhood_trauma', 'people_pleaser'],
        personalityDelta: { resilience: -1, extrovert: -2 },
        followUpText: '那段时间你每天假装生病，不想上学。',
      },
    ],
  },

  {
    id: 'parents_divorce',
    ageRange: [6, 15],
    title: '爸妈要离婚了',
    description: '某天深夜，你听到爸妈激烈争吵。第二天早上，爸爸的东西少了很多。',
    weight: 0.4,
    requirement: { hasTags: ['childhood_trauma'] },
    choices: [
      {
        id: 'blame_myself',
        text: '你以为是自己的错，偷偷哭了很久',
        statChanges: { mental: -10, eq: -5 },
        addTags: ['people_pleaser'],
        personalityDelta: { empathy: 2, resilience: -2, extrovert: -1 },
        followUpText: '这个错误的自我认知，很多年后才被慢慢解开。',
      },
      {
        id: 'cold_acceptance',
        text: '你其实早就预料到了，默默收拾了一下自己的房间',
        statChanges: { mental: -4 },
        personalityDelta: { rational: 2, extrovert: -1 },
        followUpText: '你比同龄人更早学会了一件事：有些事是无法控制的。',
      },
      {
        id: 'seek_comfort',
        text: '打电话给最好的朋友，哭着说了一晚上',
        requirement: { minStats: { social: 40 } },
        statChanges: { mental: -3, social: 3, eq: 2 },
        personalityDelta: { extrovert: 1, empathy: 1 },
        followUpText: '那个朋友后来成了你一生最重要的人之一。',
      },
    ],
  },

  {
    id: 'primary_friend',
    ageRange: [7, 12],
    title: '最好的朋友',
    description: '你在学校有了一个关系最好的同学。你们……',
    choices: [
      {
        id: 'same_interest',
        text: '因为同样喜欢漫画/游戏/运动而成为朋友',
        statChanges: { social: 5, mental: 3 },
        personalityDelta: { extrovert: 1, empathy: 1 },
        followUpText: '那段时光单纯得像白纸，你们聊什么都觉得有意思。',
      },
      {
        id: 'competitive_friend',
        text: '是个比你厉害很多的人，你一直想追上他/她',
        statChanges: { intelligence: 4, social: 2 },
        personalityDelta: { resilience: 1, rational: 1 },
        followUpText: '有人比你强，其实是一件幸运的事。',
      },
      {
        id: 'no_close_friend',
        text: '其实没有，你一直是一个人玩',
        statChanges: { social: -3, intelligence: 3 },
        personalityDelta: { extrovert: -1, rational: 1 },
        followUpText: '你花了很多时间和自己待着，读书或者发呆。',
      },
    ],
  },

  {
    id: 'primary_hobby',
    ageRange: [8, 12],
    title: '课余时间',
    description: '放学之后，你最喜欢做什么？',
    choices: [
      {
        id: 'play_outside',
        text: '和一群孩子在外面疯玩到天黑',
        statChanges: { fitness: 5, social: 4, intelligence: -1 },
        personalityDelta: { extrovert: 2, adventure: 1 },
        followUpText: '那些泥巴和汗水，是你最真实的童年。',
      },
      {
        id: 'read_books',
        text: '窝在家里看书或者玩游戏',
        statChanges: { intelligence: 5, fitness: -2 },
        personalityDelta: { extrovert: -1, rational: 1 },
        followUpText: '你比同龄人早很多年接触了另一个世界。',
      },
      {
        id: 'extra_class',
        text: '被塞满了各种补习班和兴趣班',
        requirement: { minWealth: 'middle' },
        statChanges: { intelligence: 4, mental: -3 },
        personalityDelta: { resilience: 1, rational: 1 },
        followUpText: '你有时候不知道，这些到底是为了谁。',
      },
      {
        id: 'help_family',
        text: '帮家里干活，没什么课余时间',
        requirement: { maxStats: { wealth: 35 } },
        statChanges: { fitness: 3, mental: -2, social: -2 },
        personalityDelta: { resilience: 2, materialistic: 1 },
        followUpText: '你很小就知道，有些事情是没办法的。',
      },
    ],
  },

  {
    id: 'primary_teacher',
    ageRange: [9, 12],
    title: '一个老师',
    description: '小学里有个老师让你印象深刻。',
    choices: [
      {
        id: 'inspiring_teacher',
        text: '他/她发现了你的某个天赋，一直鼓励你',
        statChanges: { intelligence: 4, mental: 5 },
        addTags: ['ambitious'],
        personalityDelta: { resilience: 1, adventure: 1 },
        followUpText: '被一个大人认真对待，是一件很有力量的事。',
      },
      {
        id: 'harsh_teacher',
        text: '他/她经常当众批评你，你很怕他/她',
        statChanges: { mental: -5, social: -2 },
        personalityDelta: { extrovert: -1, resilience: 1 },
        followUpText: '你学会了如何在压力下继续走路。',
      },
      {
        id: 'indifferent_teacher',
        text: '其实没有，老师们都不太注意你',
        statChanges: { mental: -2 },
        personalityDelta: { extrovert: -1 },
        followUpText: '你习惯了不被看见。有时候这也是一种自由。',
      },
    ],
  },

  {
    id: 'family_change',
    ageRange: [9, 14],
    title: '家里的变化',
    description: '你家里发生了一件事……',
    weight: 0.7,
    choices: [
      {
        id: 'sibling_born',
        text: '妈妈生了弟弟或妹妹，你不再是唯一的孩子',
        statChanges: { eq: 3, social: 2, mental: -2 },
        personalityDelta: { empathy: 1, resilience: 1 },
        followUpText: '你第一次需要学着分享。',
      },
      {
        id: 'parent_lost_job',
        text: '爸爸/妈妈失业了，家里变得很紧张',
        statChanges: { mental: -5, wealth: -8 },
        addTags: ['poverty_scar'],
        personalityDelta: { resilience: 1, materialistic: 1 },
        followUpText: '你开始懂事，不再开口要东西。',
      },
      {
        id: 'moved_city',
        text: '家里搬到了新城市，你要重新交朋友',
        statChanges: { social: -4, eq: 3, adventure: 0 },
        personalityDelta: { resilience: 1, extrovert: -1 },
        followUpText: '第一天在新学校，你一个人坐在角落吃饭。',
      },
      {
        id: 'grandparent_died',
        text: '最疼你的爷爷/奶奶/外公/外婆走了',
        statChanges: { mental: -6, eq: 3 },
        personalityDelta: { empathy: 2, resilience: 1 },
        followUpText: '那是你第一次真正理解"失去"这个词。',
      },
    ],
  },

  // ============================================================
  // 12-18岁：青春期
  // ============================================================

  {
    id: 'high_school_choice',
    ageRange: [12, 12],
    title: '中学分流',
    description: '中考成绩出来了。你的分数能上什么学校？',
    choices: [
      {
        id: 'elite_high_school',
        text: '进了市重点，周围全是学霸',
        requirement: { minStats: { intelligence: 70 } },
        statChanges: { intelligence: 8, social: -3, mental: -3 },
        personalityDelta: { rational: 1, resilience: 1 },
        followUpText: '你第一次感到压力——原来"聪明"是相对的。',
      },
      {
        id: 'normal_high_school',
        text: '上了普通高中，轻松但没什么前途感',
        statChanges: { mental: 2, social: 3 },
        personalityDelta: { extrovert: 1 },
        followUpText: '老师说你是班里最有潜力的，你不确定这是鼓励还是安慰。',
      },
      {
        id: 'vocational_school',
        text: '考不上高中，去读职业技术学校',
        requirement: { maxStats: { intelligence: 45 } },
        statChanges: { wealth: 5, intelligence: -3, social: 4 },
        addTags: ['street_smart'],
        personalityDelta: { materialistic: 1, adventure: 1 },
        followUpText: '你开始学一门技术，也开始接触社会上各种各样的人。',
      },
    ],
  },

  {
    id: 'first_love',
    ageRange: [14, 17],
    title: '初恋',
    description: '你喜欢上了班里的一个同学。那种心跳……',
    choices: [
      {
        id: 'confess_brave',
        text: '鼓起勇气去表白',
        statChanges: { eq: 3, social: 2 },
        personalityDelta: { adventure: 2, extrovert: 1 },
        followUpText: '无论结果如何，那一天的你是最勇敢的。',
      },
      {
        id: 'confess_rejected',
        text: '表白被拒绝，很久没缓过来',
        statChanges: { mental: -5, eq: 2 },
        personalityDelta: { resilience: 1, rational: 1 },
        followUpText: '失恋是一种奇怪的成长，让你更清楚地看见自己。',
      },
      {
        id: 'secret_crush',
        text: '把喜欢藏在心里，一个字也没说',
        statChanges: { mental: -2 },
        personalityDelta: { extrovert: -1, rational: 1 },
        followUpText: '他/她后来转学了。你从来不知道他/她是否也喜欢过你。',
      },
      {
        id: 'toxic_first_love',
        text: '谈了，但对方控制欲很强',
        requirement: { hasTags: ['lack_of_love'] },
        statChanges: { mental: -8, eq: -4, social: -3 },
        addTags: ['toxic_relationship'],
        personalityDelta: { extrovert: -1, resilience: -2, empathy: -1 },
        followUpText: '你以为这就是被人需要的感觉。那是你很多年后才能理解的伤。',
        lockedHint: '（需要：内心有某种渴望被填补的空缺）',
      },
    ],
  },

  {
    id: 'gaokao',
    ageRange: [18, 18],
    title: '高考',
    description: '人生第一道真正的分叉口到了。',
    choices: [
      {
        id: 'elite_university',
        text: '考上了985/211，去了大城市',
        requirement: { minStats: { intelligence: 72 } },
        statChanges: { intelligence: 10, wealth: 5, social: 5 },
        personalityDelta: { adventure: 1, rational: 1 },
        followUpText: '新的城市，新的人，你开始了另一种人生的可能。',
      },
      {
        id: 'normal_university',
        text: '上了普通本科，在省内读书',
        statChanges: { intelligence: 4, social: 4 },
        personalityDelta: {},
        followUpText: '没什么好遗憾的，好好过就行。',
      },
      {
        id: 'work_directly',
        text: '放弃高考，直接去大城市打工',
        requirement: { maxStats: { intelligence: 55 } },
        statChanges: { wealth: 8, social: 3, intelligence: -5 },
        addTags: ['street_smart'],
        personalityDelta: { adventure: 2, materialistic: 1, resilience: 1 },
        followUpText: '你比同龄人早几年进入社会。这是一种代价，也是一种优势。',
      },
      {
        id: 'study_abroad',
        text: '家里砸锅卖铁，送你出国',
        requirement: { minWealth: 'rich' },
        statChanges: { intelligence: 8, social: 6, wealth: -20 },
        personalityDelta: { adventure: 2, extrovert: 1 },
        followUpText: '你坐上飞机的那一刻，回头看了一眼送机的父母。',
        lockedHint: '（需要：家庭条件优越）',
      },
      {
        id: 'gap_year_dropout',
        text: '考砸了，崩溃了，说什么都不想上了',
        statChanges: { mental: -8, social: -3 },
        personalityDelta: { resilience: -2, adventure: -1 },
        followUpText: '那一年你浑浑噩噩，但这不是终点。',
      },
    ],
  },

  // ============================================================
  // 18-30岁：青年
  // ============================================================

  {
    id: 'university_friendship',
    ageRange: [19, 22],
    title: '大学室友',
    description: '大学宿舍四个人，性格各异。你和谁最好？',
    choices: [
      {
        id: 'ambitious_friend',
        text: '那个每天6点起床背单词的人',
        statChanges: { intelligence: 5, social: 2 },
        personalityDelta: { rational: 1, resilience: 1 },
        followUpText: '你被他/她带着，养成了一些你以前不可能有的习惯。',
      },
      {
        id: 'creative_friend',
        text: '那个整天做音乐、拍视频的人',
        statChanges: { eq: 4, social: 3 },
        addTags: ['creative_soul'],
        personalityDelta: { adventure: 1, extrovert: 1 },
        followUpText: '你们一起熬夜，聊艺术、聊理想、聊不想毕业。',
      },
      {
        id: 'lonely_in_crowd',
        text: '其实和谁都谈不来，一个人在图书馆待着',
        statChanges: { intelligence: 6, social: -3 },
        personalityDelta: { extrovert: -2, rational: 2 },
        followUpText: '孤独有时候是最好的老师。',
      },
    ],
  },

  {
    id: 'first_job',
    ageRange: [22, 24],
    title: '第一份工作',
    description: '毕业了。你选择了什么路？',
    choices: [
      {
        id: 'big_company',
        text: '进了大公司，稳定但拧螺丝',
        statChanges: { wealth: 10, social: 3, mental: -3 },
        personalityDelta: { materialistic: 1, resilience: 1 },
        followUpText: '格子间的日子，不坏，只是……你有时候会忘了自己是谁。',
      },
      {
        id: 'startup',
        text: '加入了一个创业公司，钱少但刺激',
        requirement: { minStats: { intelligence: 55 } },
        statChanges: { intelligence: 6, wealth: -5, social: 6, mental: -3 },
        personalityDelta: { adventure: 2, resilience: 1 },
        followUpText: '加班到凌晨，第二天依然来了。你不知道这是热情还是上瘾。',
      },
      {
        id: 'self_employed',
        text: '开了个小店，或者做自由职业',
        statChanges: { wealth: -5, social: 3, mental: 3 },
        addTags: ['ambitious'],
        personalityDelta: { adventure: 2, materialistic: 1, rational: 1 },
        followUpText: '第一个月几乎没有收入，但你每天醒来感觉是自己的。',
      },
      {
        id: 'idol_path',
        text: '去参加选秀节目，想成为明星',
        requirement: { minStats: { appearance: 65, eq: 55 } },
        statChanges: { social: 8, mental: -5, wealth: -5 },
        addTags: ['ambitious'],
        personalityDelta: { adventure: 3, extrovert: 2, resilience: 1 },
        followUpText: '台上三分钟，台下很多年。你不知道这条路有多远。',
        lockedHint: '（需要：颜值与情商达标）',
      },
      {
        id: 'migrate_labor',
        text: '去工厂或工地，挣实在钱',
        statChanges: { wealth: 8, fitness: 5, mental: -4 },
        personalityDelta: { resilience: 2, materialistic: 2 },
        followUpText: '钱是真实的，辛苦也是真实的。',
      },
    ],
  },

  {
    id: 'stress_coping',
    ageRange: [20, 30],
    title: '压力太大了',
    description: '那段时间压力大到喘不过气。你开始……',
    weight: 0.6,
    requirement: { maxStats: { mental: 50 } },
    choices: [
      {
        id: 'exercise_release',
        text: '靠运动和睡觉扛过去',
        statChanges: { mental: 4, fitness: 4 },
        personalityDelta: { resilience: 2 },
        followUpText: '你发现身体是最可靠的情绪出口。',
      },
      {
        id: 'alcohol_habit',
        text: '开始喝酒，每晚一杯变成每晚一瓶',
        statChanges: { mental: -5, fitness: -4, social: 2 },
        addTags: ['addiction_risk'],
        personalityDelta: { resilience: -1, adventure: 1 },
        followUpText: '酒精让夜晚好过一点，但早上更难受了。',
      },
      {
        id: 'therapy',
        text: '去咨询了心理咨询师',
        requirement: { minWealth: 'middle' },
        statChanges: { mental: 8, eq: 3 },
        personalityDelta: { rational: 1, empathy: 1 },
        followUpText: '第一次有人真正听你说话，不评判，只是听。',
        lockedHint: '（需要：有能力负担咨询费用）',
      },
      {
        id: 'numb_through',
        text: '麻木地撑着，什么都感觉不到了',
        statChanges: { mental: -8, eq: -3 },
        personalityDelta: { resilience: 1, empathy: -2, extrovert: -1 },
        followUpText: '感觉不到痛，也感觉不到别的了。',
      },
    ],
  },

  {
    id: 'quarter_life_crisis',
    ageRange: [25, 28],
    title: '四分之一人生危机',
    description: '某个深夜你睡不着，刷着朋友圈，同学有的结婚了，有的升职了，有的月薪三万了。你……',
    choices: [
      {
        id: 'comparison_despair',
        text: '感到焦虑和失落，开始怀疑自己',
        statChanges: { mental: -6, eq: -2 },
        personalityDelta: { resilience: -1, extrovert: -1 },
        followUpText: '那种感觉就像被什么东西追赶，但你不知道要跑向哪里。',
      },
      {
        id: 'self_reflection',
        text: '关掉手机，开始认真想自己想要什么',
        statChanges: { mental: 3, intelligence: 3 },
        personalityDelta: { rational: 2, resilience: 1 },
        followUpText: '你第一次真正开始思考，而不是跟着走。',
      },
      {
        id: 'seek_change',
        text: '辞职，换城市，换行业，重新来过',
        statChanges: { mental: 2, wealth: -8, social: -3 },
        personalityDelta: { adventure: 3, resilience: 1 },
        addTags: ['rebel_spirit'],
        followUpText: '所有人都说你冲动。你说：我只是不想凑合了。',
      },
    ],
  },

  {
    id: 'marriage_pressure',
    ageRange: [26, 30],
    title: '催婚',
    description: '父母、亲戚开始轮番催婚。过年饭桌上的气氛变了。',
    choices: [
      {
        id: 'agree_blind_date',
        text: '随便去了几次相亲，感觉凑合就行了',
        statChanges: { mental: -5, social: 2 },
        personalityDelta: { resilience: -1, materialistic: 1 },
        followUpText: '结了婚，然后发现凑合是一件很累的事。',
      },
      {
        id: 'refuse_firmly',
        text: '明确拒绝催婚，坚持找真正喜欢的人',
        statChanges: { mental: 3, social: -3 },
        personalityDelta: { resilience: 2, adventure: 1 },
        followUpText: '家里为此冷战了半年。你习惯了一个人过节。',
      },
      {
        id: 'toxic_marriage',
        text: '在压力下嫁给了一个控制欲很强的人',
        requirement: { hasTags: ['lack_of_love'] },
        statChanges: { mental: -10, eq: -5 },
        addTags: ['toxic_relationship'],
        personalityDelta: { resilience: -2, empathy: -1, extrovert: -2 },
        followUpText: '你以为嫁了就安全了。你错了。',
        lockedHint: '（需要：内心有某种渴望被依赖的需求）',
      },
    ],
  },

  // ============================================================
  // 30-45岁：中年
  // ============================================================

  {
    id: 'startup_at_thirty',
    ageRange: [30, 36],
    title: '创业的念头',
    description: '你攒了一些钱，也有了一些人脉。有人邀你一起创业，或者你自己想干了。',
    weight: 0.7,
    choices: [
      {
        id: 'go_all_in',
        text: '梭哈，把积蓄全投进去',
        requirement: { minStats: { wealth: 40 } },
        statChanges: { wealth: -20, intelligence: 5, social: 5, mental: -5 },
        addTags: ['ambitious'],
        personalityDelta: { adventure: 3, materialistic: 1, resilience: 1 },
        followUpText: '你签下了第一份合同，手在抖。',
      },
      {
        id: 'side_project',
        text: '先副业，白天上班晚上做，两条腿走',
        statChanges: { intelligence: 3, wealth: 3, mental: -4 },
        personalityDelta: { rational: 2, resilience: 1 },
        followUpText: '累，但稳。你一边上班一边观察市场。',
      },
      {
        id: 'refuse_risk',
        text: '太冒险了，放弃，继续打工',
        statChanges: { mental: -2 },
        personalityDelta: { adventure: -1, materialistic: 1 },
        followUpText: '安全感是真实的。有时候你会想起那个机会。',
      },
    ],
  },

  {
    id: 'addiction',
    ageRange: [22, 40],
    title: '你染上了一个习惯',
    description: '一开始是因为压力，或者朋友带的，或者只是想试试……',
    weight: 0.3,
    requirement: { hasTags: ['addiction_risk'] },
    choices: [
      {
        id: 'drug_path',
        text: '开始尝试毒品，停不下来了',
        statChanges: { mental: -20, wealth: -15, fitness: -10, social: -10 },
        addTags: ['addiction_risk'],
        personalityDelta: { resilience: -3, rational: -2, empathy: -2 },
        triggerEnding: 'addiction_ruin',
        followUpText: '你知道这是错的。但那种感觉……你还是选择了它。',
      },
      {
        id: 'gambling_path',
        text: '赌博，越输越赌',
        statChanges: { wealth: -25, social: -8, mental: -10 },
        personalityDelta: { adventure: 2, rational: -3, resilience: -1 },
        followUpText: '你告诉自己下次一定能赢回来。',
      },
      {
        id: 'seek_help',
        text: '意识到苗头不对，主动戒掉',
        statChanges: { mental: 5, social: 2 },
        removeTags: ['addiction_risk'],
        personalityDelta: { resilience: 3, rational: 2 },
        followUpText: '那段时间你靠意志撑过来了。你知道自己还可以。',
      },
    ],
  },

  {
    id: 'midlife_reflection',
    ageRange: [39, 45],
    title: '中年之问',
    description: '你在镜子里看到了一些白头发。孩子在叫你，电话在响，账单在等你。你停了一秒，问自己：我快乐吗？',
    choices: [
      {
        id: 'numb_acceptance',
        text: '这种问题没意义，继续忙',
        statChanges: { mental: -3 },
        personalityDelta: { resilience: 1, empathy: -1 },
        followUpText: '你把那个问题压进了心底。它还在那里。',
      },
      {
        id: 'find_meaning',
        text: '开始认真重新规划剩下的人生',
        statChanges: { mental: 6, intelligence: 3 },
        personalityDelta: { adventure: 1, rational: 2, resilience: 1 },
        followUpText: '也许四十岁，才是真正的开始。',
      },
      {
        id: 'life_change',
        text: '辞职，离婚，或者搬到另一个城市',
        statChanges: { mental: 4, wealth: -10, social: -5 },
        personalityDelta: { adventure: 3, resilience: 2 },
        followUpText: '所有人都说你疯了。你感觉自己终于清醒了。',
      },
    ],
  },

  // ============================================================
  // 45-60岁：暮色
  // ============================================================

  {
    id: 'health_crisis',
    ageRange: [45, 55],
    title: '一次检查',
    description: '体检报告出来了，有几项指标异常。医生说需要进一步检查。',
    choices: [
      {
        id: 'ignore_it',
        text: '忙，没时间，先放着',
        statChanges: { fitness: -10, mental: -3 },
        personalityDelta: { resilience: -1 },
        followUpText: '你说等忙完这阵子再说。这阵子没有结束。',
      },
      {
        id: 'take_care',
        text: '立刻调整作息，开始锻炼、戒烟戒酒',
        statChanges: { fitness: 8, mental: 4 },
        personalityDelta: { rational: 1, resilience: 1 },
        followUpText: '你终于开始在乎自己的身体了。',
      },
      {
        id: 'serious_treatment',
        text: '认真治疗，配合医生',
        statChanges: { fitness: 5, wealth: -10, mental: 2 },
        personalityDelta: { rational: 1 },
        followUpText: '钱花了不少，但命是自己的。',
      },
    ],
  },

  {
    id: 'legacy',
    ageRange: [55, 60],
    title: '你想留下什么',
    description: '你开始想一些以前不会想的问题：等我走了，会有人记得我吗？',
    choices: [
      {
        id: 'family_legacy',
        text: '陪在孩子身边，传递一些真正重要的东西',
        statChanges: { mental: 8, social: 3, eq: 3 },
        personalityDelta: { empathy: 2, extrovert: 1 },
        followUpText: '你终于学会了一件事：陪伴，是最长情的给予。',
      },
      {
        id: 'work_legacy',
        text: '把事业做到一个让自己满意的位置',
        requirement: { hasTags: ['ambitious'] },
        statChanges: { wealth: 15, mental: 3 },
        personalityDelta: { materialistic: 1, resilience: 1 },
        followUpText: '成功的味道，在这个年纪，你终于尝到了。',
      },
      {
        id: 'spiritual_legacy',
        text: '开始写作、画画、或者做义工',
        statChanges: { mental: 10, social: 4 },
        addTags: ['creative_soul'],
        personalityDelta: { empathy: 2, adventure: 1, materialistic: -1 },
        followUpText: '你发现，给予比拥有更让你感到饱满。',
      },
    ],
  },
];
