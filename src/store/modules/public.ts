import { defineStore } from 'pinia';

export const usePublicStore = defineStore({
  id: 'info',
  state: (): any => ({
    sidebarOpen: false,
    sidebarExpanded: false,
    open: false
  }),
  getters: {
    getSidebarOpen(): any {
      return this.sidebarOpen;
    },
    getSidebarExpanded(): any {
      return this.sidebarExpanded;
    },
    getOpen(): any {
      return this.open;
    }
  },
  actions: {
    setSidebarOpen(bool = false) {
      this.sidebarOpen = bool;
    },
    setsidebarExpanded(bool = false) {
      this.sidebarExpanded = bool;
    },
    setOpen(bool = false) {
      this.open = bool;
    }
  }
});
