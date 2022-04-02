import { defineComponent } from 'vue';
import { Result } from 'ant-design-vue';

export default defineComponent({
  name: '404',
  setup() {
    return () => <Result status="404" title="404" subTitle="对不起, 页面不存在" />;
  }
});
