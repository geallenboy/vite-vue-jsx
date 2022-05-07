import { createApp } from 'vue';
import App from '@/views/App';
import { setupStore } from '@/store';
import { setupRouter } from '@/router';
import { setupAssets } from '@/plugins';

const app = createApp(App);

async function setupApp() {
  // 引入静态资源
  setupAssets();
  // 挂载pinia状态管理
  setupStore(app);
  // 挂载路由
  await setupRouter(app);

  p.mount('#app');
}

setupApp();
