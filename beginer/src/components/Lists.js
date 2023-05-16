import React, { memo } from 'react'
import List from './List'
import icons from '../ultis/icons'
import moment from 'moment'

const { BsDot } = icons

export function Lists({ songs, totalDuration }) {
  console.log({ songs, totalDuration })
  return (
    <div className='w-full flex flex-col text-sm py-3'>
      <div className='p-[10px] flex justify-between items-center font-semibold 	'>
        <span>BÀI HÁT</span>
        <span>ALBUM</span>
        <span>THỜI GIAN</span>
      </div>
      <div className='flex flex-col '>
        {songs?.map((item) => (
          <List key={item.encodeId} songData={item} />
        ))}
        <div className='flex pt-3 '>
          <span>{songs?.length} bài hát</span>
          <span className='flex items-center justify-center'>
            <BsDot size={24} />
          </span>
          <span>{moment.utc(totalDuration * 1000).format(`hh:mm:ss `)}</span>
        </div>
      </div>
    </div>
  )
}
export default memo(Lists)
