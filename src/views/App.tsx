import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import HeaderPage from '@/layout/header';
import SiderPage from '@/layout/sider';
import FooterPage from '@/layout/footer';
import './style.less';

export default defineComponent({
  setup() {
    return () => (
      <div>
        <HeaderPage />
        <div>
          <SiderPage class={'sidebar'} />
          <div>
            <div class={'content'}>
              <RouterView />
            </div>
            <FooterPage />
          </div>
        </div>
      </div>
    );
  }
});
