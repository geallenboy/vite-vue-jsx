import { defineComponent, reactive } from 'vue';
import { CaretDownOutlined, CaretUpOutlined, QuestionCircleOutlined } from '@ant-design/icons-vue';
import { Card, Col, Row, Space, Tooltip, Divider } from 'ant-design-vue';

export default defineComponent({
  props: ['data'],
  setup(props) {
    console.log(props, 'props');
    const data = reactive(props.data);
    return () => (
      <Card class={'cardtab'}>
        <Row justify="space-between">
          <Col span={12}>
            <h3 class={'card-title'}>{data.title}</h3>
          </Col>
          <Col span={12} class="text-right">
            <Tooltip title={'指标说明'}>
              <QuestionCircleOutlined />
            </Tooltip>
          </Col>
        </Row>
        <h2 class={'card-h2'}>¥ {data.titleNumber}</h2>
        <Row>
          <Col span={12}>
            <Space>
              <span>周同比</span>
              <span>
                <span class={'mr5'}>{data.tbNumber}</span>
                <CaretUpOutlined class={'up'} />
              </span>
            </Space>
          </Col>
          <Col span={12}>
            <Space>
              <span>日同比</span>
              <span>
                <span class={'mr5'}>{data.rtbNumber}</span>
                <CaretDownOutlined class={'down'} />
              </span>
            </Space>
          </Col>
        </Row>
        <Divider class={'mt10'} />
        <Space>
          <span>日销售额</span>
          <span class={'card-span1'}>¥ {data.rxse}</span>
        </Space>
      </Card>
    );
  },
});
