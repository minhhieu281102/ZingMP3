import React from 'react'
import { useSelector } from 'react-redux'
import SongItem from './SongItem'

export default function NewReleases() {
  const { newReleases } = useSelector((state) => state.app)
  return (
    <div className='mt-12 '>
      <div className='flex items-center justify-between '>
        <h3 className='text-[20px] font-bold'>{newReleases?.title}</h3>
        <span className='text-xs'>TẤT CẢ</span>
      </div>
      <div className='flex flex-wrap w-full '>
        {newReleases?.items?.vPop
          ?.filter((i, index) => index < 12)
          ?.map((item) => (
            <SongItem
              key={item?.encodeId}
              thumbnail={item?.thumbnail}
              title={item?.title}
              artist={item?.artistsNames}
              releaseDate={item?.releaseDate}
              id={item?.encodeId}
            />
          ))}
      </div>
    </div>
  )
}
