import { Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense } from 'react';
import Main from '@/layouts/main';
import { useSelector } from 'react-redux'

const Login = lazy(() => import('views/login'));
const Home = lazy(() => import('views/home'));
const NotFound = lazy(() => import('views/404'));
const Register = lazy(() => import('views/register'));

function RouterView(): JSX.Element {
  const isLogin = useSelector(state => (state as any).app.isLogin);
  return (
    <>
      <Suspense fallback={'<span>loading<span/>'}>
        <Routes>
          <Route path='/' element={<Main />}>
            {
              isLogin 
              ? <>
                <Route index element={<Navigate to='home' />}></Route>
                <Route path='home' element={<Home />}></Route>
              </>
              : <Route index element={<Navigate to='/login' />} />
            }
            
          </Route>
          <Route path='login' element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path='404' element={<NotFound />}></Route>
          <Route path='*' element={<Navigate to='404' />}></Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default RouterView