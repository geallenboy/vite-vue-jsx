import { defineComponent, reactive, watch } from 'vue';
import { Layout, Menu } from 'ant-design-vue';
import {
  StarOutlined,
  HomeOutlined,
  ShopOutlined,
  ClearOutlined,
  DotChartOutlined,
} from '@ant-design/icons-vue';
import { menuData, menuType } from '@/config/menu';
import { RouterLink, useRoute } from 'vue-router';

const { Sider } = Layout;
const { SubMenu } = Menu;

const getOpenKeys = (data: menuType[]): string[] => {
  const oks: string[] = [];
  for (const key of data) {
    oks.push(key.id);
  }
  return oks;
};

export default defineComponent({
  name: 'Siderbar',
  setup() {
    const router = useRoute();
    const state = reactive({
      collapsed: false,
      selectedKeys: [router.path],
      openKeys: getOpenKeys(menuData),
    });
    watch(
      () => router.path,
      (_val) => {
        state.selectedKeys = [_val];
      },
    );
    const onCollapse = () => {
      state.collapsed = !state.collapsed;
    };
    const iconNode = (data: menuType) => {
      if (data.id === 'sub2') {
        return <DotChartOutlined />;
      } else if (data.id === 'sub3') {
        return <ClearOutlined />;
      } else if (data.id === 'sub4') {
        return <ShopOutlined />;
      }
      return <StarOutlined />;
    };
    return {
      state,
      iconNode,
      onCollapse,
    };
  },
  render() {
    const { state, onCollapse, iconNode } = this;

    return (
      <Sider collapsible collapsed={state.collapsed} onCollapse={onCollapse} theme="light">
        <Menu
          mode="inline"
          theme="light"
          selectedKeys={state.selectedKeys}
          openKeys={state.openKeys}
        >
          {menuData.map((k: menuType) => {
            if (k && k.children && k.children.length > 0) {
              return (
                <SubMenu key={k.id} icon={iconNode(k)} title={k.name}>
                  {k.children.map((k1: menuType) => {
                    if (k1 && k1.children && k1.children.length > 0) {
                      return (
                        <Menu.Item key={k1.url}>
                          <RouterLink to={k1.url}>{k1.name}</RouterLink>
                        </Menu.Item>
                      );
                    } else {
                      return (
                        <Menu.Item key={k1.url}>
                          <RouterLink to={k1.url}>{k1.name}</RouterLink>
                        </Menu.Item>
                      );
                    }
                  })}
                </SubMenu>
              );
            } else {
              return (
                <Menu.Item icon={<HomeOutlined />} key={k.id}>
                  <RouterLink to={k.url}>{k.name}</RouterLink>
                </Menu.Item>
              );
            }
          })}
        </Menu>
      </Sider>
    );
  },
});
