import { defineComponent } from 'vue';
import { LogoutOutlined } from '@ant-design/icons-vue';
import { Row, Col, Space, Avatar } from 'ant-design-vue';
import logo from '@/assets/images/logo.png';
import './style.less';

export default defineComponent({
  name: 'Header',
  setup() {
    return () => (
      <header class={'header'}>
        <Row class={'header-row'} align="middle">
          <Col span={12}>
            <Space align="center">
              <Avatar class="logoImg" src={logo}></Avatar>
              <h1>vue3管理系统</h1>
            </Space>
          </Col>
          <Col span={12} class={'text-r'}>
            <Space align="center">
              <span>{'姓名'}</span>
              <LogoutOutlined />
            </Space>
          </Col>
        </Row>
      </header>
    );
  }
});
