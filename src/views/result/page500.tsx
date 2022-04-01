import { defineComponent } from 'vue';
import { Result } from 'ant-design-vue';

export default defineComponent({
  name: 'Page500',
  setup() {
    return () => <Result status="500" title="500" subTitle="对不起, 服务器内部错误." />;
  },
});
