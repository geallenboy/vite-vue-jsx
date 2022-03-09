import { defineComponent } from 'vue';
import { Layout } from 'ant-design-vue';
const { Footer } = Layout;
export default defineComponent({
  name: 'Footer',
  setup() {},
  render() {
    return (
      <Footer>
        <p>footer</p>
      </Footer>
    );
  },
});
