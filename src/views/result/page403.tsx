import { defineComponent } from 'vue';

export default defineComponent({
  name: '403',
  setup() {
    return () => <div>对不起, 你没有此页面的访问权限.</div>;
  }
});
