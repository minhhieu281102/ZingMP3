import React from 'react'
import icons from '../ultis/icons'
import { Search } from '.'
import { useNavigate } from 'react-router-dom'

const { HiArrowNarrowRight, HiArrowNarrowLeft } = icons

export default function Header() {
  const navigate = useNavigate()
  return (
    <div className='flex w-full justify-between'>
      <div className='flex gap-6  w-full'>
        <div className=' flex items-center gap-3 text-gray-400 '>
          <span onClick={() => navigate(-1)} className='cursor-pointer'>
            <HiArrowNarrowLeft size={24} />
          </span>
          <span onClick={() => navigate(1)} className='cursor-pointer'>
            <HiArrowNarrowRight size={24} />
          </span>
        </div>
        <div className='w-1/2'>
          <Search />
        </div>
      </div>
      <div>Login</div>
    </div>
  )
}
