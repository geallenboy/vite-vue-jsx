import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { type App } from 'vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/home',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/Home/Home'),
    meta: {
      title: '首页',
    },
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home/Home'),
  },
  {
    path: '/todo/list',
    name: 'todo',
    component: () => import(/* webpackChunkName: "todo" */ '@/views/Todo/Todo'),
  },
  {
    path: '/todo/pinia',
    name: 'Pinia',
    component: () => import(/* webpackChunkName: "Pinia" */ '@/views/Todo/Pinia'),
  },
  {
    path: '/about/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About/About'),
  },
  {
    path: '/exception/404',
    name: '404',
    meta: {
      title: '404',
    },
    component: () => import('@/views/Exception/404'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: '404',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export async function setupRouter(app: App) {
  app.use(router);

  // 路由准备就绪后挂载APP实例
  // await router.isReady();
}
export default router;
