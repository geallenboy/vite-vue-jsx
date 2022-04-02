import { defineComponent } from 'vue';
import { Layout } from 'ant-design-vue';
import { RouterView } from 'vue-router';
import HeaderPage from '@/layout/header';
import SiderPage from '@/layout/sider';
import FooterPage from '@/layout/footer';
import './style.less';
const { Content } = Layout;

export default defineComponent({
  setup() {
    return () => (
      <>
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
      </>
    );
  }
});
