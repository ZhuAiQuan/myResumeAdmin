import React, { useState } from 'react'
import { MenuFoldOutlined, ExpandOutlined } from '@ant-design/icons';
import IconFont from '@/components/iconFonts'

type Props = {
  toggle: boolean
  setToggleState: (state: boolean) => void
}
export default function Header(props: Props) {
  const { toggle, setToggleState } = props;
  const [dayNight, setDayNight] = useState(true);
  const [script, getScript] = useState<HTMLLinkElement | null>(null)

  const onToggleScreen = () => {
    // 全屏
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      document.documentElement.requestFullscreen()
    }
  }
  const onToggleDayNight = () => {
    if (dayNight) {
      const scripts = document.createElement('link');
      scripts.rel = 'stylesheet';
      scripts.href = '/night.css';
      const head = document.querySelector('head');
      head?.appendChild(scripts);
      getScript(scripts)
    } else {
      if (script) {
        const head = document.querySelector('head');
        head?.removeChild(script)
      }
    }
    setDayNight(!dayNight)
  }
  return (
    <div className='header'>
      <MenuFoldOutlined className={ `icons ${toggle ? '' : 'icons-rota'}` } onClick={() => setToggleState(!toggle)} />
      <div className='features'>
        <IconFont type={`icon-${dayNight ? 'light' : 'goodnight'}`} onClick={onToggleDayNight} />
        <ExpandOutlined onClick={onToggleScreen} />
        <div className='avatar'></div>
      </div>
    </div>
  )
}
