import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { BASE_URL } from '@/config';
import { type App } from 'vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: `${BASE_URL}`,
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home')
  },
  {
    path: `${BASE_URL}todo`,
    name: 'todo',
    component: () => import(/* webpackChunkName: "todo" */ '@/views/todo')
  },
  {
    path: `${BASE_URL}about`,
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/about')
  },
  {
    path: `${BASE_URL}result/page404`,
    name: '404',
    component: () => import('@/views/result/page404')
  },
  {
    path: `${BASE_URL}result/page403`,
    name: '403',
    component: () => import('@/views/result/page403')
  },
  {
    path: `${BASE_URL}result/page500`,
    name: '500',
    component: () => import('@/views/result/page500')
  },
  {
    path: `${BASE_URL}result/error`,
    name: 'error',
    component: () => import('@/views/result/error')
  },
  {
    path: `${BASE_URL}result/success`,
    name: 'success',
    component: () => import('@/views/result/success')
  },
  {
    path: `${BASE_URL}:pathMatch(.*)*`,
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
