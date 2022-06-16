import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import LoginForm, { IFormData } from "./form";
import LoginState from "./login";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useAuth from '@/utils/auth';
import { USER_ROLE_ENUM } from '@/types/role';
import { setToken, setUserInfo } from '@/utils/cookies'

export default function FormData() {
  const dispath = useDispatch();
  const router = useNavigate();
  const [loginState, updateLoginState] = useState(false);
  const [formDataH, updateFormDataH] = useState(0)
  const formData = useRef<HTMLDivElement | null>(null);
  const [defaultHeight, setDefaultHeight] = useState(0);// 展开默认高度
  const [defaultFormData, setFormData] = useState({
    username: '',
    password: ''
  })

  const onLogin = ({ password, username, code, remember }: Common.IFormData) => {
    updateLoginState(true);
    // dispath({
    //   type: 'onlogin',
    //   data: { isLogin: true }
    // })
    // localStorage.setItem('login', JSON.stringify({isLogin: true}))
    // 将用户信息存入cookies中
    setToken('abcdefghijklmnopqrstuvwxyz');
    const data = {
      name: username,
      userId: 0,
      phone: 110,
      role: USER_ROLE_ENUM.ADMIN
    }
    setUserInfo(JSON.stringify(data))
    setTimeout(() => {
      // console.log(password, username, code);
      // dispath({
      //   type: 'updateUserInfo',
      //   data: {
      //     userId: '1',
      //     name: username,
      //     phone: '110',
      //     role: USER_ROLE_ENUM.ADMIN
      //   }
      // })
      router('/')
      // updateLoginState(false)
    }, 1000);
    // 存储数据
    setFormData({username, password});
    // 记住密码
    if (remember) {
      localStorage.setItem('_login_remember', JSON.stringify({ password, username }))
    } else {
      const temp = JSON.parse(localStorage.getItem('_login_remember') as string);
      if (temp.username === username) localStorage.setItem('_login_remember', '')
    }
  }

  useLayoutEffect(() => {
    updateFormDataH((formData.current as HTMLDivElement).offsetHeight);
    setDefaultHeight((formData.current as HTMLDivElement).offsetHeight);
    
  }, [])
  useEffect(() => {
    if (loginState) {
      updateFormDataH(42)
    } else {
      defaultHeight && updateFormDataH(defaultHeight);
    }
  }, [loginState])
  // useEffect(() => {
  //   // 记住密码获取本地缓存中的密码
  //   const temp = JSON.parse(localStorage.getItem('_login_remember') as string) as IFormData;
  //   if (temp.username) {
  //     setFormData(state => {
  //       return {
  //         ...state,
  //         username: temp.username,
  //         password: temp.password
  //       }
  //     });
  //   }
  // }, [])

  return (
    <div className="form-data" ref={formData} style={{ height: formDataH ? `${formDataH}px`: 'auto', backgroundColor: loginState ? 'transparent' : '#fff' }}>
      {loginState ? (
        <LoginState />
      ) : (
        <>
          <div className="title">后台管理系统</div>
          <div className="form-ctx">
            <LoginForm updateLoginState={onLogin} {...defaultFormData} />
          </div>
        </>
      )}
    </div>
  );
}
