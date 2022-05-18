import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { getVerifyCode } from 'api/verify';

export type IFormData = {
  password: string
  username: string
  remember: boolean
  code: string
}
type Props = {
  updateLoginState: (data: IFormData) => void
  username: string
  password: string
}
function LoginForm(props: Props) {
  const { updateLoginState, username, password } = props;
  const [svgVerify, updateVerify] = useState('');
  const timestramp = new Date().getTime();

  const onFinishFailed = (errorInfo: unknown) => {
    console.log('Failed:', errorInfo);
  };
  const getVerify = () => {
    interface ResponseData {
      data: string
    }
    getVerifyCode(timestramp).then((res: ResponseData) => {
      updateVerify(res.data)
    })
  }
  useEffect(() => {
    // 获取验证码
    getVerify();
  }, [])

  return (
    <Form
      className='form-item'
      name="basic"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
      onFinish={updateLoginState}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      initialValues={{
        remember: true,
        username,
        password
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
            <Input name="code" style={{ width: 'calc(100% - 100px)' }} />
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

export default LoginForm;