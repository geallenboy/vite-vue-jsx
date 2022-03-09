import { createApp } from 'vue';
import App from '@/views/App';
import { setupRouter } from '@/router';
import { setupStore } from '@/store';
import { AppConfig } from '@/config/app';
import { setupAntd, setupAssets } from '@/plugins';

const app = createApp(App);
app.config.globalProperties = AppConfig;

function setupPlugins() {
  // 注册全局常用的ant-design-vue组件
  setupAntd(app);
  // 引入静态资源
  setupAssets();
}
async function setupApp() {
  // 挂载vuex状态管理
  setupStore(app);

  // 挂载路由
  await setupRouter(app);

  app.mount('#app');
}
setupPlugins();
setupApp();
