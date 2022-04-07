import { defineComponent } from 'vue';

export default defineComponent({
  name: '404',
  setup() {
    return () => <div>对不起, 页面不存在</div>;
  }
});
