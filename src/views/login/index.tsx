import './index.less';
import { defineComponent } from 'vue';
import { LockOutlined, SafetyOutlined, UserOutlined } from '@ant-design/icons-vue';
import { Button, Form, Input } from 'ant-design-vue';

export default defineComponent({
  name: 'Logo',
  setup() {},

  render() {
    return (
      <div class="login-page">
        <Form class="login-page-form">
          <h2>VUE ANTD ADMIN</h2>
          <Form.Item name="username" rules={[{ required: true, message: '请输入用户名！' }]}>
            <Input placeholder="用户名" prefix={<UserOutlined />} size="large" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: '请输入密码！' }]}>
            <Input.Password placeholder="密码" prefix={<LockOutlined />} size="large" />
          </Form.Item>
          <Form.Item name="verifyCode" rules={[{ required: true, message: '请输入密码！' }]}>
            <Input
              placeholder="验证码"
              prefix={<SafetyOutlined />}
              size="large"
              suffix={<img src={''} class="login-page-form_capatcha" alt="验证码" />}
            />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary" class="login-page-form_button">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  },
});
