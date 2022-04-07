import { defineComponent } from 'vue';
import logo from '@/assets/images/logo.png';
import './style.less';

export default defineComponent({
  name: 'Header',
  setup() {
    return () => (
      <header class={'header'}>
        <div class={'header-row'}>
          <div>
            <img class="logoImg" src={logo}></img>
            <h1>vue3管理系统</h1>
          </div>
          <div class={'text-r'}>
            <span>{'姓名'}</span>
          </div>
        </div>
      </header>
    );
  }
});
