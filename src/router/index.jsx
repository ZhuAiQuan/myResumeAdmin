import { Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense } from 'react';
import Main from '@/layouts/main'

const Login = lazy(() => import('views/login'));
const Home = lazy(() => import('views/home'));
const NotFound = lazy(() => import('views/404'))

function RouterView() {
  return (
    <>
      <Suspense fallback={'<span>loading<span/>'}>
        <Routes>
          <Route path='/' element={<Main />}>
            <Route index element={<Navigate to='home' />}></Route>
            <Route path='home' element={<Home />}></Route>
          </Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='404' element={<NotFound />}></Route>
          <Route path='*' element={<Navigate to='404' />}></Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default RouterView