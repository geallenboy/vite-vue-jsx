import { defineComponent, reactive, watch } from 'vue';
import { BASE_URL } from '@/config';
import { menuType } from '@/interface/public';
import { RouterLink, useRoute } from 'vue-router';

const getOpenKeys = (data: menuType[]): string[] => {
  const oks: string[] = [];
  for (const key of data) {
    oks.push(key.id);
  }
  return oks;
};

export default defineComponent({
  name: 'Sider',
  setup() {
    const router = useRoute();
    const menuList = [
      {
        name: '首页',
        icon: 'home',
        url: `${BASE_URL}`,
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
            url: `${BASE_URL}result/success`
          },
          {
            name: '失败',
            icon: '',
            id: 'sub5-2',
            url: `${BASE_URL}result/error`
          },
          {
            name: 'page403',
            icon: '',
            id: 'sub5-3',
            url: `${BASE_URL}result/page403`
          },
          {
            name: 'page404',
            icon: '',
            id: 'sub5-4',
            url: `${BASE_URL}result/page404`
          },
          {
            name: 'page500',
            icon: '',
            id: 'sub5-5',
            url: `${BASE_URL}result/page500`
          }
        ]
      },
      {
        name: '关于',
        icon: 'FileOutlined',
        url: `${BASE_URL}about`,
        id: 'sub6'
      }
    ];
    const state = reactive({
      collapsed: false,
      selectedKeys: [router.path],
      openKeys: getOpenKeys(menuList)
    });
    watch(
      () => router.path,
      (_val) => {
        state.selectedKeys = [_val];
      }
    );

    return () => (
      <div>
        {menuList.map((k: menuType) => {
          if (k && k.children && k.children.length > 0) {
            return (
              <div key={k.id} title={k.name}>
                {k.children.map((k1: menuType) => {
                  if (k1 && k1.children && k1.children.length > 0) {
                    return (
                      <div key={k1.url}>
                        <RouterLink to={k1.url}>{k1.name}</RouterLink>
                      </div>
                    );
                  } else {
                    return (
                      <div key={k1.url}>
                        <RouterLink to={k1.url}>{k1.name}</RouterLink>
                      </div>
                    );
                  }
                })}
              </div>
            );
          } else {
            return (
              <div key={k.url}>
                <RouterLink to={k.url}>{k.name}</RouterLink>
              </div>
            );
          }
        })}
      </div>
    );
  }
});
