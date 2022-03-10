import { defineComponent } from 'vue';
import { Layout } from 'ant-design-vue';
import Header from '@/layout/Header';
import Sidebar from '@/layout/Sidebar';
import { RouterView } from 'vue-router';
import './style.less';
const { Content } = Layout;

export default defineComponent({
  setup() {},
  render() {
    return (
      <Layout>
        <Header />
        <Layout>
          <Sidebar class={'sidebar'} />
          <Content class={'content'}>
            <RouterView />
          </Content>
        </Layout>
      </Layout>
    );
  },
});
