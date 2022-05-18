import { useState, useRef, useLayoutEffect, useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import Header from './header';
import LeftSide from './leftSide';
import './index.less';

export default function Main() {
  const leftSideCtx = useRef<HTMLDivElement | null>(null);
  const [leftSideWidth, setLeftSideWidth] = useState(200);
  const [toggleSideState, setToggleState] = useState(true);

  useEffect(() => {
    console.log(leftSideCtx.current)
  }, [])
  useLayoutEffect(() => {
    if (toggleSideState) {
      setLeftSideWidth(200)
    } else {
      setLeftSideWidth(40)
    }
  }, [toggleSideState])

  return (
    <div className='app-ctx'>
      <LeftSide leftSideWidth={leftSideWidth} />
      <div className='container' style={{ width: `calc(100% - ${leftSideWidth}px)` }}>
        <Header toggle={toggleSideState} setToggleState={setToggleState}  />
        <Outlet />
      </div>
    </div>
  )
}