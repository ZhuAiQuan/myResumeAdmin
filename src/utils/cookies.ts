import Cookies from 'js-cookie';
import config from '@/config';
const { expires } = config
const token = 'TOKEN';
const userInfo = 'USERINFO';

export const setToken = (value: string) => {
  Cookies.set(token, value, {
    expires
  })
}
export const getToken = () => {
  return Cookies.get(token) || false
}

export const setUserInfo = (value: string) => {
  Cookies.set(userInfo, value, {
    expires
  })
}

export const getUserInfo = () => {
  const str = Cookies.get(userInfo) as string;
  const temp = JSON.parse(str);
  if (temp instanceof Object) return temp
  else return false
}