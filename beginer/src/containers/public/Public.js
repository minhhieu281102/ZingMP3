import React from 'react'
import { Outlet } from 'react-router-dom'
import { Player, SideBarLeft, SideBarRight, Header } from '../../components'

export default function Public() {
  return (
    <div className='w-full flex flex-col min-h-screen pb-[90px]'>
      <div className='flex w-full h-full flex-auto'>
        <div className='w-[240px] flex-none min-h-screen bg-[#F2F2F2]'>
          <SideBarLeft />
        </div>
        <div className='flex-auto '>
          <div className='mb-[25px] h-[70px] flex items-center px-[59px]'>
            <Header />
          </div>
          <Outlet />
        </div>
        <div className='w-[330px] flex-none hidden 1600:flex animate-slide-left'>
          <SideBarRight />
        </div>
      </div>
      <div className=' h-[90px] z-10 fixed bottom-0 w-full '>
        <Player />
      </div>
    </div>
  )
}
