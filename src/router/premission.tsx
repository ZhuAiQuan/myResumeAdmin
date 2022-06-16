import { matchRoutes, useLocation, Navigate } from "react-router-dom";
import { Fragment, ReactNode } from "react";
import useAuth from "@/utils/auth";
import routes from "./config";
import type { Routes } from "@/types/routes";

const RouterAuth = ({ children }: { children: ReactNode }) => {
  const { isLogin } = useAuth();
  const location = useLocation();
  // 匹配当前层级路由树
  const matchs = matchRoutes(routes, location);
  // 是否需要登录
  const needLogin = matchs?.some((item) => {
    const route: Routes.RouteProps = item.route;
    // 没有匹配到直接返回
    if (!route.meta) return false;
    // 返回是否需要登录
    return route.meta.auth;
  });
  
  if (needLogin && !isLogin) {
    // 需要登录
    return <Navigate to='/login' />
  }
  

  return <Fragment>{children}</Fragment>;
};

export default RouterAuth;