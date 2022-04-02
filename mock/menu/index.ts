import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../_util';

const menuList = [
  {
    name: '首页',
    icon: 'home',
    url: '/',
    id: 'sub1'
  },
  {
    name: '结果页',
    icon: 'icon',
    url: '',
    id: 'sub5',
    children: [
      {
        name: '成功',
        icon: '',
        id: 'sub5-1',
        url: '/result/success'
      },
      {
        name: '失败',
        icon: '',
        id: 'sub5-2',
        url: '/result/error'
      },
      {
        name: 'page403',
        icon: '',
        id: 'sub5-3',
        url: '/result/page403'
      },
      {
        name: 'page404',
        icon: '',
        id: 'sub5-4',
        url: '/result/page404'
      },
      {
        name: 'page500',
        icon: '',
        id: 'sub5-5',
        url: '/result/page500'
      }
    ]
  },
  {
    name: '关于',
    icon: 'FileOutlined',
    url: '/about',
    id: 'sub6'
  }
];

export default [
  {
    url: '/mock-api/menu/list',
    timeout: 1000,
    method: 'get',
    response: () => resultSuccess(menuList)
  }
] as MockMethod[];
