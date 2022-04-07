import { defineComponent, reactive } from 'vue';

export default defineComponent({
  props: ['data'],
  setup(props) {
    console.log(props, 'props');
    const data = reactive(props.data);
    return () => (
      <div class={'cardtab'}>
        <div>
          <div>
            <h3 class={'card-title'}>{data.title}</h3>
          </div>
          <div class="text-right">指标说明</div>
        </div>
        <h2 class={'card-h2'}>¥ {data.titleNumber}</h2>
        <div>
          <div>
            <div>
              <span>周同比</span>
              <span>
                <span class={'mr5'}>{data.tbNumber}</span>
                <span>up</span>
              </span>
            </div>
          </div>
          <div>
            <div>
              <span>日同比</span>
              <span>
                <span class={'mr5'}>{data.rtbNumber}</span>
                <span>down</span>
              </span>
            </div>
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
