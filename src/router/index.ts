import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import { type App } from 'vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home')
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import(/* webpackChunkName: "todo" */ '@/views/todo')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/about')
  },
  {
    path: '/result/page404',
    name: '404',
    component: () => import('@/views/result/page404')
  },
  {
    path: '/result/page403',
    name: '403',
    component: () => import('@/views/result/page403')
  },
  {
    path: '/result/page500',
    name: '500',
    component: () => import('@/views/result/page500')
  },
  {
    path: '/result/error',
    name: 'error',
    component: () => import('@/views/result/error')
  },
  {
    path: '/result/success',
    name: 'success',
    component: () => import('@/views/result/success')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: '404'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export async function setupRouter(app: App) {
  app.use(router);

  // 路由准备就绪后挂载APP实例
  // await router.isReady();
}
export default router;
