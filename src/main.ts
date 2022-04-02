import { createApp } from 'vue';
import App from '@/views/App';
import { setupRouter } from '@/router';

import { setupAntd, setupAssets } from '@/plugins';

const app = createApp(App);

async function setupApp() {
  // 注册全局常用的ant-design-vue组件
  setupAntd(app);
  // 引入静态资源
  setupAssets();
  // 挂载路由
  await setupRouter(app);
  app.mount('#app');
}

setupApp();
