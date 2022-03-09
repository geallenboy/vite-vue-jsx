import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { type App } from 'vue';
import Home from '@/views/Home/Home';
import Todo from '@/views/Pinia/Todo';
import Pinia2 from '@/views/Pinia/Pinia2';
import About1 from '@/views/About/About1';
import About2 from '@/views/About/About2';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/pinia/todo',
    name: 'todo',
    component: Todo,
  },
  {
    path: '/pinia/pinia2',
    name: 'Pinia2',
    component: Pinia2,
  },
  {
    path: '/about/about1',
    name: 'about1',
    component: About1,
  },
  {
    path: '/about/about2',
    name: 'about2',
    component: About2,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export async function setupRouter(app: App) {
  app.use(router);

  // // 路由准备就绪后挂载APP实例
  // await router.isReady();
}
export default router;
