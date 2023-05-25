import React from 'react'
import { handleNumber } from '../ultis/fn'
import { Link } from 'react-router-dom'

export default function Artist({ image, title, follower, link }) {
  return (
    <div className='flex flex-col  gap-[15px] w-1/5'>
      <Link to={link}>
        <img src={image} alt='' className='w-full object-contain rounded-full cursor-pointer' />
      </Link>
      <div className='flex gap-1 flex-col items-center'>
        <Link to={link}>
          <span className='text-sm font-medium hover:text-hover-pink hover:underline'>{title}</span>
        </Link>
        <span className='text-sm opacity-70'>{`${handleNumber(follower)} quan tâm`}</span>
        <button
          type='button'
          className='bg-[#7F1FAF] px-4 py-1 text-[#fff] text-sm rounded-l-full rounded-r-full flex items-center justify-center gap-1'
        >
          <span className='text-sm '>Quan Tâm</span>
        </button>
      </div>
    </div>
  )
}
