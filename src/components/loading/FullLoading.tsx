import { Spin } from 'ant-design-vue';
import { defineComponent } from 'vue';
import './style.less';

//页面loading
export default defineComponent({
  name: 'PageLoding',
  setup() {
    return () => (
      <div class="loading_div">
        <Spin size={'large'} tip="页面加载中......" />
      </div>
    );
  },
});
