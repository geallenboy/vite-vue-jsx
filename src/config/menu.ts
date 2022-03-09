export interface itemType {
  name: string;
  icon: string;
  url: string;
  id: string;
}

export interface menuType {
  name: string;
  icon: string;
  url: string;
  id: string;
  children?: itemType[];
}

export const menuData: menuType[] = [
  {
    name: '首页',
    icon: 'DesktopOutlined',
    url: '/home',
    id: 'sub1',
  },
  {
    name: 'pinia',
    icon: 'PieChartOutlined',
    url: '',
    id: 'sub2',
    children: [
      {
        name: 'todo',
        icon: '',
        id: 'sub2-1',
        url: '/pinia/todo',
      },
      {
        name: 'pinia2',
        icon: '',
        id: 'sub2-2',
        url: '/pinia/pinia2',
      },
    ],
  },
  {
    name: '关于',
    icon: 'FileOutlined',
    url: '',
    id: 'sub3',
    children: [
      {
        name: 'about1',
        icon: '',
        id: 'sub3-1',
        url: '/about/about1',
      },
      {
        name: 'about2',
        icon: '',
        id: 'sub3-2',
        url: '/about/about2',
      },
    ],
  },
];
