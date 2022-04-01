import { defineComponent, onMounted, reactive } from 'vue';
import { Layout } from 'ant-design-vue';
import { RouterView } from 'vue-router';
import HeaderPage from '@/layout/header';
import SiderPage from '@/layout/sider';
import FooterPage from '@/layout/footer';
import FullLoading from '@/components/loading/FullLoading';
import { usePublicStore } from '@/store/modules/public';
import { initState } from '@/config/index';
import './style.less';
const { Content } = Layout;

export default defineComponent({
  setup() {
    const userState = reactive({
      list: initState,
    });
    const menuState = reactive({
      list: initState,
    });
    const publicStore = usePublicStore();

    onMounted(async () => {
      const userinfo = await publicStore.userInfoAxios();
      const menuList = await publicStore.menuListAxios();
      userState.list = userinfo;
      menuState.list = menuList;
    });
    return () => (
      <>
        {userState.list.code === 200 && menuState.list.code ? (
          <Layout>
            <HeaderPage />
            <Layout>
              <SiderPage class={'sidebar'} />
              <Content>
                <div class={'content'}>
                  <RouterView />
                </div>
                <FooterPage />
              </Content>
            </Layout>
          </Layout>
        ) : (
          <FullLoading />
        )}
      </>
    );
  },
});
