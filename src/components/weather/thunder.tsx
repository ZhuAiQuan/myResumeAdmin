import React from 'react';
import './index.less';

export default function ThunderStorm() {
  return (
    <div className='thunder weather'>
      <ul>
        {
          Array(5).fill('').map((item, i) => <li key={`${i}+${item}`}></li>)
        }
      </ul>
    </div>
  )
}
