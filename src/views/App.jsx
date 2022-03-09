import { defineComponent } from 'vue';
import { Layout } from 'ant-design-vue';
import Header from '@/layout/Header';
import Sidebar from '@/layout/Sidebar';
import { RouterView } from 'vue-router';
import './app.less';
const { Content } = Layout;

export default defineComponent({
  setup() {},
  render() {
    return (
      <Layout>
        <Header />
        <Layout>
          <Sidebar />
          <Content>
            <div className="app">
              <RouterView />
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  },
});
