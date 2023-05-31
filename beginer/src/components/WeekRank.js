import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import icons from '../ultis/icons'
import { List } from './List'
import { Scrollbars } from 'react-custom-scrollbars'

const notActiveStyle = 'text-[24px] py-[12px] font-sembold'
const activeStyle = 'text-[24px] py-[12px] font-sembold text text-[#8D22C3] border-b-2 border-[#8D22C3]'

export default function WeekRank({ weekChart }) {
  const { TbPlayerPlayFilled } = icons
  const { id } = useParams()
  const [weekChartSongs, setWeekChartSongs] = useState(null)

  useEffect(() => {
    setWeekChartSongs(weekChart?.find((item) => item?.link?.includes(id))?.items)
  }, [id])
  console.log(weekChartSongs)
  return (
    <div className='mb-[90px] px-[59px] '>
      <div className='flex pt-[38px]   items-center'>
        <p className='text-[40px] text-[#8D22C3] font-bold flex items-center justify-center pr-2'>Bảng Xếp Hạng Tuần</p>
        <span className='flex items-center justify-center rounded-full text-[#fff] bg-hover-pink h-[46px] w-[46px]'>
          {<TbPlayerPlayFilled size={25} />}
        </span>
      </div>
      <div className='flex gap-8'>
        {weekChart?.map((item) => (
          <NavLink
            key={item.chartId}
            to={item.link.split('.')[0]}
            className={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
          >
            {item.country === 'vn'
              ? ' VIỆT NAM'
              : item.country === 'us'
              ? 'US-UK'
              : item.country === 'korea'
              ? 'K-POP'
              : ''}
          </NavLink>
        ))}
      </div>
      <div className='w-full h-full'>
        <Scrollbars style={{ width: '100%', height: 430 }}>
          {weekChartSongs?.map((item, index) => (
            <List key={item?.encodeId} songData={item} order={index + 1} />
          ))}
        </Scrollbars>
      </div>
    </div>
  )
}
