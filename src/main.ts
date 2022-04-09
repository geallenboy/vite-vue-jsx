import 'virtual:windi.css';
import 'virtual:windi-devtools';
import { createApp } from 'vue';
import App from '@/views/App';
import { setupRouter } from '@/router';

const app = createApp(App);

async function setupApp() {
  // 挂载路由
  await setupRouter(app);
  app.mount('#app');
}

setupApp();
