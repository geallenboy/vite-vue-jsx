import { defineStore } from 'pinia';
import { store } from '@/store';

interface UserState {
  userInfo: string[];
}
export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    userInfo: ['test1'],
  }),
  getters: {
    getUserInfo(state) {
      return state.userInfo;
    },
  },
  actions: {
    add(name: string) {
      this.userInfo.push(name);
    },
    remove(name: string) {
      this.userInfo.filter((v) => {
        return v !== name;
      });
    },
    clear() {
      this.userInfo = [];
    },
  },
});

// 在组件setup函数外使用
export function useWsStoreWithOut() {
  return useUserStore(store);
}
