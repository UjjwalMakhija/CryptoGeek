import React from 'react'
import { LogoIcon } from './icons/icons'

function Naavbar() {
  return (
    <div className='bg-gray-800 flex items-center h-14 text-white'> 
   <div className='wrapper-container  w-full'>
    <div className='flex items-center gap-1 cursor-pointer '> 
    <LogoIcon />
    <p className='font-semibold'> <span className='text-yellow-500'>C</span>rypto<span className='text-yellow-500'>S</span>earch</p>
    </div>
   </div>
    </div>
  )
}

export default Naavbar