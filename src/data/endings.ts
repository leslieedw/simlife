import type { Ending } from '../types';

export const ENDINGS: Ending[] = [

  {
    id: 'bloomed_alone',
    title: '独自绽放',
    rarity: 'rare',
    description: '你没有按任何人期待的方式活着。你拒绝了那些为你设计的笼子，一个一个，有时候带着代价，有时候带着眼泪。你最终拥有的——不是最多的，但都是你自己选的。',
    flavor: '不嫁，不生，不将就。这不是遗憾，这是你的答案。',
    requirement: {
      hasTags: ['childless_by_choice'],
      personalityMin: { authenticity: 4, selfExpression: 3 },
      minStats: { mental: 60 },
    },
    culturalQuotes: [
      {
        text: '我必须是你近旁的一株木棉，作为树的形象和你站在一起。',
        attribution: '舒婷 · 《致橡树》',
        type: 'poem',
      },
      {
        text: '我将比任何男人更自由，因为我不需要去赢得任何人。',
        attribution: '西蒙·波伏娃 · 《第二性》',
        type: 'prose',
      },
      {
        text: '我要的那种爱，世界上也许根本没有，但我宁可没有，也不要将就的那种。',
        attribution: '亦舒 · 《我的前半生》',
        type: 'prose',
      },
      {
        text: '生命诚可贵，爱情价更高，若为自由故，两者皆可抛。',
        attribution: '裴多菲 · 《自由与爱情》（萧红最喜欢的诗之一）',
        type: 'poem',
      },
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
      personalityMin: { resistance: 3 },
      minStats: { mental: 45 },
    },
    culturalQuotes: [
      {
        text: '我一个人走了，不带一点留恋，不带一点犹豫，不带一点悲哀。',
        attribution: '萧红 · 《呼兰河传》',
        type: 'prose',
      },
      {
        text: '女人，你的名字不是弱者。',
        attribution: '改自莎士比亚，无数女性的自我宣言',
        type: 'prose',
      },
      {
        text: '伤口是光进来的地方。',
        attribution: '鲁米（Rumi）诗歌',
        type: 'poem',
      },
      {
        text: '泥泞中的莲，才是真正的莲。',
        attribution: '席慕蓉 · 诗集',
        type: 'poem',
      },
    ],
  },

  {
    id: 'quiet_wholeness',
    title: '平静而完整',
    rarity: 'common',
    description: '你的人生没有戏剧性的高峰，也没有跌入深渊。你爱过，被爱过，吵架过，和好过，失去过，得到过。你到最后，还是你自己。这不是"普通"，这是一种被低估的成就。',
    flavor: '她一生平静，但内心没有一处是荒的。',
    requirement: {
      minStats: { mental: 60, social: 50, eq: 50 },
    },
    culturalQuotes: [
      {
        text: '没有什么是完美的，但一些事情已经很好了。',
        attribution: '杨本芬 · 《秋园》',
        type: 'prose',
      },
      {
        text: '人间烟火气，最抚凡人心。',
        attribution: '古诗意境',
        type: 'poem',
      },
      {
        text: '愿你历经千帆，归来仍是少年。',
        attribution: '民谣歌词',
        type: 'lyric',
      },
      {
        text: '我的心里每天升起一个太阳。这不是借来的光。',
        attribution: '席慕蓉 · 散文',
        type: 'prose',
      },
    ],
  },

  {
    id: 'invisible_weight',
    title: '隐形的重量',
    rarity: 'common',
    description: '你是一个好妻子、好母亲、好女儿，也许还是好员工。你把每个人都照顾得很好。但在某个深夜，你坐在浴室的地板上，忽然不知道你自己是谁了。没有人的眼神告诉你这是一件值得记录的事。但它是。',
    flavor: '她从未休息，因为没有人告诉她，她也值得被照顾。',
    requirement: {
      hasTags: ['second_shift_burden', 'good_girl_conditioning'],
      maxStats: { mental: 50 },
    },
    culturalQuotes: [
      {
        text: '女人啊，你创造了世界，世界却从未属于你。',
        attribution: '改自波伏娃，女性主义常引用',
        type: 'prose',
      },
      {
        text: '她什么都做了，唯独没做她自己。',
        attribution: '亦舒风格',
        type: 'prose',
      },
      {
        text: '我生来就是高山而非溪流，我欲于群峰之巅俯视平庸的沟壑，而不是去湿润土地，给养花草。',
        attribution: '张桂梅（致女生的话）',
        type: 'prose',
      },
      {
        text: '你爱我时，我已忘了我是谁。',
        attribution: '陈绮贞 · 《旅行的意义》改写',
        type: 'lyric',
      },
    ],
  },

  {
    id: 'dark_dawn',
    title: '深渊与黎明',
    rarity: 'hidden',
    description: '你走进过那个最暗的地方。也许是一段让你消失的关系，也许是一个让你相信自己一文不值的人，也许是你自己在某个时刻放弃了自己。这个结局不是终点。它只是记录：你曾经在那里，在最深处，还活着。',
    flavor: '她在最深处，也没有熄灭。这已经是奇迹。',
    requirement: {
      hasTags: ['trauma_bond'],
      maxStats: { mental: 30, social: 25 },
    },
    culturalQuotes: [
      {
        text: '生活是一袭华美的袍，爬满了蚤子。',
        attribution: '张爱玲',
        type: 'prose',
      },
      {
        text: '在我的后花园，可以开两株，一株是哀愁，一株是寂寞。',
        attribution: '萧红 · 《呼兰河传》',
        type: 'prose',
      },
      {
        text: '也许，黑暗里也有一些事情，是只有在黑暗里才能看见的。',
        attribution: '玛格丽特·杜拉斯 · 《情人》意境',
        type: 'prose',
      },
      {
        text: '我不知道前面是不是天亮，但我知道我在走。',
        attribution: '张惠妹 · 《我不难过》歌意',
        type: 'lyric',
      },
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
      personalityMin: { selfExpression: 4, thriving: 3 },
    },
    culturalQuotes: [
      {
        text: '你要记得，那些黑暗中独自跋涉的日子，不是失败，那叫积累。',
        attribution: '三毛 · 散文',
        type: 'prose',
      },
      {
        text: '有些花，就是要等很久才开，但它的颜色，是等来的。',
        attribution: '席慕蓉 · 《一棵开花的树》意境',
        type: 'poem',
      },
      {
        text: '我总算学会了如何去爱，可惜你早已远去，消失在人海。',
        attribution: '王菲 · 《容易受伤的女人》',
        type: 'lyric',
      },
    ],
  },

  {
    id: 'escaped_and_free',
    title: '逃出去了',
    rarity: 'uncommon',
    description: '你离开了那个让你变小的地方——一座城，一段关系，一种期待。走的时候你什么都没有，但你有自己。后来你有了更多。不是全部，但是真的。',
    flavor: '她放下了那些不属于她的，才腾出手来，拿自己的。',
    requirement: {
      hasTags: ['rebel_spirit', 'economic_independence_drive'],
      personalityMin: { resistance: 4, authenticity: 3 },
    },
    culturalQuotes: [
      {
        text: '我不管多少人说不行，我要去，我要自己去，我要走到另一个地方去，去看看。',
        attribution: '三毛 · 《撒哈拉的故事》',
        type: 'prose',
      },
      {
        text: '走吧，走吧，人总要学着自己长大。',
        attribution: '王菲 · 《走吧》',
        type: 'lyric',
      },
      {
        text: '我是天空里的一片云，偶尔投影在你的波心。',
        attribution: '徐志摩 · 《偶然》（以另一种方式理解——来去自由）',
        type: 'poem',
      },
      {
        text: '人生最重要的，是你自己如何定义它。',
        attribution: '萧红·《生死场》精神',
        type: 'prose',
      },
    ],
  },

  {
    id: 'ordinary_passage',
    title: '人间走过一遭',
    rarity: 'common',
    description: '你来了，你爱了，你挣扎了，你也有过快乐。没有一段人生是白过的，哪怕你自己有时候这样觉得。你的故事，只有你知道它的全部重量。',
    flavor: '普通不是失败。大多数人的一生，就是这样，就已经很多了。',
    requirement: {},
    culturalQuotes: [
      {
        text: '我们都是赶路人，只是走了不同的路。',
        attribution: '杨本芬 · 《秋园》精神',
        type: 'prose',
      },
      {
        text: '你看流年似水，把你我的轮廓都带走了。',
        attribution: '陈绮贞 · 《流年》',
        type: 'lyric',
      },
      {
        text: '人间值得。',
        attribution: '河合隼雄 · 《人间值得》',
        type: 'prose',
      },
      {
        text: '所有的结局都已写好，所有的泪水都已启程，却忘了给你一个吻，让你从此不再想起。',
        attribution: '席慕蓉 · 《一棵开花的树》',
        type: 'poem',
      },
    ],
  },
];
