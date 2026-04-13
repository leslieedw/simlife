import type { Ending } from '../types';

export const ENDINGS: Ending[] = [

  // ============================================================
  // 稀有/隐藏结局（条件严格，先检查）
  // ============================================================

  {
    id: 'phoenix_rising',
    title: '浴火重生',
    rarity: 'rare',
    description: '你经历了最坏的事情——那些让别人光是听说都会沉默的事。你被打碎过，不止一次。但你做了一件很多人做不到的事：你从废墟里爬起来了，然后你用那些碎片重新拼了一个自己。这个新的自己，不完美，有裂痕，但比从前更真实，更强壮，更不愿意被任何人定义。',
    flavor: '她在灰烬里站了起来。不是因为她不痛，是因为她决定不再让痛定义她。',
    requirement: {
      hasTags: ['survived_violence'],
      personalityMin: { resistance: 3, thriving: 2 },
    },
    culturalQuotes: [
      { text: '我从地狱来，到天堂去，正路过人间。', attribution: '改自萧红 · 精神', type: 'prose' },
      { text: '那些杀不死你的，会让你变成一个他们无法想象的存在。', attribution: '改自尼采，女性幸存者的宣言', type: 'prose' },
      { text: '她走过最深的夜，所以她认得出哪些光是真的。', attribution: '玛雅·安杰卢 · 精神', type: 'prose' },
      { text: '我不是被修复的，我是被重建的。用的是我自己的手。', attribution: '奥德丽·洛德 · 精神', type: 'prose' },
    ],
  },

  {
    id: 'bloomed_alone',
    title: '独自绽放',
    rarity: 'rare',
    description: '你没有按任何人期待的方式活着。你拒绝了那些为你设计的笼子，一个一个，有时候带着代价，有时候带着眼泪。你最终拥有的——不是最多的，但都是你自己选的。',
    flavor: '不嫁，不生，不将就。这不是遗憾，这是你的答案。',
    requirement: {
      hasTags: ['childless_by_choice', 'never_married'],
      personalityMin: { authenticity: 3, selfExpression: 2 },
    },
    culturalQuotes: [
      { text: '我必须是你近旁的一株木棉，作为树的形象和你站在一起。', attribution: '舒婷 · 《致橡树》', type: 'poem' },
      { text: '我将比任何男人更自由，因为我不需要去赢得任何人。', attribution: '西蒙·波伏娃 · 《第二性》', type: 'prose' },
      { text: '我要的那种爱，世界上也许根本没有，但我宁可没有，也不要将就的那种。', attribution: '亦舒 · 《我的前半生》', type: 'prose' },
      { text: '生命诚可贵，爱情价更高，若为自由故，两者皆可抛。', attribution: '裴多菲 · 《自由与爱情》', type: 'poem' },
    ],
  },

  {
    id: 'built_something_real',
    title: '她留下了什么',
    rarity: 'rare',
    description: '你没有走那条最安全的路，但你走完了你选择的那一条。你做过的事留下了——也许是你写的东西，你建立的项目，你带过的人，你种下的那棵树。不一定有人记住你的名字，但那些痕迹是真实的。',
    flavor: '功名是别人给的，痕迹是自己留的。',
    requirement: {
      hasTags: ['entrepreneur'],
      personalityMin: { thriving: 2 },
      minStats: { intelligence: 55 },
    },
    culturalQuotes: [
      { text: '如果你的梦想够大，它就会有自己的引力。', attribution: '三毛 · 《梦里花落知多少》', type: 'prose' },
      { text: '最勇敢的事，还是独立思考，而且说出来。', attribution: '可可·香奈儿', type: 'prose' },
      { text: '我不要做历史的旁观者，我要做历史的书写者。', attribution: '西蒙·波伏娃 · 精神', type: 'prose' },
      { text: '你种下的，比你想的更深，比你看见的更广。', attribution: '奥德丽·洛德 · 精神', type: 'prose' },
    ],
  },

  {
    id: 'dark_dawn',
    title: '深渊与黎明',
    rarity: 'hidden',
    description: '你走进过那个最暗的地方。也许是一段让你消失的关系，也许是一个让你相信自己一文不值的人，也许是你自己在某个时刻放弃了自己。这个结局不是终点。它只是记录：你曾经在那里，在最深处，还活着。',
    flavor: '她在最深处，也没有熄灭。这已经是奇迹。',
    requirement: {
      hasTags: ['trauma_bond', 'addiction'],
      maxStats: { inner: 20 },
    },
    culturalQuotes: [
      { text: '生活是一袭华美的袍，爬满了蚤子。', attribution: '张爱玲', type: 'prose' },
      { text: '在我的后花园，可以开两株，一株是哀愁，一株是寂寞。', attribution: '萧红 · 《呼兰河传》', type: 'prose' },
      { text: '也许，黑暗里也有一些事情，是只有在黑暗里才能看见的。', attribution: '玛格丽特·杜拉斯 · 《情人》意境', type: 'prose' },
      { text: '我不知道前面是不是天亮，但我知道我在走。', attribution: '张惠妹 · 《我不难过》歌意', type: 'lyric' },
    ],
  },

  // ============================================================
  // 特殊结局（需要特定组合）
  // ============================================================

  {
    id: 'hollow_success',
    title: '千疮百孔的成功者',
    rarity: 'uncommon',
    description: '你在所有人眼里都很成功——好工作、好房子、也许还有好家庭。朋友圈里的照片永远精致。但你知道那些光鲜底下是什么。你每天戴着一张完美的面具，但面具后面的人快要不存在了。',
    flavor: '她赢了所有人定义的游戏，唯独输了自己。',
    requirement: {
      minStats: { worldly: 55, wealth: 40 },
      maxStats: { inner: 35 },
    },
    culturalQuotes: [
      { text: '生活是一袭华美的袍，爬满了蚤子。', attribution: '张爱玲', type: 'prose' },
      { text: '我什么都有了。除了我自己。', attribution: '亦舒 · 《我的前半生》精神', type: 'prose' },
      { text: '成功不是终点，它是另一个笼子——只不过笼子是镀金的。', attribution: '弗吉尼亚·伍尔夫 · 精神', type: 'prose' },
      { text: '你看我光鲜亮丽，看不到我夜里独自崩溃的样子。', attribution: '陈绮贞 · 歌意', type: 'lyric' },
    ],
  },

  {
    id: 'genius_unfulfilled',
    title: '被浪费的天才',
    rarity: 'uncommon',
    description: '你是最聪明的那个人——在每一间教室里、每一个会议室里、每一段对话里。但这个世界从来没有给过你应得的舞台。不是因为你不够好，是因为你是女的、因为你穷、因为你没有"关系"。',
    flavor: '世界亏欠她一个舞台。她亏欠自己一声叹息。',
    requirement: {
      minStats: { intelligence: 70 },
      maxStats: { wealth: 30 },
    },
    culturalQuotes: [
      { text: '我生来就是高山而非溪流，我欲于群峰之巅俯视平庸的沟壑。', attribution: '张桂梅', type: 'prose' },
      { text: '如果莎士比亚有一个妹妹，同样才华横溢——她会怎样？', attribution: '弗吉尼亚·伍尔夫 · 《一间自己的房间》', type: 'prose' },
      { text: '她的才华是一把刀，但没有人给她一块可以雕刻的石头。', attribution: '萧红 · 精神', type: 'prose' },
      { text: '天才是不分性别的，但机会分。', attribution: '西蒙·波伏娃 · 《第二性》精神', type: 'prose' },
    ],
  },

  {
    id: 'survived_and_grew',
    title: '裂缝里长出来的',
    rarity: 'uncommon',
    description: '你经历过的，比大多数人多，也比大多数人重。你倒下过，不止一次。但你每次都重新站起来了，姿势也许不好看，但是站着的。你身上的那些裂缝，现在长着光。',
    flavor: '她活下来了。这件事本身，就已经是答案了。',
    requirement: {
      hasTags: ['survived_violence'],
      personalityMin: { resistance: 2 },
    },
    culturalQuotes: [
      { text: '我一个人走了，不带一点留恋，不带一点犹豫，不带一点悲哀。', attribution: '萧红 · 《呼兰河传》', type: 'prose' },
      { text: '女人，你的名字不是弱者。', attribution: '改自莎士比亚，无数女性的自我宣言', type: 'prose' },
      { text: '伤口是光进来的地方。', attribution: '鲁米（Rumi）诗歌', type: 'poem' },
      { text: '泥泞中的莲，才是真正的莲。', attribution: '席慕蓉 · 诗集', type: 'poem' },
    ],
  },

  {
    id: 'late_bloomer_ending',
    title: '晚开的花',
    rarity: 'uncommon',
    description: '你花了很长时间才找到自己的声音。有人说你太晚了，你说无所谓。你四十岁的绽放，比许多人二十岁的要真实得多，因为你知道那是从什么里长出来的。',
    flavor: '她来得晚，但她来了，而且是全部的自己。',
    requirement: {
      hasTags: ['late_bloomer'],
      personalityMin: { selfExpression: 3, thriving: 2 },
    },
    culturalQuotes: [
      { text: '你要记得，那些黑暗中独自跋涉的日子，不是失败，那叫积累。', attribution: '三毛 · 散文', type: 'prose' },
      { text: '有些花，就是要等很久才开，但它的颜色，是等来的。', attribution: '席慕蓉 · 《一棵开花的树》意境', type: 'poem' },
      { text: '我总算学会了如何去爱，可惜你早已远去，消失在人海。', attribution: '王菲 · 《容易受伤的女人》', type: 'lyric' },
    ],
  },

  {
    id: 'quiet_rebel',
    title: '温柔的反叛者',
    rarity: 'uncommon',
    description: '你没有烧掉任何东西，没有举过标语。但你身边的人都知道——你在的地方，规则会慢慢地、安静地、不可逆转地改变。你用一种不让人防备的方式，松动了那些绑住所有人的绳子。',
    flavor: '她没有推翻什么，但她改变了所有人呼吸的方式。',
    requirement: {
      personalityMin: { authenticity: 3, connection: 3 },
      minStats: { social: 55 },
      hasTags: ['female_solidarity'],
    },
    culturalQuotes: [
      { text: '真正的强大，是温柔。因为温柔意味着你不需要用力。', attribution: '三毛 · 散文精神', type: 'prose' },
      { text: '革命不一定是暴风，有时候它是一棵树的根，慢慢地撑裂了水泥。', attribution: '奥德丽·洛德 · 精神', type: 'prose' },
      { text: '我来了，我看见了，我安静地改变了一切。', attribution: '改自凯撒名言，女性主义改写', type: 'prose' },
      { text: '最深的水，流得最安静。', attribution: '中国谚语', type: 'poem' },
    ],
  },

  {
    id: 'escaped_and_free',
    title: '逃出去了',
    rarity: 'uncommon',
    description: '你离开了那个让你变小的地方——一座城，一段关系，一种期待。走的时候你什么都没有，但你有自己。后来你有了更多。不是全部，但是真的。',
    flavor: '她放下了那些不属于她的，才腾出手来，拿自己的。',
    requirement: {
      hasTags: ['rebel_spirit', 'economic_independence_drive', 'abroad_experience'],
      personalityMin: { resistance: 5, authenticity: 4 },
    },
    culturalQuotes: [
      { text: '我不管多少人说不行，我要去，我要自己去，我要走到另一个地方去，去看看。', attribution: '三毛 · 《撒哈拉的故事》', type: 'prose' },
      { text: '走吧，走吧，人总要学着自己长大。', attribution: '王菲 · 《走吧》', type: 'lyric' },
      { text: '我是天空里的一片云，偶尔投影在你的波心。', attribution: '徐志摩 · 《偶然》', type: 'poem' },
      { text: '人生最重要的，是你自己如何定义它。', attribution: '萧红·《生死场》精神', type: 'prose' },
    ],
  },

  {
    id: 'made_peace_with_it',
    title: '与自己和解',
    rarity: 'uncommon',
    description: '你做过一些你现在也不确定对不对的选择。你有一些遗憾，偶尔还会在夜里翻出来想。但是你不再恨自己了。你开始理解：在那个时候，那个选择已经是你能做到最好的了。',
    flavor: '和解不是遗忘。是承认那些都是真的，然后，继续活。',
    requirement: {
      personalityMin: { structuralAwareness: 2, authenticity: 2 },
      minStats: { social: 45 },
    },
    culturalQuotes: [
      { text: '也许所有人都是这样，先在心里的某处住下，然后才在真实的地方找到家。', attribution: '杨本芬 · 《我本芬芳》', type: 'prose' },
      { text: '原谅自己，是一件比原谅别人更难的事。但它值得。', attribution: '席慕蓉 · 散文', type: 'prose' },
      { text: '人生不是用来后悔的，是用来理解的。', attribution: '弗吉尼亚·伍尔夫 · 精神', type: 'prose' },
      { text: '走了那么远，你终于回到了自己这里。', attribution: '三毛 · 《滚滚红尘》', type: 'lyric' },
    ],
  },

  // ============================================================
  // 常见结局（条件宽松）
  // ============================================================

  {
    id: 'quiet_wholeness',
    title: '平静而完整',
    rarity: 'common',
    description: '你的人生没有戏剧性的高峰，也没有跌入深渊。你爱过，被爱过，吵架过，和好过，失去过，得到过。你到最后，还是你自己。这不是"普通"，这是一种被低估的成就。',
    flavor: '她一生平静，但内心没有一处是荒的。',
    requirement: {
      minStats: { inner: 45, social: 35 },
    },
    culturalQuotes: [
      { text: '没有什么是完美的，但一些事情已经很好了。', attribution: '杨本芬 · 《秋园》', type: 'prose' },
      { text: '人间烟火气，最抚凡人心。', attribution: '古诗意境', type: 'poem' },
      { text: '愿你历经千帆，归来仍是少年。', attribution: '民谣歌词', type: 'lyric' },
      { text: '我的心里每天升起一个太阳。这不是借来的光。', attribution: '席慕蓉 · 散文', type: 'prose' },
    ],
  },

  {
    id: 'invisible_weight',
    title: '隐形的重量',
    rarity: 'common',
    description: '你是一个好妻子、好母亲、好女儿，也许还是好员工。你把每个人都照顾得很好。但在某个深夜，你坐在浴室的地板上，忽然不知道你自己是谁了。',
    flavor: '她从未休息，因为没有人告诉她，她也值得被照顾。',
    requirement: {
      hasTags: ['second_shift_burden'],
      minStats: { worldly: 35 },
      maxStats: { inner: 45 },
    },
    culturalQuotes: [
      { text: '女人啊，你创造了世界，世界却从未属于你。', attribution: '改自波伏娃，女性主义常引用', type: 'prose' },
      { text: '她什么都做了，唯独没做她自己。', attribution: '亦舒风格', type: 'prose' },
      { text: '我生来就是高山而非溪流。', attribution: '张桂梅', type: 'prose' },
      { text: '你爱我时，我已忘了我是谁。', attribution: '陈绮贞 · 《旅行的意义》改写', type: 'lyric' },
    ],
  },

  {
    id: 'trapped_in_marriage',
    title: '那个笼子叫做家',
    rarity: 'common',
    description: '你留在了那段婚姻里。不是因为幸福，是因为出不去——钱不够，孩子太小，或者你已经不记得自己离开了能做什么。',
    flavor: '困住她的，不只是那扇门。',
    requirement: {
      hasTags: ['married', 'trauma_bond'],
      maxStats: { wealth: 40 },
    },
    culturalQuotes: [
      { text: '她的人生是一座房子，每一扇窗都有人守着。', attribution: '萧红 · 《生死场》意境', type: 'prose' },
      { text: '笼子是用来关鸟的，但有时候，鸟自己也不知道门是开着的。', attribution: '西蒙·波伏娃 · 《第二性》精神', type: 'prose' },
      { text: '我把岁月都给了你，你把你的沉默给了我。', attribution: '张爱玲风格', type: 'prose' },
      { text: '熟悉的地方没有风景，熟悉的人没有爱情，熟悉的我没有自己。', attribution: '陈绮贞 · 歌意', type: 'lyric' },
    ],
  },

  {
    id: 'lived_for_others',
    title: '她的一生都给了别人',
    rarity: 'common',
    description: '你是一个好女儿、好妻子、好母亲。你把每一个人照顾得很好。到最后，你自己的名字，几乎只在别人需要你的时候被人叫起。',
    flavor: '她不是不存在，她只是被用完了。',
    requirement: {
      hasTags: ['good_girl_conditioning', 'has_children'],
      personalityMin: { connection: 1 },
      maxStats: { inner: 40 },
    },
    culturalQuotes: [
      { text: '世界是一个舞台，女人是道具，男人是演员，观众是整个社会。', attribution: '改自波伏娃，女性主义表述', type: 'prose' },
      { text: '我生来就是为了消耗自己，让别人活得舒服一点。', attribution: '杨本芬 · 《秋园》精神', type: 'prose' },
      { text: '爱人啊，你总是说你很累，但你从来不问我累不累。', attribution: '亦舒风格', type: 'prose' },
      { text: '她是每个人的港湾，却不是自己的家。', attribution: '民谣意境', type: 'lyric' },
    ],
  },

  {
    id: 'economic_prisoner',
    title: '那把锁叫做"没钱"',
    rarity: 'common',
    description: '你不是没想过改变。但是钱不够。每次你快要有足够的底气，就会有另一件事把它耗掉。经济依赖是一种看不见的锁。',
    flavor: '穷不是罪，但这个社会让穷的女性付出了最高的代价。',
    requirement: {
      maxStats: { wealth: 20 },
    },
    culturalQuotes: [
      { text: '我要很多很多的爱，如果没有爱，那就很多很多的钱。如果两件都没有，我就什么也不是了。', attribution: '亦舒 · 《喜宝》改写', type: 'prose' },
      { text: '贫穷是一种暴力，只不过没有人坐牢。', attribution: '改自女性主义经济学思想', type: 'prose' },
      { text: '女人没有经济独立，一切自由都是别人施舍的。', attribution: '西蒙·波伏娃 · 《第二性》', type: 'prose' },
      { text: '我知道那扇门在哪里，但我没有钥匙。', attribution: '萧红风格', type: 'prose' },
    ],
  },

  {
    id: 'broken_and_lost',
    title: '她碎掉了',
    rarity: 'uncommon',
    description: '那些事情叠在一起——经济、关系、健康、孤立——每一件单独发生也许都能撑过去，但是一起来，她撑不住了。这个结局不评判她。它只是说：她承受了太多。',
    flavor: '压垮她的，不是最后那根稻草，是那一整座山。',
    requirement: {
      maxStats: { inner: 20 },
      hasTags: ['addiction'],
    },
    culturalQuotes: [
      { text: '有些人的眼泪，从来不让别人看见，因为没有人告诉她，她可以软下来。', attribution: '萧红 · 精神', type: 'prose' },
      { text: '这个世界不欠你温柔，但你欠自己。', attribution: '三毛 · 散文意境', type: 'prose' },
      { text: '就算全世界都不相信你，你也要相信自己。——虽然她最终没能做到这件事。', attribution: '致那些没能撑下来的人', type: 'prose' },
      { text: '黑暗中，我试图找到一盏灯，却忘了，我自己也可以发光。', attribution: '玛格丽特·杜拉斯 · 意境', type: 'prose' },
    ],
  },

  // ============================================================
  // 兜底结局（永远最后检查）
  // ============================================================

  {
    id: 'ordinary_passage',
    title: '人间走过一遭',
    rarity: 'common',
    description: '你来了，你爱了，你挣扎了，你也有过快乐。没有一段人生是白过的，哪怕你自己有时候这样觉得。你的故事，只有你知道它的全部重量。',
    flavor: '普通不是失败。大多数人的一生，就是这样，就已经很多了。',
    requirement: {},
    culturalQuotes: [
      { text: '我们都是赶路人，只是走了不同的路。', attribution: '杨本芬 · 《秋园》精神', type: 'prose' },
      { text: '你看流年似水，把你我的轮廓都带走了。', attribution: '陈绮贞 · 《流年》', type: 'lyric' },
      { text: '人间值得。', attribution: '河合隼雄 · 《人间值得》', type: 'prose' },
      { text: '所有的结局都已写好，所有的泪水都已启程，却忘了给你一个吻，让你从此不再想起。', attribution: '席慕蓉 · 《一棵开花的树》', type: 'poem' },
    ],
  },
];
