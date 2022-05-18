import React from 'react'

export default function Stormy() {
  return (
    <div className='stormy weather'>
      <ul>
        {
          Array(8).fill('').map((item, i) => <li key={`${i}+${item}`}></li>)
        }
      </ul>
      <div className='snowe'></div>
      <div className='snowe2'></div>
      <div className='stick'></div>
      <div className='stick stick2'></div>
    </div>
  )
}

