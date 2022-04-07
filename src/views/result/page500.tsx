import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Page500',
  setup() {
    return () => <div>对不起, 服务器内部错误.</div>;
  }
});
