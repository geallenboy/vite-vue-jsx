import { defineComponent } from 'vue';
import logo from '@/assets/images/logo.png';

export default defineComponent({
  name: 'Header',
  setup() {
    return () => (
      <header class="h-12 flex">
        <div class={'flex'}>
          <img class="w-8 h-8" src={logo}></img>
          <h1>vue3管理系统</h1>
        </div>
        <div class="text-right">
          <span>{'姓名'}</span>
        </div>
      </header>
    );
  }
});
