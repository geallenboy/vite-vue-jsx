import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../_util';

const cardtab = [
  {
    title: '总销售额',
    titleNumber: 123456,
    tbNumber: 0.012,
    rtbNumber: 0.011,
    rxse: 879561,
  },
  {
    title: '访问量',
    titleNumber: 889922,
    tbNumber: 0.032,
    rtbNumber: 0.061,
    rxse: 126782,
  },
  {
    title: '支付金额',
    titleNumber: 55544332,
    tbNumber: 0.032,
    rtbNumber: 0.081,
    rxse: 9933223,
  },
  {
    title: '活动费用',
    titleNumber: 457456,
    tbNumber: 0.062,
    rtbNumber: 0.031,
    rxse: 2578,
  },
];

export default [
  {
    url: '/mock-api/home/cardtab',
    timeout: 1000,
    method: 'get',
    response: () => resultSuccess(cardtab),
  },
] as MockMethod[];
