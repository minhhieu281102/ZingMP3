import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { searchMenu } from '../../ultis/menu'
import { useSelector } from 'react-redux'

const notActiveStyle = 'px-4 hover:text-hover-pink font-semibold cursor:pointer py-5'
const activeStyle = 'px-4 hover:text-hover-pink font-semibold cursor:pointer py-4 border-b-2  flex text-hover-pink'

export default function Search() {
  const { keyword } = useSelector((state) => state.music)
  console.log(keyword)
  return (
    <div>
      <div className='flex h-[50px] mb-7 items-center text-sm border-b border-[#E7E7E7] pl-[60px] pb-1'>
        <span className='text-[24px] font-bold pr-6 border-r border-[#E7E7E7]'>Kết quả tìm kiếm</span>
        <div className='flex items-center '>
          {searchMenu.map((item) => (
            <NavLink
              key={item.path}
              to={`${item.path}?q=${keyword.replace(' ', '+')}`}
              className={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
            >
              {item.text}
            </NavLink>
          ))}
        </div>
      </div>
      <div className='w-full'>
        <Outlet />
      </div>
    </div>
  )
}
