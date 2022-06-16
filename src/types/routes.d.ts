import type { RouteObject } from 'react-router-dom';

declare namespace Routes {
  interface RouteProps extends RouteObject {
    meta?: {
      /**
       * 页面是否需要登录
       */
      auth?: boolean,
      /**
       * 哪些角色才能访问
       */
      roles?: Role.USER_ROLE_ENUM[],
      /**
       * 哪些角色不能访问
       */
      unRoles?: Role.USER_ROLE_ENUM[]
    }
    children?: RouteProps[]
  }
}