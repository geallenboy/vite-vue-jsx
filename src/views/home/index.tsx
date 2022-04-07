import { homeCardtab } from '@/api/home';
import { defineComponent, onMounted, reactive } from 'vue';
import { CardTab } from './modules';
import './style.less';

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

    return () => (
      <div class={'home'}>
        <div>
          {cardTabList.list?.map((ds: any) => {
            return (
              <div class="pd10">
                <CardTab data={ds} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
});
