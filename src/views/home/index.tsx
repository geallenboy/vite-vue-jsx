import { homeCardtab } from '@/api/home';
import { defineComponent, onMounted, reactive } from 'vue';

export default defineComponent({
  setup() {
    const cardTabList = reactive({
      list: []
    });
    onMounted(async () => {
      const data = await homeCardtab();
      if (data.code === 200) {
        cardTabList.list = data.data;
      }
    });

    return () => <div>home</div>;
  }
});
