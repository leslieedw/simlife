import type { EventCard } from '../types';

export const ALL_EVENTS: EventCard[] = [

  // ============================================================
  // 0-6岁：最初的世界
  // ============================================================

  {
    id: 'gender_first_lesson',
    ageRange: [1, 3],
    title: '第一堂课',
    description: '你还很小，但你已经开始感受到一些东西。家里有人对你说……',
    choices: [
      {
        id: 'you_are_pretty',
        text: '"你真漂亮，长大了一定迷死人。"',
        statChanges: { appearance: 3, mental: -2 },
        addTags: ['beauty_currency'],
        personalityDelta: { authenticity: -1 },
        followUpText: '你学会了用微笑回应被看见的感觉。还不知道那个眼神日后会有多重。',
      },
      {
        id: 'be_a_good_girl',
        text: '"女孩子要乖，不要哭，不要闹，听话才是好孩子。"',
        statChanges: { eq: -3, mental: -2 },
        addTags: ['good_girl_conditioning'],
        personalityDelta: { selfExpression: -2, authenticity: -1 },
        followUpText: '你把眼泪咽下去了。这一咽，练习了很多年。',
      },
      {
        id: 'you_are_smart',
        text: '"这孩子聪明，以后读书有出息。"',
        statChanges: { intelligence: 4, mental: 3 },
        personalityDelta: { selfExpression: 1, thriving: 1 },
        followUpText: '你第一次感到，你这个人——不只是你的脸——是值得期待的。',
      },
    ],
  },

  {
    id: 'parents_world',
    ageRange: [3, 6],
    title: '爸爸妈妈的世界',
    description: '你开始观察爸妈之间是什么样的。你看见……',
    choices: [
      {
        id: 'father_dominate',
        text: '爸爸说了算，妈妈大多数时候沉默或顺从',
        statChanges: { mental: -3, eq: 2 },
        addTags: ['good_girl_conditioning'],
        personalityDelta: { resistance: -1, structuralAwareness: -1 },
        followUpText: '你以为这就是"家"本来的样子。很多年后才发现，你把它带进了自己的关系里。',
      },
      {
        id: 'parents_equal',
        text: '他们会争吵，但也会道歉，好像是平等的',
        statChanges: { mental: 3, eq: 3 },
        personalityDelta: { selfExpression: 1, authenticity: 1 },
        followUpText: '你在那些争吵里看见了一件事：人是可以说出"我不同意"的。',
      },
      {
        id: 'mother_strong',
        text: '妈妈很强，家里她拿主意，但爸爸时不时会说"女人就是……"',
        statChanges: { mental: 2, intelligence: 2 },
        personalityDelta: { resistance: 1, structuralAwareness: 1 },
        followUpText: '你爱妈妈，但也隐约感受到一种东西在压着她。',
      },
      {
        id: 'absent_father',
        text: '爸爸很少在，家里就妈妈一个人撑着',
        statChanges: { mental: 1, social: -2 },
        addTags: ['maternal_wound'],
        personalityDelta: { connection: 1, structuralAwareness: 1 },
        followUpText: '妈妈从不说累，但你记得她深夜坐在厨房里发呆的样子。',
      },
    ],
  },

  // ============================================================
  // 6-12岁：小学——好女孩的训练营
  // ============================================================

  {
    id: 'classroom_boys_first',
    ageRange: [7, 9],
    title: '课堂上',
    description: '老师提问，你和班里一个男生同时举手。老师叫了他。下课后，老师摸摸你的头说："女孩子不用那么积极，安静一点更好。"',
    choices: [
      {
        id: 'accept_quietly',
        text: '点头，以后举手少了很多',
        statChanges: { intelligence: -2, mental: -3 },
        addTags: ['good_girl_conditioning'],
        personalityDelta: { selfExpression: -2, resistance: -1 },
        followUpText: '你学会了把答案留在心里。老师说你变乖了。',
      },
      {
        id: 'confused_but_comply',
        text: '不明白为什么，但还是接受了',
        statChanges: { mental: -2 },
        personalityDelta: { selfExpression: -1 },
        followUpText: '那句话像一根很细的刺，扎进去了，你找不到它在哪里。',
      },
      {
        id: 'keep_raising_hand',
        text: '下次继续举手，管他的',
        statChanges: { intelligence: 3, mental: 2 },
        addTags: ['rebel_spirit'],
        personalityDelta: { resistance: 2, selfExpression: 2 },
        followUpText: '老师皱了眉，但你答对了。那种感觉比被表扬更真实。',
      },
    ],
  },

  {
    id: 'body_first_shame',
    ageRange: [8, 11],
    title: '身体',
    description: '有个同学当着全班的面说你"太胖了"或者"黑"或者"矮"。大家笑了。',
    choices: [
      {
        id: 'laugh_it_off',
        text: '也跟着笑，假装没关系',
        statChanges: { mental: -5, eq: -2 },
        addTags: ['good_girl_conditioning', 'body_shame'],
        personalityDelta: { selfExpression: -2, authenticity: -2 },
        followUpText: '从那天起你开始不照镜子。或者，照得太久。',
      },
      {
        id: 'cry_in_bathroom',
        text: '去厕所哭，出来时假装什么都没发生',
        statChanges: { mental: -7 },
        addTags: ['body_shame'],
        personalityDelta: { selfExpression: -1, authenticity: -1 },
        followUpText: '你把那个哭泣的自己锁在了厕所里，关门，继续上课。',
      },
      {
        id: 'fight_back_words',
        text: '"你才是。"你说，声音没有颤抖',
        statChanges: { mental: 2, social: -2 },
        addTags: ['rebel_spirit'],
        personalityDelta: { selfExpression: 2, resistance: 2 },
        followUpText: '他们说你"好凶"。你后来才知道，那叫有边界。',
      },
    ],
  },

  {
    id: 'first_period_early',
    ageRange: [9, 11],
    title: '那个秘密',
    description: '你发现裤子上有血，你才十岁，没人告诉过你这件事。',
    weight: 0.5,
    choices: [
      {
        id: 'tell_mom',
        text: '去找妈妈，她帮你处理，但只说"以后小心点"',
        statChanges: { mental: -2, eq: 2 },
        personalityDelta: { connection: 1 },
        followUpText: '她没有解释更多。你明白了，有些事情是不被说出口的。',
      },
      {
        id: 'handle_alone',
        text: '自己偷偷处理，从没跟任何人提起',
        statChanges: { mental: -5, fitness: -2 },
        addTags: ['body_shame'],
        personalityDelta: { selfExpression: -2, authenticity: -1 },
        followUpText: '你一个人扛下去了。这是你很多年的生存方式——一个人，悄悄地。',
      },
      {
        id: 'classmate_told_teacher',
        text: '同学发现了，告诉了老师，你被叫到走廊，全班都知道了',
        statChanges: { mental: -8, social: -4 },
        addTags: ['body_shame', 'male_gaze_trauma'],
        personalityDelta: { selfExpression: -2, structuralAwareness: 1 },
        followUpText: '你恨透了那一天。但你也记住了：身体的事，不会有人帮你好好保护。',
      },
    ],
  },

  {
    id: 'bullying_and_protection',
    ageRange: [9, 12],
    title: '霸凌与保护',
    description: '班里几个女生孤立你，或者一个男生一直找你麻烦。有一天，一个高年级的男生拦住你说："你以后跟着我，没人敢动你。"',
    choices: [
      {
        id: 'accept_protection',
        text: '接受了，终于不再被欺负',
        statChanges: { mental: 2, social: -2 },
        addTags: ['protective_relationship', 'beauty_currency'],
        personalityDelta: { resistance: -2, selfExpression: -1 },
        followUpText: '霸凌停了。但他开始要你帮他做作业，要你等他，要你不跟别人说话。你以为这是友情。',
      },
      {
        id: 'decline_protection',
        text: '拒绝，你不喜欢他的眼神',
        statChanges: { mental: -2, social: -2 },
        addTags: ['rebel_spirit'],
        personalityDelta: { resistance: 2, selfExpression: 1, authenticity: 1 },
        followUpText: '霸凌没有停，但你没有欠任何人。有时候这就是你能拥有的尊严的全部。',
      },
      {
        id: 'tell_teacher',
        text: '去找了老师，老师说"小孩子闹着玩"',
        statChanges: { mental: -4 },
        personalityDelta: { structuralAwareness: 1, resistance: 1 },
        followUpText: '老师没帮上忙。但你知道了：有些门，推了，里面是空的。',
      },
      {
        id: 'find_girl_ally',
        text: '找到一个被同样欺负的女生，你们互相保护',
        statChanges: { mental: 4, social: 3 },
        addTags: ['female_solidarity'],
        personalityDelta: { connection: 3, selfExpression: 1 },
        followUpText: '两个人背靠背站着，就不那么怕了。你第一次感受到，女性的联结可以是盾牌。',
      },
    ],
  },

  {
    id: 'female_friendship_first',
    ageRange: [8, 12],
    title: '你最好的朋友',
    description: '你有了一个最好的朋友——也是女生。你们……',
    choices: [
      {
        id: 'real_friendship',
        text: '什么都说，在她面前你不需要表演',
        statChanges: { mental: 6, social: 5, eq: 3 },
        addTags: ['female_solidarity'],
        personalityDelta: { connection: 3, selfExpression: 2, authenticity: 2 },
        followUpText: '她是你第一个见过真正的你的人。那种被看见，后来成为你判断关系好坏的标准。',
      },
      {
        id: 'surface_friendship',
        text: '关系不错，但你们从不说真心话',
        statChanges: { social: 3 },
        personalityDelta: { connection: 1 },
        followUpText: '你有朋友，但你还是孤独的。这两件事可以同时为真。',
      },
      {
        id: 'competitive_friendship',
        text: '一起玩，但她妈妈总说"要比她强才行"，你们之间有一层什么',
        statChanges: { social: 2, mental: -2 },
        addTags: ['internalized_misogyny'],
        personalityDelta: { connection: -1 },
        followUpText: '你爱她，但也怕她比你好。那个"怕"是被教出来的，不是你本来的样子。',
      },
    ],
  },

  // ============================================================
  // 12-18岁：青春期——规则越来越密
  // ============================================================

  {
    id: 'first_period',
    ageRange: [11, 13],
    title: '初潮',
    description: '它来了。你已经知道这件事，但真正发生的那一天，你感受到了什么？',
    lacksTag: ['first_period_early'],
    choices: [
      {
        id: 'feel_disgusted',
        text: '觉得恶心，觉得身体背叛了自己',
        statChanges: { mental: -4, fitness: -2 },
        addTags: ['body_shame'],
        personalityDelta: { authenticity: -1, selfExpression: -1 },
        followUpText: '没有人告诉你，这是力量，不是污秽。',
      },
      {
        id: 'feel_grown',
        text: '有点害怕，但也有点奇怪的庄重感',
        statChanges: { mental: 1, eq: 2 },
        personalityDelta: { authenticity: 1, thriving: 1 },
        followUpText: '你不知道叫什么，但你记住了那一刻。像某种东西开始了。',
      },
      {
        id: 'older_sister_helps',
        text: '姐姐或妈妈陪着你，给你讲了很多',
        requirement: { minStats: { social: 40 } },
        statChanges: { mental: 3, eq: 3 },
        addTags: ['female_solidarity'],
        personalityDelta: { connection: 2, selfExpression: 1 },
        followUpText: '被一个女人好好地接住——你后来才知道这有多少人没有过。',
      },
    ],
  },

  {
    id: 'beauty_standard_teen',
    ageRange: [12, 15],
    title: '美丽的压力',
    description: '你开始意识到外貌在被评价。同学之间流传着一份"班花榜"，有人问你打几分，也有人说你某个地方不好看。',
    choices: [
      {
        id: 'start_dieting',
        text: '开始节食，觉得自己需要变瘦',
        statChanges: { fitness: -5, mental: -5, appearance: 2 },
        addTags: ['body_shame'],
        personalityDelta: { authenticity: -2, selfExpression: -1 },
        followUpText: '你赢得了一些"你最近变好看了"，但你也开始不知道饿是一种感觉还是一种成就。',
      },
      {
        id: 'ignore_the_list',
        text: '不理会，继续做自己',
        statChanges: { mental: 2, intelligence: 2 },
        personalityDelta: { resistance: 2, authenticity: 2 },
        followUpText: '你不是不在乎，你只是选择了把精力放在别的地方。那是一种早熟的清醒。',
      },
      {
        id: 'enjoy_attention',
        text: '你在榜上，你发现那种被看见的感觉很好',
        statChanges: { social: 4, mental: -2 },
        addTags: ['beauty_currency'],
        personalityDelta: { authenticity: -1, selfExpression: -1 },
        followUpText: '外貌带来的关注是真实的，但你还不知道它有没有有效期，以及到期时你手里还剩什么。',
      },
    ],
  },

  {
    id: 'first_male_gaze',
    ageRange: [12, 15],
    title: '那个眼神',
    description: '放学路上，一个陌生的成年男性一直盯着你看，或者说了什么让你浑身不对劲的话。你才十三四岁。',
    choices: [
      {
        id: 'freeze_do_nothing',
        text: '不知道怎么办，装作没听见，走快了',
        statChanges: { mental: -6 },
        addTags: ['male_gaze_trauma'],
        personalityDelta: { selfExpression: -1, structuralAwareness: 1 },
        followUpText: '你回到家没跟任何人说。你不确定这是不是你的问题。那个不确定，比事件本身更伤人。',
      },
      {
        id: 'tell_mom_ignored',
        text: '告诉了妈妈，她说"以后少穿那种衣服"',
        statChanges: { mental: -5, eq: -2 },
        addTags: ['male_gaze_trauma', 'maternal_wound'],
        personalityDelta: { selfExpression: -2, structuralAwareness: 2 },
        followUpText: '那一刻你明白了：不是所有的大人都会站在你这边。有时候连妈妈也会把问题还给你。',
      },
      {
        id: 'shout_back',
        text: '"你看什么看！"你大声说，走掉了',
        statChanges: { mental: -1, social: 1 },
        addTags: ['rebel_spirit'],
        personalityDelta: { resistance: 2, selfExpression: 2 },
        followUpText: '你腿在抖，但你的声音没抖。那一刻的你，很了不起。',
      },
      {
        id: 'tell_friend_together',
        text: '跟好朋友说了，她说她也经历过，们一起骂了很久',
        requirement: { hasTags: ['female_solidarity'] },
        statChanges: { mental: 2, social: 2 },
        personalityDelta: { connection: 2, structuralAwareness: 2 },
        followUpText: '骂完了，你们沉默了一下。"怎么到处都有这种人。"她说。你懂她的意思。',
      },
    ],
  },

  {
    id: 'smart_girl_penalty',
    ageRange: [13, 16],
    title: '太聪明的惩罚',
    description: '你成绩很好。但有人开始说："女生学理科没前途。" 或者，一个喜欢你的男生说："你太强了，我有点怕你。"',
    requirement: { minStats: { intelligence: 60 } },
    choices: [
      {
        id: 'hide_intelligence',
        text: '开始故意答错一些题，表现得没那么厉害',
        statChanges: { intelligence: -5, mental: -5 },
        addTags: ['good_girl_conditioning'],
        personalityDelta: { selfExpression: -3, authenticity: -3, resistance: -1 },
        followUpText: '你假装比自己弱，为了让别人舒服。很多年后你才知道那叫什么：你在缩小自己。',
      },
      {
        id: 'keep_being_smart',
        text: '继续考高分，管别人怎么看',
        statChanges: { intelligence: 6, social: -2 },
        addTags: ['rebel_spirit', 'academic_escape'],
        personalityDelta: { resistance: 2, selfExpression: 2, authenticity: 2 },
        followUpText: '"太强"的女生吓到了他，但也吸引了另一些人——那些不怕被你超过的人。',
      },
      {
        id: 'channel_to_art',
        text: '把精力放进写作或画画里，用另一种方式存在',
        statChanges: { intelligence: 3, mental: 4 },
        addTags: ['creative_outlet'],
        personalityDelta: { selfExpression: 3, authenticity: 2, thriving: 1 },
        followUpText: '你找到了一个地方，在那里你可以是全部的自己，不用缩小，不用翻译。',
      },
    ],
  },

  {
    id: 'study_or_quit_poor',
    ageRange: [14, 16],
    title: '读书还是嫁人',
    description: '家里快供不起你读书了。亲戚说："女孩子读那么多书干嘛，找个好人嫁了不就行了。" 爸妈没说话。',
    weight: 0.5,
    requirement: { maxStats: { wealth: 30 } },
    choices: [
      {
        id: 'accept_fate',
        text: '觉得他们说的有道理，考虑辍学',
        statChanges: { intelligence: -5, mental: -8 },
        personalityDelta: { resistance: -2, structuralAwareness: -1, thriving: -2 },
        followUpText: '你合上了书包。没有人问你想不想读。那个问题，从来没有人问过你。',
      },
      {
        id: 'fight_for_school',
        text: '说："我自己去打工赚学费。"',
        statChanges: { intelligence: 4, wealth: -5, mental: -3 },
        addTags: ['academic_escape', 'rebel_spirit', 'economic_independence_drive'],
        personalityDelta: { resistance: 3, selfExpression: 2, thriving: 2 },
        followUpText: '你利用周末打工，睡得很少，但你没有放弃。有些人的出路，是自己凿出来的。',
      },
      {
        id: 'rely_on_scholarship',
        text: '考了奖学金，用成绩换来留下的权利',
        requirement: { minStats: { intelligence: 65 } },
        statChanges: { intelligence: 8, mental: 2 },
        addTags: ['academic_escape'],
        personalityDelta: { resistance: 2, thriving: 2, authenticity: 1 },
        followUpText: '你用成绩堵住了所有人的嘴。那是你能找到的最有效的语言。',
        lockedHint: '（需要：足够高的智识）',
      },
    ],
  },

  {
    id: 'first_love_control',
    ageRange: [14, 17],
    title: '第一段感情',
    description: '你谈恋爱了。他喜欢你，你也喜欢他。但慢慢地，你发现他开始管你——跟谁说话，穿什么，几点回家。',
    choices: [
      {
        id: 'think_its_love',
        text: '以为这是爱，是在乎，接受了',
        statChanges: { mental: -6, social: -4, eq: -3 },
        addTags: ['trauma_bond', 'good_girl_conditioning'],
        personalityDelta: { selfExpression: -2, resistance: -2, authenticity: -2 },
        followUpText: '你开始以他的眼睛看自己。失去自己是慢慢的，细得像头发，等你发现，已经不知道原来的你是什么样子了。',
      },
      {
        id: 'leave_early',
        text: '感觉不对，提了分手',
        statChanges: { mental: -2, social: 2 },
        personalityDelta: { resistance: 2, selfExpression: 2, authenticity: 2 },
        followUpText: '他说你不懂爱。你说也许吧。但你知道，爱应该让你变大，不是变小。',
      },
      {
        id: 'stay_hidden',
        text: '表面顺从，但把真实的自己藏起来了',
        statChanges: { mental: -4, eq: 2 },
        personalityDelta: { selfExpression: -3, authenticity: -2, resistance: 1 },
        followUpText: '你活在他看见的那个版本里，把真正的自己锁进了一个只有你知道的地方。',
      },
      {
        id: 'got_support',
        text: '向好朋友倾诉，她帮你看清楚了',
        requirement: { hasTags: ['female_solidarity'] },
        statChanges: { mental: 3, social: 2 },
        removeTags: ['trauma_bond'],
        personalityDelta: { connection: 2, resistance: 2, selfExpression: 1 },
        followUpText: '她说："这不是爱，这是控制。" 你哭了很久，然后离开了。',
      },
    ],
  },

  {
    id: 'gaokao_female',
    ageRange: [18, 18],
    title: '高考与出路',
    description: '高考结束了。你坐在成绩单前，想到接下来的每一条路。',
    choices: [
      {
        id: 'good_score_university',
        text: '考得不错，去外地上大学，第一次离开家',
        requirement: { minStats: { intelligence: 65 } },
        statChanges: { intelligence: 8, social: 4, mental: 3 },
        addTags: ['academic_escape'],
        personalityDelta: { thriving: 2, selfExpression: 1, resistance: 1 },
        followUpText: '在那个陌生的城市，没有人认识你。你发现你可以成为任何人，或者慢慢地，成为你自己。',
      },
      {
        id: 'local_university',
        text: '成绩一般，在本地上了大学，每周回家',
        statChanges: { intelligence: 3, social: 2 },
        personalityDelta: { resistance: -1 },
        followUpText: '距离没有拉开，家的引力还在。你一边读书一边听着关于你该怎样的话。',
      },
      {
        id: 'work_after_gaokao',
        text: '没考好，也不想复读，直接去城市打工',
        statChanges: { wealth: 8, intelligence: -3, fitness: 2 },
        addTags: ['economic_independence_drive'],
        personalityDelta: { thriving: 1, materialistic: 2, resistance: 1 },
        followUpText: '你第一次拿到工资，在出租屋里哭了。那是属于你自己的钱，没有人能拿走。',
      },
      {
        id: 'marry_after_gaokao',
        text: '亲戚介绍了一个还不错的男人，家里说"不读了，嫁了吧"',
        requirement: { maxStats: { wealth: 35 } },
        statChanges: { wealth: 5, intelligence: -5, mental: -5 },
        addTags: ['good_girl_conditioning'],
        personalityDelta: { selfExpression: -2, resistance: -3, thriving: -2 },
        followUpText: '婚礼上你穿着红衣服，笑着。没有人问你想不想。那个问题，从来没有人问过你。',
        lockedHint: '（需要：家境有限）',
      },
    ],
  },

  // ============================================================
  // 18-25岁：走进更大的世界
  // ============================================================

  {
    id: 'university_freedom',
    ageRange: [19, 21],
    title: '自由的味道',
    description: '大学，你第一次可以自己决定很多事。你……',
    choices: [
      {
        id: 'explore_self',
        text: '加入社团，读以前没读过的书，剪了从小留到大的长发',
        statChanges: { intelligence: 4, social: 4, mental: 4 },
        addTags: ['creative_outlet'],
        personalityDelta: { selfExpression: 3, authenticity: 3, thriving: 2 },
        followUpText: '你照镜子，发现你喜欢这个人。不是因为她好看，是因为她是你选的。',
      },
      {
        id: 'study_hard_escape',
        text: '努力学习，用成绩换未来，其他的以后再说',
        statChanges: { intelligence: 7, social: -2, mental: -1 },
        addTags: ['academic_escape'],
        personalityDelta: { thriving: 1, authenticity: 1 },
        followUpText: '图书馆是你的庇护所。那些书页之间，你是安全的。',
      },
      {
        id: 'fall_into_relationship',
        text: '很快谈了恋爱，大部分时间都在那段关系里',
        statChanges: { social: 3, intelligence: -3, mental: -2 },
        personalityDelta: { connection: 1, selfExpression: -1 },
        followUpText: '你以为爱情就是这样，全部投进去。后来你才知道，一段关系也需要两个完整的人。',
      },
    ],
  },

  {
    id: 'mentor_trap',
    ageRange: [19, 23],
    title: '特别关照',
    description: '一个年长的男性导师或前辈开始特别关照你——给机会、单独吃饭、发消息聊到很晚。你感到机会和不适感同时存在。',
    choices: [
      {
        id: 'accept_benefit',
        text: '接受好处，对不适感视而不见',
        statChanges: { intelligence: 4, wealth: 5, mental: -5 },
        addTags: ['beauty_currency', 'male_gaze_trauma'],
        personalityDelta: { selfExpression: -2, authenticity: -2 },
        followUpText: '你得到了资源，也把某种东西交出去了。那个东西叫做：他对你没有那个权利的感觉。',
      },
      {
        id: 'maintain_distance',
        text: '保持礼貌但拉开距离，放弃那些机会',
        statChanges: { mental: 4, intelligence: -3 },
        personalityDelta: { authenticity: 2, resistance: 2, selfExpression: 1 },
        followUpText: '你损失了一些机会。你保住了一些更难描述、但更重要的东西。',
      },
      {
        id: 'report_him',
        text: '告诉了学校相关部门',
        statChanges: { mental: -3, social: -5 },
        addTags: ['rebel_spirit', 'glass_ceiling_seen'],
        personalityDelta: { resistance: 4, structuralAwareness: 3, selfExpression: 2 },
        followUpText: '没有人相信你，或者相信了也什么都没做。你学到了一件关于这个世界如何运作的事。',
      },
      {
        id: 'ask_female_friend',
        text: '跟女性朋友谈了这件事，她说"你是第几个了"',
        requirement: { hasTags: ['female_solidarity'] },
        statChanges: { mental: 2, social: 1 },
        personalityDelta: { structuralAwareness: 3, connection: 2 },
        followUpText: '她平静地说出那句话的时候，你感到愤怒比任何时候都清晰。这不是意外，这是模式。',
      },
    ],
  },

  {
    id: 'job_interview_discrimination',
    ageRange: [22, 25],
    title: '求职',
    description: '面试时，对方问你："有没有男朋友？打算什么时候结婚生孩子？" 你坐在那里，感到一种奇怪的愤怒。',
    choices: [
      {
        id: 'answer_to_please',
        text: '"暂时没有这个计划。"（撒谎，为了拿到这份工作）',
        statChanges: { wealth: 8, mental: -3 },
        personalityDelta: { authenticity: -2, structuralAwareness: 1 },
        followUpText: '你拿到了offer。在入职的第一天，你记起了那个问题。',
      },
      {
        id: 'honest_answer',
        text: '"这和工作能力有关系吗？"',
        statChanges: { wealth: -5, mental: 3 },
        addTags: ['glass_ceiling_seen', 'rebel_spirit'],
        personalityDelta: { resistance: 3, selfExpression: 2, structuralAwareness: 2 },
        followUpText: '面试没过。但你没有道歉。有时候，不道歉本身就是一种答案。',
      },
      {
        id: 'swallow_anger',
        text: '回答了，内心翻涌，但面上笑着',
        statChanges: { wealth: 5, mental: -4, eq: -2 },
        addTags: ['good_girl_conditioning'],
        personalityDelta: { authenticity: -2, selfExpression: -2 },
        followUpText: '拿到了工作，也吃下了那口气。你很快学会了，这不是最后一次。',
      },
    ],
  },

  {
    id: 'first_own_money',
    ageRange: [22, 26],
    title: '第一份工资',
    description: '你第一次领到全部属于自己的工资，转账到自己的账户里。你做的第一件事是……',
    choices: [
      {
        id: 'give_to_family',
        text: '转了一半给父母，这是应该的',
        statChanges: { wealth: -5, social: 2, mental: -1 },
        personalityDelta: { connection: 1, authenticity: -1 },
        followUpText: '他们说"懂事"。你微笑。内心有一个声音说：这是我的钱。那个声音被你按下去了。',
      },
      {
        id: 'keep_for_self',
        text: '把它全部存起来，作为属于自己的底气',
        statChanges: { wealth: 8, mental: 5 },
        addTags: ['economic_independence_drive'],
        personalityDelta: { authenticity: 2, thriving: 2, selfExpression: 1 },
        followUpText: '看着账户里的数字，你感到一种什么——不是快乐，是稳固。那是出路的感觉。',
      },
      {
        id: 'spend_on_self',
        text: '买了一件自己喜欢很久的东西，不向任何人汇报',
        statChanges: { mental: 5, wealth: 2 },
        personalityDelta: { authenticity: 2, selfExpression: 2, thriving: 1 },
        followUpText: '那件东西后来坏了，但你记得买它时的感觉。那叫做属于自己。',
      },
    ],
  },

  {
    id: 'older_man_pursuit',
    ageRange: [23, 28],
    title: '他说可以给你一切',
    description: '一个比你大十几岁的男人追你，有钱，有资源，态度温柔，说可以照顾你。你身边的朋友说"找个有实力的多稳"。',
    choices: [
      {
        id: 'accept_security',
        text: '在一起了，感觉被保护',
        statChanges: { wealth: 15, mental: -3, social: -2 },
        addTags: ['protective_relationship', 'beauty_currency'],
        personalityDelta: { selfExpression: -2, resistance: -2, authenticity: -2, thriving: -1 },
        followUpText: '刚开始很好。然后你发现，"照顾"和"控制"有时候穿的是同一件衣服。',
      },
      {
        id: 'decline_politely',
        text: '婉拒，觉得年龄差距和那种关系不对劲',
        statChanges: { mental: 3, social: 1 },
        personalityDelta: { resistance: 2, authenticity: 2, selfExpression: 1 },
        followUpText: '朋友说你傻。你说也许是。但那种不对劲的感觉，你一直很信任它。',
      },
      {
        id: 'use_him_back',
        text: '利用他的资源，但保持情感距离',
        statChanges: { wealth: 8, mental: -4, intelligence: 3 },
        addTags: ['beauty_currency'],
        personalityDelta: { authenticity: -3, structuralAwareness: 1 },
        followUpText: '你在用他的规则玩他的游戏。你以为自己在赢，但消耗的是你自己。',
      },
    ],
  },

  // ============================================================
  // 25-35岁：选择，或者被选择
  // ============================================================

  {
    id: 'career_vs_marriage_crossroads',
    ageRange: [26, 30],
    title: '你不能两者都要',
    description: '你的事业刚刚有起色，同时，所有人开始催婚。家人说"不小了"，前男友说"你事业心太重"，公司晋升可能要求出差一年。',
    choices: [
      {
        id: 'choose_career',
        text: '接受出差机会，先把工作做起来',
        statChanges: { intelligence: 6, wealth: 10, social: -4, mental: -3 },
        addTags: ['economic_independence_drive', 'glass_ceiling_seen'],
        personalityDelta: { thriving: 2, selfExpression: 1, resistance: 2 },
        followUpText: '你没有辜负那个机会。但你也清楚地看见了，在这个系统里，女人得付出多少才能走到同一个位置。',
      },
      {
        id: 'choose_marriage',
        text: '把事业缓一缓，先结婚稳下来',
        statChanges: { wealth: 3, social: 3, mental: -2, intelligence: -3 },
        personalityDelta: { resistance: -2, selfExpression: -1, thriving: -1 },
        followUpText: '婚后你发现，那个"稳"只是换了一种不稳。',
      },
      {
        id: 'refuse_the_premise',
        text: '"为什么我不能两者都要？"你开始找方法',
        statChanges: { intelligence: 4, mental: -2, wealth: 4 },
        addTags: ['rebel_spirit', 'economic_independence_drive'],
        personalityDelta: { resistance: 3, structuralAwareness: 2, selfExpression: 2 },
        followUpText: '没有现成的路。你开始自己修路。这比走别人修好的路累，但走的是你自己选的方向。',
      },
    ],
  },

  {
    id: 'marriage_decision',
    ageRange: [26, 32],
    title: '婚姻这件事',
    description: '关于婚姻，你做了一个决定。',
    choices: [
      {
        id: 'marry_right_person',
        text: '嫁给一个真正尊重你的人，你们谈过很多关于将来如何分工',
        statChanges: { mental: 5, social: 4, eq: 3 },
        personalityDelta: { thriving: 2, connection: 2, authenticity: 2 },
        followUpText: '没有完美的婚姻。但有一种婚姻，让你每天早上醒来，还是你自己。',
      },
      {
        id: 'marry_under_pressure',
        text: '在家里和社会的压力下嫁了，他还不错但你也不确定',
        statChanges: { mental: -3, wealth: 3 },
        personalityDelta: { resistance: -2, authenticity: -2, selfExpression: -1 },
        followUpText: '你告诉自己，感情是慢慢培养的。这话有时候是真的，有时候是你给自己的安慰剂。',
      },
      {
        id: 'stay_single',
        text: '决定不结婚，至少现在不',
        statChanges: { mental: 4, social: -3, wealth: 3 },
        addTags: ['childless_by_choice', 'economic_independence_drive'],
        personalityDelta: { resistance: 3, selfExpression: 3, authenticity: 3, thriving: 2 },
        followUpText: '你解释给所有人听，然后停止解释了。你不欠任何人一个解释。',
      },
      {
        id: 'marry_red_flags',
        text: '他有一些让你不安的地方，但你以为爱能改变人',
        requirement: { hasTags: ['trauma_bond'] },
        statChanges: { mental: -8, social: -3, wealth: -3 },
        addTags: ['trauma_bond'],
        personalityDelta: { selfExpression: -3, resistance: -2, thriving: -3 },
        followUpText: '爱没能改变他。它消耗的是你。',
        lockedHint: '（需要：对某段关系有依赖的印记）',
      },
    ],
  },

  {
    id: 'pregnancy_pressure',
    ageRange: [27, 33],
    title: '生还是不生',
    description: '结婚后，婆家开始催生孩子。"年龄大了生不了"，"传宗接代"，"你工作可以以后再找"。你还没有想好。',
    weight: 0.6,
    choices: [
      {
        id: 'have_baby_for_others',
        text: '生了，主要是为了让家里安静',
        statChanges: { mental: -6, fitness: -5, wealth: -8, social: 2 },
        addTags: ['second_shift_burden'],
        personalityDelta: { selfExpression: -2, resistance: -2, thriving: -2 },
        followUpText: '孩子来了。你爱他/她，但你也知道，这不是你当初选择的理由。',
      },
      {
        id: 'decide_for_self',
        text: '和伴侣认真谈过，你们一起做了决定',
        statChanges: { mental: 3, eq: 3 },
        personalityDelta: { authenticity: 2, selfExpression: 2, thriving: 1 },
        followUpText: '这件事，是你自己的。不是因为顺从，不是因为压力。这个区别，比结果更重要。',
      },
      {
        id: 'not_having_baby',
        text: '决定不生，承受了很多压力',
        statChanges: { mental: -2, wealth: 5, social: -4 },
        addTags: ['childless_by_choice', 'rebel_spirit'],
        personalityDelta: { resistance: 3, selfExpression: 3, authenticity: 3 },
        followUpText: '他们说了很多难听的话。你把那些话放进一个抽屉锁起来，继续过你的生活。',
      },
    ],
  },

  {
    id: 'domestic_labor',
    ageRange: [27, 35],
    title: '第二班次',
    description: '你下班回家，发现家里的事基本都是你在做。他工作了一天就是休息，你工作了一天还要洗碗做饭。',
    weight: 0.7,
    choices: [
      {
        id: 'accept_silently',
        text: '就这样了，做吧，习惯了',
        statChanges: { fitness: -4, mental: -6, wealth: -2 },
        addTags: ['second_shift_burden', 'good_girl_conditioning'],
        personalityDelta: { selfExpression: -2, resistance: -2, thriving: -2 },
        followUpText: '你开始用"习惯了"解释所有消耗你的事情。习惯不代表应该。',
      },
      {
        id: 'negotiate',
        text: '提出来谈，要求分工',
        statChanges: { mental: 2, social: -2, eq: 3 },
        personalityDelta: { selfExpression: 3, resistance: 2, authenticity: 2 },
        followUpText: '他说你太计较。你说，这叫公平。那个对话没有解决问题，但你说出来了。',
      },
      {
        id: 'outsource_help',
        text: '用自己的钱请了钟点工，不依赖他改变',
        requirement: { minStats: { wealth: 50 } },
        statChanges: { mental: 3, wealth: -5 },
        addTags: ['economic_independence_drive'],
        personalityDelta: { authenticity: 2, thriving: 1 },
        followUpText: '你用经济独立解决了一部分问题。但你也知道，这不是根本的解决方式。',
        lockedHint: '（需要：有足够财力支撑）',
      },
    ],
  },

  {
    id: 'recognize_toxicity',
    ageRange: [28, 38],
    title: '你终于说出那两个字',
    description: '有一天，你对着镜子，或者对着一本书，或者在一个朋友的面前，你第一次说出来："这段关系有问题。"',
    weight: 0.6,
    requirement: { hasTags: ['trauma_bond'] },
    choices: [
      {
        id: 'leave_relationship',
        text: '说完了，然后开始计划离开',
        statChanges: { mental: -3, wealth: -5, social: -3 },
        removeTags: ['trauma_bond'],
        addTags: ['survived_violence'],
        personalityDelta: { selfExpression: 3, resistance: 3, thriving: 2, authenticity: 3 },
        followUpText: '离开从来不是一件容易的事。但你做了。那是你这辈子最勇敢的事之一。',
      },
      {
        id: 'stay_and_hope',
        text: '说了，然后说服自己也许会变好',
        statChanges: { mental: -5 },
        personalityDelta: { resistance: -1, thriving: -2 },
        followUpText: '你听见了那个声音，然后又把它按下去了。那个声音不会消失，它会越来越大。',
      },
      {
        id: 'seek_help',
        text: '去找了心理咨询师',
        statChanges: { mental: 5, eq: 4 },
        personalityDelta: { selfExpression: 2, structuralAwareness: 3, thriving: 2 },
        followUpText: '第一次有人认真地听你说，不评判，不解决，只是接住。你在那个小时里，哭了很久。',
      },
    ],
  },

  // ============================================================
  // 35-50岁：沉淀或重生
  // ============================================================

  {
    id: 'career_glass_ceiling',
    ageRange: [33, 42],
    title: '天花板',
    description: '你足够努力，能力有目共睹，但晋升机会一次次给了资历不如你的男同事。没有人明说，但你都清楚。',
    choices: [
      {
        id: 'accept_the_ceiling',
        text: '接受了，调低了期待，继续做好手头的事',
        statChanges: { mental: -5, wealth: 2 },
        addTags: ['glass_ceiling_seen'],
        personalityDelta: { structuralAwareness: 2, resistance: -1, thriving: -2 },
        followUpText: '你没有失败，是系统没有容纳你。但受伤的是你的身体，不是系统的感觉。',
      },
      {
        id: 'change_track',
        text: '离职，去做自己的事或者换一个更好的环境',
        statChanges: { wealth: -8, mental: 3, intelligence: 4 },
        addTags: ['rebel_spirit', 'economic_independence_drive'],
        personalityDelta: { resistance: 3, authenticity: 2, thriving: 2 },
        followUpText: '你不是在逃跑，你是在找一个值得你留下的地方。',
      },
      {
        id: 'speak_up',
        text: '在会议上直接说出来，要求解释',
        statChanges: { social: -4, mental: 1, intelligence: 2 },
        addTags: ['glass_ceiling_seen', 'rebel_spirit'],
        personalityDelta: { selfExpression: 3, resistance: 3, structuralAwareness: 3 },
        followUpText: '没有人知道该怎么回应你。那个沉默，是这件事最诚实的答案。',
      },
    ],
  },

  {
    id: 'mother_reconciliation',
    ageRange: [33, 45],
    title: '妈妈',
    description: '你和妈妈之间有过很多裂缝。但有一天，你看着她的手，忽然看见了她一生承受过什么。',
    choices: [
      {
        id: 'forgive_understand',
        text: '你开始理解她，不是原谅她对你的方式，而是看见了加诸于她的东西',
        statChanges: { mental: 5, eq: 5 },
        removeTags: ['maternal_wound'],
        personalityDelta: { connection: 2, structuralAwareness: 3, thriving: 2 },
        followUpText: '你爱她，你也愤怒。你慢慢接受了，这两件事可以同时为真。',
      },
      {
        id: 'maintain_distance',
        text: '你理解了，但你们之间的距离还在，有些伤没有消失',
        statChanges: { mental: 2, social: -1 },
        personalityDelta: { structuralAwareness: 2, authenticity: 1 },
        followUpText: '理解一个人，不等于回到她身边。边界不是冷漠，是你保护自己的方式。',
      },
      {
        id: 'tell_her',
        text: '你第一次告诉她，那些年你受过的伤',
        statChanges: { mental: -2, eq: 4 },
        personalityDelta: { selfExpression: 3, authenticity: 3 },
        followUpText: '她哭了。你也哭了。没有任何一句话能把过去改写，但那个下午，你们是真实的。',
      },
    ],
  },

  {
    id: 'find_female_community',
    ageRange: [30, 45],
    title: '她们',
    description: '你遇到了一群女性——读书会、工作坊、偶然认识的朋友们。你发现，在她们面前，你不需要翻译自己。',
    choices: [
      {
        id: 'embrace_community',
        text: '真正走进了这个圈子，开始建立真实的联结',
        statChanges: { mental: 7, social: 5, eq: 4 },
        addTags: ['female_solidarity'],
        removeTags: ['internalized_misogyny'],
        personalityDelta: { connection: 4, thriving: 3, selfExpression: 2 },
        followUpText: '你以前不知道一段关系可以让你变得更完整，而不是更小。',
      },
      {
        id: 'observe_from_outside',
        text: '参加了，但你习惯观望，不太敢进去',
        statChanges: { mental: 3, social: 1 },
        personalityDelta: { connection: 1, structuralAwareness: 2 },
        followUpText: '你坐在边上听别人说话。有时候，被接住从旁边开始，也没关系。',
      },
      {
        id: 'distrust_women',
        text: '你觉得女人聚在一起只会八卦，没什么意思',
        statChanges: { social: -2 },
        addTags: ['internalized_misogyny'],
        personalityDelta: { connection: -2, structuralAwareness: -1 },
        followUpText: '这个想法是谁教给你的？它保护了谁？',
      },
    ],
  },

  {
    id: 'own_space',
    ageRange: [36, 50],
    title: '属于自己的房间',
    description: '伍尔夫说女人需要一间自己的屋子。你有吗？',
    choices: [
      {
        id: 'finally_have_it',
        text: '你终于有了一个完全属于自己的空间——书房、工作室、或者只是每天一小时',
        statChanges: { mental: 8, intelligence: 4 },
        addTags: ['creative_outlet'],
        personalityDelta: { selfExpression: 3, authenticity: 3, thriving: 3 },
        followUpText: '在那个空间里，你不属于任何人，不是谁的妻子，不是谁的母亲，不是谁的女儿。你是你自己。',
      },
      {
        id: 'still_waiting',
        text: '还没有，一直是别人的需求先于你的需求',
        statChanges: { mental: -4 },
        personalityDelta: { thriving: -1, selfExpression: -2 },
        followUpText: '你把自己的需求往后推了很多年。什么时候你才会排到第一位？',
      },
      {
        id: 'create_inner_room',
        text: '没有物理空间，但你在内心建了一个谁也进不来的地方',
        statChanges: { mental: 4, intelligence: 3 },
        personalityDelta: { authenticity: 2, selfExpression: 2, thriving: 1 },
        followUpText: '你在噪音里保住了沉默的核心。这也是一种力量。',
      },
    ],
  },

  {
    id: 'aging_body',
    ageRange: [42, 50],
    title: '你的身体在变',
    description: '皱纹，白发，变化的激素，别人开始叫你"阿姨"。社会对变老的女性有自己的态度，你感觉到了。',
    choices: [
      {
        id: 'fight_aging',
        text: '开始对抗衰老——花很多时间和钱在外貌上',
        statChanges: { appearance: 5, wealth: -8, mental: -3 },
        addTags: ['beauty_currency'],
        personalityDelta: { authenticity: -2, thriving: -1 },
        followUpText: '你在赶一场注定会输的比赛。但又有谁有资格评判你选择这场比赛？',
      },
      {
        id: 'accept_changing',
        text: '接受身体的变化，把注意力放在自己真正在意的事上',
        statChanges: { mental: 5, intelligence: 3 },
        personalityDelta: { authenticity: 3, thriving: 3, selfExpression: 2 },
        followUpText: '你不是"不在意了"，你是看清楚了什么值得在意。这需要很大的勇气。',
      },
      {
        id: 'complicated_feelings',
        text: '感觉很复杂，有些难过，但也有些奇怪的解脱',
        statChanges: { mental: 1, eq: 3 },
        personalityDelta: { structuralAwareness: 2, authenticity: 1 },
        followUpText: '那个解脱是真实的：当外貌不再是你的首要货币，你有机会弄清楚你是谁。',
      },
    ],
  },

  {
    id: 'life_review',
    ageRange: [50, 60],
    title: '回望',
    description: '你坐在某个地方，回望来时的路。你看见了什么？',
    choices: [
      {
        id: 'see_self_lost',
        text: '你看见了很多次，你把自己的需求放在最后，把别人的眼光放在最前',
        statChanges: { mental: -3, eq: 5 },
        personalityDelta: { structuralAwareness: 3, selfExpression: 2 },
        followUpText: '看见是第一步。看见了，才有可能不同。就算是在这个年纪，也还来得及。',
      },
      {
        id: 'see_own_path',
        text: '你看见了一条弯弯曲曲的路，但确实是自己走出来的',
        statChanges: { mental: 6, eq: 3 },
        personalityDelta: { thriving: 3, authenticity: 2 },
        followUpText: '完美的路从来不存在。这条路上有你的泥巴和你的脚印，那就是你的。',
      },
      {
        id: 'see_regrets',
        text: '有很多遗憾，那些没走的路，没说出口的话',
        statChanges: { mental: -4, eq: 4 },
        personalityDelta: { structuralAwareness: 2, authenticity: 1 },
        followUpText: '遗憾不是失败。它们是所有你想过的、感受到的、还没来得及的事情的总重量。',
      },
      {
        id: 'see_others',
        text: '你最先看见的，是你帮助过、影响过的那些人',
        statChanges: { mental: 5, social: 3, eq: 3 },
        personalityDelta: { connection: 3, empathy: 2, thriving: 2 },
        followUpText: '你以为自己只是路过，但你是一些人人生里的重要事件。',
      },
    ],
  },

  // ============================================================
  // 随机意外事件——无论家境如何都可能发生
  // ============================================================

  {
    id: 'romance_scam',
    ageRange: [18, 35],
    title: '一段奇怪的感情',
    description: '网上认识了一个人，聊了几个月，感觉特别懂你。然后他开口借钱，说是暂时周转，很快还。你已经有点喜欢上他了。',
    weight: 0.4,
    choices: [
      {
        id: 'send_money',
        text: '借了，你相信他',
        statChanges: { wealth: -20, mental: -8 },
        addTags: ['trauma_bond'],
        personalityDelta: { structuralAwareness: 1, authenticity: -1 },
        followUpText: '他消失了。那段时间你反复想：是不是我不够好？后来你才知道——他对每个人说的都是同一套话。这不是你的问题，这是一门生意。',
      },
      {
        id: 'sense_something_wrong',
        text: '感觉不对劲，停止联系，没给钱',
        requirement: { minStats: { intelligence: 60 } },
        statChanges: { mental: 2 },
        personalityDelta: { structuralAwareness: 2, resistance: 1 },
        followUpText: '你的直觉救了你。那种"感觉不对"是值得信任的信号。',
        lockedHint: '（需要：足够的判断力）',
      },
      {
        id: 'ask_friend',
        text: '把聊天记录给朋友看，她说"这是诈骗"',
        requirement: { hasTags: ['female_solidarity'] },
        statChanges: { mental: 3, social: 1 },
        personalityDelta: { connection: 2, structuralAwareness: 2 },
        followUpText: '你幸运地有一个愿意说真话的人。不是所有人都这么幸运。',
      },
    ],
  },

  {
    id: 'followed_at_night',
    ageRange: [16, 35],
    title: '那条路',
    description: '深夜，你一个人回家，发现身后有人跟着你，走快他也走快，已经跟了两个路口了。',
    weight: 0.5,
    choices: [
      {
        id: 'enter_shop',
        text: '走进最近的便利店，等了很久才离开',
        statChanges: { mental: -3, fitness: 1 },
        personalityDelta: { structuralAwareness: 2 },
        followUpText: '那晚你安全回家了。但你此后很多年，走夜路都会回头看。这种代价是真实存在的，它只是没有被计入任何统计数字。',
      },
      {
        id: 'call_someone',
        text: '打电话给朋友，大声说出自己的位置，一路说话走完',
        statChanges: { mental: -2, social: 2 },
        personalityDelta: { connection: 1, structuralAwareness: 1 },
        followUpText: '她陪你说话直到你进了家门。你们谁也没提这件事"有多严重"，因为你们都知道这有多正常。这才是最沉重的地方。',
      },
      {
        id: 'confront',
        text: '转过身，大声质问他在干什么',
        requirement: { minStats: { fitness: 55 } },
        statChanges: { mental: 2 },
        addTags: ['rebel_spirit'],
        personalityDelta: { resistance: 3, selfExpression: 2 },
        followUpText: '他走了。你不知道他会不会再来。但你的声音在那条路上是真实存在的，它没有颤抖。',
        lockedHint: '（需要：足够的体能支撑那一刻的勇气）',
      },
      {
        id: 'freeze',
        text: '僵住了，不知道该怎么做，一直走一直走',
        statChanges: { mental: -6 },
        addTags: ['male_gaze_trauma'],
        personalityDelta: { selfExpression: -1, structuralAwareness: 1 },
        followUpText: '你最后进了一个有灯光的地方，他不见了。事后你觉得自己太没用。但那叫"冻结反应"，是人在极度恐惧时最正常的生理反应。你没有做错任何事。',
      },
    ],
  },

  {
    id: 'financial_trap',
    ageRange: [22, 40],
    title: '一个"机会"',
    description: '有人介绍了一个"稳赚不赔的投资项目"，身边的朋友已经有人进了，说收益很好。你有一笔积蓄。',
    weight: 0.35,
    choices: [
      {
        id: 'invest_all',
        text: '投进去了，被说动了',
        statChanges: { wealth: -25, mental: -10 },
        personalityDelta: { structuralAwareness: 2, thriving: -2 },
        followUpText: '钱没了。那段时间你睡不着，反复想自己是不是太蠢了。但设计这个的人，专门研究过怎么让聪明人也相信它。这不是智商问题，是信息不对称的问题。',
      },
      {
        id: 'research_first',
        text: '查了很多资料，发现是庞氏骗局，没进',
        requirement: { minStats: { intelligence: 65 } },
        statChanges: { mental: 3 },
        personalityDelta: { structuralAwareness: 2, resistance: 1 },
        followUpText: '你没有被说服。那个"稳赚不赔"的感觉，恰恰是最大的警报。',
        lockedHint: '（需要：足够的判断力）',
      },
      {
        id: 'invest_small',
        text: '只投了一小部分"试试水"',
        statChanges: { wealth: -8, mental: -3 },
        personalityDelta: { structuralAwareness: 1 },
        followUpText: '损失不算太大。你后来想，那个"试试水"救了你，也让你记住了这个教训。',
      },
    ],
  },

  {
    id: 'postpartum_depression',
    ageRange: [27, 35],
    title: '生完孩子之后',
    description: '孩子出生了。你不知道为什么，你哭的次数比以前多很多，有时候对着孩子的脸，你感到一种说不清的恐惧和空洞。这不是你"应该有"的感受。',
    weight: 0.6,
    choices: [
      {
        id: 'hide_it',
        text: '没跟任何人说，觉得这是自己的问题，不是好妈妈',
        statChanges: { mental: -10, eq: -3 },
        addTags: ['good_girl_conditioning'],
        personalityDelta: { selfExpression: -2, thriving: -3, authenticity: -2 },
        followUpText: '你把那种感觉压下去了。它没有消失，它变成了别的东西——麻木，或者某种持续很久的疲惫。',
      },
      {
        id: 'tell_partner',
        text: '告诉了伴侣，他说"你是不是太矫情了"',
        statChanges: { mental: -7, social: -2 },
        addTags: ['trauma_bond'],
        personalityDelta: { selfExpression: -1, structuralAwareness: 2 },
        followUpText: '他的那句话，比那段抑郁本身，伤得更深更久。',
      },
      {
        id: 'seek_help',
        text: '去看了医生，被诊断为产后抑郁，开始治疗',
        statChanges: { mental: 5, eq: 3 },
        personalityDelta: { selfExpression: 2, structuralAwareness: 2, thriving: 2 },
        followUpText: '医生说这是病，不是性格问题，不是不爱孩子的证明。那句话，你哭了很久。',
      },
      {
        id: 'mother_helps',
        text: '妈妈来了，虽然她不懂，但她帮你抱着孩子，让你睡了一觉',
        statChanges: { mental: 4, social: 2 },
        personalityDelta: { connection: 2, thriving: 1 },
        followUpText: '有时候，被帮助不需要对方完全理解你。那觉睡完之后，世界没有改变，但你有了一点力气。',
      },
    ],
  },

  // ============================================================
  // 晚年觉醒事件链——触发"晚开的花"结局
  // ============================================================

  {
    id: 'late_marriage_moment',
    ageRange: [45, 55],
    title: '某一天，你停住了',
    description: '结婚二十多年了。他在沙发上看电视，你在厨房洗碗，窗外有人在放烟火。你突然想起来——你年轻时有一件很想做的事，你想不起来了，只记得有这件事。',
    weight: 0.6,
    choices: [
      {
        id: 'keep_washing',
        text: '碗洗完了，烟火也灭了，你继续过',
        statChanges: { mental: -4 },
        personalityDelta: { thriving: -1, selfExpression: -1 },
        followUpText: '你没有停下来。但那个问题留下来了，它会再问你的。',
      },
      {
        id: 'start_asking',
        text: '放下碗，站在窗口，开始认真想那件事是什么',
        statChanges: { mental: 3, intelligence: 2 },
        addTags: ['late_bloomer'],
        personalityDelta: { selfExpression: 3, authenticity: 3, structuralAwareness: 2 },
        followUpText: '你想起来了。那件事还在那里，等了你很多年。也许现在开始，还来得及。',
      },
      {
        id: 'write_it_down',
        text: '找了一张纸，开始写你这几十年没有说出口的话',
        statChanges: { mental: 5 },
        addTags: ['late_bloomer', 'creative_outlet'],
        personalityDelta: { selfExpression: 4, authenticity: 3, thriving: 2 },
        followUpText: '你写了整整三页。写完你意识到，你一直都有话说，只是没有地方说。',
      },
    ],
  },

  {
    id: 'late_leave_decision',
    ageRange: [48, 58],
    title: '离开，还是留下',
    description: '你有机会离开——也许是孩子大了，也许是你终于有了一点存款，也许是一个女性朋友告诉你她离婚后比以前快乐。你站在那个岔路口。',
    weight: 0.5,
    requirement: { hasTags: ['late_bloomer'] },
    choices: [
      {
        id: 'leave_finally',
        text: '离开。晚了二十年，但今天是最早的一天',
        statChanges: { mental: -3, wealth: -10, social: -3 },
        personalityDelta: { resistance: 4, selfExpression: 3, authenticity: 4, thriving: 3 },
        followUpText: '所有人说你疯了，说你这把年纪了，说孩子怎么看你。你说：我还有一半的人生。那一半，我想是自己的。',
      },
      {
        id: 'stay_but_change',
        text: '留下，但开始要求一些东西属于你自己',
        statChanges: { mental: 2, social: 1 },
        personalityDelta: { selfExpression: 2, resistance: 2, authenticity: 2 },
        followUpText: '你没有离开，但你不再是从前那个沉默的人了。改变可以从一句"不"开始。',
      },
      {
        id: 'not_yet',
        text: '还没准备好，再等等',
        statChanges: { mental: -2 },
        personalityDelta: { thriving: -1 },
        followUpText: '等待有时候是积蓄力量，有时候是让时间替你做决定。只有你知道这次是哪种。',
      },
    ],
  },

  {
    id: 'late_first_thing_for_self',
    ageRange: [50, 60],
    title: '第一次，为自己',
    description: '你报了一个课——陶艺，写作，游泳，或者学一门语言。不为孩子，不为工作，就是因为你想。',
    weight: 0.6,
    requirement: { hasTags: ['late_bloomer'] },
    choices: [
      {
        id: 'go_all_in',
        text: '去了，而且每周都去，这成了你一周里最快乐的两小时',
        statChanges: { mental: 8, social: 3 },
        addTags: ['creative_outlet'],
        personalityDelta: { authenticity: 3, selfExpression: 3, thriving: 4, connection: 2 },
        followUpText: '你在课堂上认识了几个也是第一次为自己的女人。你们在课后喝咖啡，聊到很晚。你发现，五十岁也可以有新的朋友，新的开始。',
      },
      {
        id: 'go_but_guilty',
        text: '去了，但觉得有点愧疚，觉得这个时间应该用来做"更有用的事"',
        statChanges: { mental: 3 },
        personalityDelta: { authenticity: 1, thriving: 1, selfExpression: 1 },
        followUpText: '那个愧疚是真实的，是几十年的训练的结果。但你还是去了。那个"还是去了"，比愧疚更重要。',
      },
    ],
  },

  // ============================================================
  // 更多负向与复杂处境
  // ============================================================

  {
    id: 'career_forced_quit',
    ageRange: [28, 38],
    title: '你被迫离职了',
    description: '生完孩子后，公司明里暗里让你待不下去——不给你重要项目，绩效突然变差，开始频繁让你"自愿"加班到深夜。你明白那是什么意思。',
    weight: 0.5,
    requirement: { hasTags: ['second_shift_burden'] },
    choices: [
      {
        id: 'quit_quietly',
        text: '辞了，没有声张',
        statChanges: { wealth: -12, mental: -6, intelligence: -3 },
        personalityDelta: { structuralAwareness: 2, thriving: -2, resistance: -1 },
        followUpText: '你离开了，悄悄的。那个位置很快被一个没有孩子的人填上了。没有人说这不公平，因为所有人都知道这很正常。',
      },
      {
        id: 'fight_back_legal',
        text: '去劳动仲裁，要求书面的离职原因',
        statChanges: { wealth: -5, mental: -3, social: -4 },
        addTags: ['glass_ceiling_seen', 'rebel_spirit'],
        personalityDelta: { resistance: 4, selfExpression: 3, structuralAwareness: 3 },
        followUpText: '没有赢，但你说出来了，写进了记录里。那些记录不会改变你的处境，但它证明了：这件事发生过。',
      },
      {
        id: 'start_own',
        text: '不等他们赶你，先自己出去单干',
        requirement: { minStats: { wealth: 40, intelligence: 60 } },
        statChanges: { wealth: -8, mental: -3 },
        addTags: ['economic_independence_drive', 'rebel_spirit'],
        personalityDelta: { resistance: 3, thriving: 2, authenticity: 2 },
        followUpText: '你没有等那个门关上，你先开了另一扇。代价是有的。但那扇门是你自己开的。',
        lockedHint: '（需要：有一定积蓄和判断力）',
      },
    ],
  },

  {
    id: 'aging_parent_care',
    ageRange: [36, 50],
    title: '爸妈老了',
    description: '爸妈开始需要照顾了。兄弟姐妹里，所有人默认地把这件事交给了你——因为你是女儿，或者因为你"看起来更有时间"。',
    weight: 0.6,
    choices: [
      {
        id: 'take_all',
        text: '接了，一个人扛',
        statChanges: { mental: -6, wealth: -8, fitness: -4, social: -3 },
        addTags: ['second_shift_burden'],
        personalityDelta: { thriving: -2, selfExpression: -1, connection: 1 },
        followUpText: '没有人说谢谢，因为大家觉得这本来就是你该做的。你有时候对着镜子，认不出自己。',
      },
      {
        id: 'negotiate_share',
        text: '要求兄弟姐妹分担，明确分工',
        statChanges: { mental: 2, social: -2 },
        personalityDelta: { resistance: 3, selfExpression: 3, structuralAwareness: 2 },
        followUpText: '他们说你计较、自私、不像个女儿。你说：我也是人。那个对话很艰难，但你说完之后，发现自己还在。',
      },
      {
        id: 'hire_help',
        text: '用自己的钱请了护工，把实际照护外包出去',
        requirement: { minStats: { wealth: 55 } },
        statChanges: { wealth: -12, mental: 3 },
        personalityDelta: { authenticity: 2, thriving: 1 },
        followUpText: '有人说你花钱买孝顺。你说：我在用我有的方式，尽我的力所能及。',
        lockedHint: '（需要：有足够的经济能力）',
      },
    ],
  },

  {
    id: 'depression_episode',
    ageRange: [22, 50],
    title: '某一段时间',
    description: '你有一段时间起不来床，什么都不想做，不知道为什么活着，又不是没有原因，又说不清楚原因。',
    weight: 0.4,
    requirement: { maxStats: { mental: 35 } },
    choices: [
      {
        id: 'push_through_alone',
        text: '一个人撑过去了，没跟人说',
        statChanges: { mental: -3, fitness: -3 },
        personalityDelta: { selfExpression: -2, thriving: -2 },
        followUpText: '你出来了。但你也把那段时间的自己关在了一个没人进得去的地方。',
      },
      {
        id: 'get_help',
        text: '去看了医生或心理咨询',
        statChanges: { mental: 7, eq: 4 },
        personalityDelta: { selfExpression: 2, thriving: 3, structuralAwareness: 2 },
        followUpText: '你终于有人告诉你：这不是你的错，这是病，它可以被治。那句话比任何药物先起效。',
      },
      {
        id: 'creative_outlet_helps',
        text: '开始写日记、画画，或者做任何能让感受有去处的事',
        statChanges: { mental: 4 },
        addTags: ['creative_outlet', 'high_sensitivity'],
        personalityDelta: { selfExpression: 3, authenticity: 2, thriving: 2 },
        followUpText: '你不是在解决它，你是在给它一个容器。有时候，这就够了。',
      },
    ],
  },

  {
    id: 'inheritance_inequality',
    ageRange: [30, 50],
    title: '遗产',
    description: '父母分配财产，房子和大部分资产给了儿子（你的兄弟），说"女儿嫁出去了，是别人家的人"。',
    weight: 0.4,
    requirement: { minStats: { wealth: 30 } },
    choices: [
      {
        id: 'accept_silently',
        text: '接受了，没有说话',
        statChanges: { wealth: -10, mental: -5 },
        addTags: ['good_girl_conditioning'],
        personalityDelta: { structuralAwareness: 2, resistance: -1, selfExpression: -1 },
        followUpText: '你说"没关系"，然后回了自己家。那两个字咽下去的时候，你知道它们是假的。',
      },
      {
        id: 'speak_up',
        text: '提出异议，说这不公平',
        statChanges: { mental: 2, social: -3, wealth: -5 },
        addTags: ['rebel_spirit'],
        personalityDelta: { selfExpression: 3, resistance: 3, structuralAwareness: 3 },
        followUpText: '家里沉默了很久。你说出来了，哪怕没有改变结果。说出来本身是一件事。',
      },
      {
        id: 'legal_action',
        text: '查了法律，知道你有权利主张应得的份额',
        requirement: { minStats: { intelligence: 60 } },
        statChanges: { wealth: 5, social: -5, mental: -2 },
        addTags: ['glass_ceiling_seen', 'economic_independence_drive'],
        personalityDelta: { resistance: 4, structuralAwareness: 3, selfExpression: 2 },
        followUpText: '家里说你贪心，说你不孝，说你为了钱不认亲。你说：这是我的权利。法律这样写的，不是我写的。',
        lockedHint: '（需要：足够的判断力去找到那个依据）',
      },
    ],
  },
];
