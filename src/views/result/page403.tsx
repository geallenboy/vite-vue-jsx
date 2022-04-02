import { defineComponent } from 'vue';
import { Result } from 'ant-design-vue';

export default defineComponent({
  name: '403',
  setup() {
    return () => <Result status="403" title="403" subTitle="对不起, 你没有此页面的访问权限." />;
  }
});
