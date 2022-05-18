import React from 'react'

export default function NightWeather() {
  return (
    <div className='night weather'>
      <div className='moon'></div>
      <ul>
        {
          Array(5).fill('').map((item, i) => <li key={`${i}+${item}`}></li>)
        }
      </ul>
    </div>
  )
}
