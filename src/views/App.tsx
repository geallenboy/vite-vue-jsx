import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import HeaderPage from '@/layout/header';
import SiderPage from '@/layout/sider';
import { usePublicStore } from '@/store/modules/public';
import './app.css';

export default defineComponent({
  setup() {
    const usePub = usePublicStore();

    return () => (
      <div
        class={`antialiased text-gray-600 bg-gray-100 font-inter ${
          usePub.getSidebarExpanded ? 'sidebar-expanded' : ''
        }`}
      >
        <div class={'flex h-screen overflow-hidden'}>
          <SiderPage />
          <div class={'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'}>
            <HeaderPage />
            <main>
              <div class={'w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl'}>
                <RouterView />
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
});
