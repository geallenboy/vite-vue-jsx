import { defineComponent } from 'vue';
import { Layout } from 'ant-design-vue';
const { Footer } = Layout;
export default defineComponent({
  name: 'Footer',
  render() {
    return (
      <Footer class={'text-center'}>
        <p>Copyright ©2022 garron Admin</p>
      </Footer>
    );
  },
});
