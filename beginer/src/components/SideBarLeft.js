import React from 'react'
import logo from '../assets/logo.svg'
import { sideBarMenu } from '../ultis/menu'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import path from '../ultis/path'

const notActiveStyle =
  'py-2 px-[21px] px[25px] font-semibold text-[13px] flex gap-[12px] items-center justify-start hover:text-hover-pink'
const activeStyle =
  'py-2 px-[21px] px[25px] font-semibold text-[13px] flex gap-[12px] items-center justify-start text-hover-pink bg-[#E6E6E6]'

export default function SideBarLeft() {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col '>
      <div
        onClick={() => navigate(path.HOME)}
        className='w-full h-[70px] py-[15px] px-[25px] flex justify-start items-center'
      >
        <img src={logo} alt='logo' className='w-[120px] object-contain h-[40px] cursor-pointer' />
      </div>
      <div className='flex flex-col'>
        {sideBarMenu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.end}
            className={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
          >
            {item.icon}
            <span>{item.text}</span>
          </NavLink>
        ))}
      </div>
    </div>
  )
}
