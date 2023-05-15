import React from 'react'

export default function Lists({ songs, totalDuration }) {
  console.log({ songs, totalDuration })
  return (
    <div className='w-full flex flex-col text-sm py-3'>
      <div className='p-[10px] flex justify-between items-center font-semibold'>
        <span>BÀI HÁT</span>
        <span>ALBUM</span>
        <span>THỜI GIAN</span>
      </div>
    </div>
  )
}
