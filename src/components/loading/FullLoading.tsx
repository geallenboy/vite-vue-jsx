import { defineComponent } from 'vue';
import './style.less';

//页面loading
export default defineComponent({
  name: 'PageLoding',
  setup() {
    return () => <div class="loading-div">页面加载中......</div>;
  }
});
