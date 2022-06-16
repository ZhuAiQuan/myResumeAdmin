import { Suspense, lazy, LazyExoticComponent } from "react";
import { Spin } from "antd";
import { Navigate } from 'react-router-dom'
import Main from '@/layouts/main';
import { Routes } from "@/types/routes";

enum USER_ROLE_ENUM {
  ADMIN = 'admin',
  PRODUCT_MANAGER = 'pm',
  OPERATION_MANAGER = 'om',
  INTERN = 'intern',
  GUEST = 'guest'
}

function lazyload(Com: LazyExoticComponent<any>) {
  return (
    <Suspense
      fallback={
        <Spin
          size="large"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></Spin>
      }
    >
      <Com />
    </Suspense>
  );
}

const routes: Routes.RouteProps[] = [
  {
    path: '/',
    element: <Main />,
    // meta: {
    //   auth: true,
    //   roles: [Role.USER_ROLE_ENUM.ADMIN]
    // },
    children: [
      {
        index: true,
        element: <Navigate to='home' />
      },
      {
        path: 'home',
        element: lazyload(lazy(() => import('views/home'))),
        meta: {
          auth: true,
          roles: [USER_ROLE_ENUM.ADMIN]
        }
      },
      // {
      //   path: 'setting',
      //   element: lazyload(lazy(() => import('views/setting'))),
      //   meta: {
      //     auth: true,
      //     roles: [USER_ROLE_ENUM.GUEST]
      //   }
      // }
      
    ]
  },
  {
    path: '/login',
    element: lazyload(lazy(() => import('views/login')))
  },
  {
    path: 'register',
    element: lazyload(lazy(() => import('views/register')))
  },
  {
    path: '*',
    element: lazyload(lazy(() => import('views/404')))
  }
];

export default routes
