import type { Ending } from '../types';

export const ENDINGS: Ending[] = [
  {
    id: 'successful_entrepreneur',
    title: '白手起家',
    description: '你从一无所有，靠自己的双手建立起了一番事业。',
    flavor: '财富不是终点，但它证明了你曾经拼命过。',
    rarity: 'uncommon',
    requirement: {
      hasTags: ['ambitious'],
      minStats: { wealth: 75, intelligence: 60 },
    },
  },
  {
    id: 'addiction_ruin',
    title: '深渊',
    description: '你在最好的年华，选择了一条走向黑暗的路。',
    flavor: '有些选择，做了就回不了头。',
    rarity: 'hidden',
    requirement: {
      hasTags: ['addiction_risk'],
    },
  },
  {
    id: 'quiet_happiness',
    title: '平凡而圆满',
    description: '没有大风大浪，你过完了踏实的一生。',
    flavor: '所谓幸福，不过是睡得着、吃得下、有人爱。',
    rarity: 'common',
    requirement: {
      minStats: { mental: 60, social: 50 },
    },
  },
  {
    id: 'creative_legacy',
    title: '留下了一些东西',
    description: '你用作品说话，留下了一些会被人记住的东西。',
    flavor: '你不一定出名，但有人因为你的作品哭过、笑过、感到不孤独。',
    rarity: 'uncommon',
    requirement: {
      hasTags: ['creative_soul'],
      minStats: { mental: 55 },
    },
  },
  {
    id: 'broken_life',
    title: '一地碎片',
    description: '太多次的错误选择、太多次被生活压垮，你没能拼起那些碎片。',
    flavor: '也许下辈子，能好一点。',
    rarity: 'common',
    requirement: {
      maxStats: { mental: 25, social: 20 },
    },
  },
  {
    id: 'ordinary_life',
    title: '人间过客',
    description: '你来过，爱过，挣扎过，然后离去。',
    flavor: '大多数人的一生，都是这样的。这没有什么不好。',
    rarity: 'common',
    requirement: {},
  },
];
