import { createApp } from 'vue';
import App from '@/views/App';
import { setupRouter } from '@/router';
import { setupAssets } from '@/plugins';

const app = createApp(App);

async function setupApp() {
  // 引入静态资源
  setupAssets();
  // 挂载路由
  await setupRouter(app);
  app.mount('#app');
}

setupApp();
