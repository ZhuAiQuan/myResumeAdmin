import React from 'react'
import { MenuFoldOutlined, ExpandOutlined } from '@ant-design/icons'

type Props = {
  toggle: boolean
  setToggleState: (state: boolean) => void
}
export default function Header(props: Props) {
  const { toggle, setToggleState } = props;
  const onToggleScreen = () => {
    // 全屏
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      document.documentElement.requestFullscreen()
    }
  }
  return (
    <div className='header'>
      <MenuFoldOutlined className={ `icons ${toggle ? '' : 'icons-rota'}` } onClick={() => setToggleState(!toggle)} />
      <div className='features'>
        <ExpandOutlined onClick={onToggleScreen} />
        <div className='avatar'></div>
      </div>
    </div>
  )
}
