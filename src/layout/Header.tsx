import { defineComponent } from 'vue';
import { LogoutOutlined } from '@ant-design/icons-vue';
import { Row, Col, Space, Avatar } from 'ant-design-vue';
import './header.less';

export default defineComponent({
  name: 'Header',
  setup() {},
  render() {
    return (
      <header class={'header'}>
        <Row class={'header-row'} align="middle">
          <Col span={12}>
            <Space align="center">
              <Avatar></Avatar>
              <h1>vue3</h1>
            </Space>
          </Col>
          <Col span={12} class={'text-r'}>
            <Space align="center">
              <span>张三</span>
              <Avatar>
                <LogoutOutlined class={'out'} />
              </Avatar>
            </Space>
          </Col>
        </Row>
      </header>
    );
  },
});
