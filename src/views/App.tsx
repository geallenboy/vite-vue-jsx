import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import HeaderPage from '@/layout/header';
import SiderPage from '@/layout/sider';

export default defineComponent({
  setup() {
    return () => (
      <div class={'flex h-screen overflow-hidden'}>
        <SiderPage />
        <div class={'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'}>
          <HeaderPage />
          <main>
            <div class={'px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'}>
              <RouterView />
            </div>
          </main>
        </div>
      </div>
    );
  }
});
