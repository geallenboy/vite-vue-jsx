import { initState } from '@/config/index';
import { defineStore } from 'pinia';

import { userInfoApi, menuListApi } from '@/api/public';

import { UserState } from '@/interface/public';
import { initStoreType } from '@/interface';
import { menuType } from '@/interface/public';

interface userStateType {
  userInfo: initStoreType<UserState | null>;
  menu: initStoreType<menuType | null>;
}

export const usePublicStore = defineStore({
  id: 'user',
  state: (): userStateType => ({
    userInfo: { ...initState },
    menu: { ...initState },
  }),
  getters: {
    getUserInfo(): initStoreType<UserState | null> {
      return this.userInfo;
    },
    getMenu(): initStoreType<menuType | null> {
      return this.menu;
    },
  },
  actions: {
    async userInfoAxios() {
      try {
        const data = await userInfoApi<UserState>();
        this.userInfo = data;
        return data;
      } catch (error) {}
    },
    async menuListAxios() {
      try {
        const data = await menuListApi();
        this.menu = data;
        return data;
      } catch (error) {}
    },
  },
});
