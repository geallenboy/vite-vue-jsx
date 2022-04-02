import { defineComponent } from 'vue';
import { Result } from 'ant-design-vue';

export default defineComponent({
  name: 'Success',
  setup() {
    return () => <Result status="success" title="success" subTitle="操作成功" />;
  }
});
