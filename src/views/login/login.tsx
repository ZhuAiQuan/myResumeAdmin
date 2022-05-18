import React, { useLayoutEffect, useState } from 'react'

export default function loginState() {
  const dots = [1,2,3,4,5]

  return (
    <div className='login-state'>
      {
        dots.map((i) => <div className='dot' style={{ animationDelay: `${(i+1)*0.2}s` }} key={i}></div>)
      }
    </div>
  )
}
