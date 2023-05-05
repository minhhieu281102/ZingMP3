import React from 'react'
import { Outlet } from 'react-router-dom'
import { SideBarLeft, SideBarRight } from '../../components'

export default function Public() {
  return (
    <div className='w-full flex overflow-auto'>
      <div className='w-[240px] flex-none'>
        <SideBarLeft />
      </div>
      <div className='flex-auto'>
        <Outlet />
      </div>
      <div className='w-[330px] flex-none'>
        <SideBarRight />
      </div>
    </div>
  )
}
