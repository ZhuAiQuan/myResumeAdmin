import { getToken, getUserInfo } from '@/utils/cookies';

const isLogin = getToken() && (getUserInfo().userId || getUserInfo().userId === 0) ? true : false;

export default function useAuth() {
  return {
    isLogin
  }
}