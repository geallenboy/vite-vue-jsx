import { defineComponent, reactive } from 'vue';

export default defineComponent({
  props: ['data'],
  setup(props) {
    const data = reactive(props.data);
    return () => (
      <div class={'columns-12'}>
        <div>
          <div>
            <h3 class={'card-title'}>{data.title}</h3>
          </div>
          <p class="text-right">指标说明</p>
        </div>
        <h2 class={'card-h2'}>¥ {data.titleNumber}</h2>
        <div>
          <div>
            <span>周同比</span>
            <span>
              <span class={'mr5'}>{data.tbNumber}</span>
              <span>up</span>
            </span>
          </div>
          <div>
            <span>日同比</span>
            <span>
              <span class={'mr5'}>{data.rtbNumber}</span>
              <span>down</span>
            </span>
          </div>
        </div>
        <div>
          <span>日销售额</span>
          <span class={'card-span1'}>¥ {data.rxse}</span>
        </div>
      </div>
    );
  }
});
