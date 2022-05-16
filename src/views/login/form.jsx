import React, { useEffect, useState } from 'react';
// @ts-ignore
import { Form, Input, Button, Checkbox } from 'antd';
import { getVerifyCode } from 'api/verify';

export default function LoginForm() {
  const [defaultValue, setDefaultValue] = useState({
    username: '',
    password: ''
  })
  const [svgVerify, updateVerify] = useState(null);
  const timestramp = new Date().getTime();
  const onFinish = (values) => {
    const { password, username, remember, code } = values;
    if (remember) {
      localStorage.setItem('_login_remember', JSON.stringify({ password, username }))
    } else {
      const temp = JSON.parse(localStorage.getItem('_login_remember'));
      if (temp.username === username) localStorage.setItem('_login_remember', '')
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const getVerify = () => {
    // request verify
    getVerifyCode(timestramp).then(res => {
      updateVerify(res.data)
    })
  }
  useEffect(() => {
    const remember = localStorage.getItem('_login_remember');
    if (remember && JSON.parse(remember)) {
      const { username, password } = JSON.parse(remember);
      // 赋值
      setDefaultValue(() => ({
        username,
        password
      }))
    }
    // 获取验证码
    getVerify()
  }, [])
  return (
    <Form
      name="basic"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      initialValues={{
        remember: true,
        ...defaultValue
      }}
    >
      <Form.Item
        label="账号"
        name="username"
        rules={[{ required: true, message: '请输入你的账号!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '请输入密码!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item label="验证码">
        <Input.Group compact>
          <Form.Item name="code" rules={[{ required: true, message: '请输入验证码!' }]} noStyle>
            <Input name="code" style={{ width: 'calc(100% - 150px)' }} />
          </Form.Item>
          <div className='verify-code' onClick={getVerify} dangerouslySetInnerHTML={{__html: svgVerify}}></div>
        </Input.Group>
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 0 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 0 }}>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
        <Button type="text">
          注册
        </Button>
      </Form.Item>
    </Form>
  )
}
