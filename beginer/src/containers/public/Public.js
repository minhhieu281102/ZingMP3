import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Player, SideBarLeft, SideBarRight, Header } from '../../components'
import { Scrollbars } from 'react-custom-scrollbars'

export default function Public() {
  const [isShowRightSideBar, setIsShowRightSideBar] = useState(false)
  return (
    <div className='w-full flex flex-col min-h-screen  relative'>
      <div className='flex w-full  h-screen flex-auto'>
        <div className='w-[240px] flex-none h-full bg-[#F2F2F2]'>
          <SideBarLeft />
        </div>
        <div className='flex-auto flex flex-col'>
          <div className=' h-[70px] flex-none flex items-center px-[59px]'>
            <Header />
          </div>
          <div className='flex-auto w-full '>
            <Scrollbars autoHide style={{ width: '100%', height: '100%' }}>
              <Outlet />
            </Scrollbars>
          </div>
        </div>
        {isShowRightSideBar && (
          <div className='w-[330px] h-full  1600:flex animate-slide-left  right-0 top-0 fixed '>
            <SideBarRight />
          </div>
        )}
      </div>
      <div className=' h-[90px] z-10 fixed bottom-0 w-full '>
        <Player setIsShowRightSideBar={setIsShowRightSideBar} />
      </div>
    </div>
  )
}
