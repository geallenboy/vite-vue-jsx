import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Logo',
  setup() {},

  render() {
    return (
      <div class="login-page">
        <div class="login-page-form">
          <h2>VUE ANTD ADMIN</h2>
          <div>
            <input placeholder="用户名" size="large" />
          </div>
          <div>
            <input placeholder="密码" size="large" />
          </div>
          <div>
            <input placeholder="验证码" size="large" />
          </div>
          <div>
            <button class="login-page-form_button">登录</button>
          </div>
        </div>
      </div>
    );
  }
});
