import React from 'react'
import { useDispatch } from 'react-redux'
import * as actions from '../store/actions'

export default function RankSong({ title, artist, rank, percent, id, thumbnail }) {
  const dispatch = useDispatch()

  return (
    <div
      onClick={() => {
        dispatch(actions.setCurSongId(id))
        dispatch(actions.play(true))
      }}
      className='w-full flex-auto p-[10px]  gap-[10px] h-20 hover:bg-[#604174] cursor-pointer hover:rounded-md flex items-center justify-start bg-[hsla(0,0%,100%,.07)] rounded-md'
    >
      <div className='flex justify-between w-full '>
        <span
          className={`w-1/5 flex justify-center items-center font-bold text-[#fff] text-3xl ${
            rank === 1 ? 'text-no1' : rank === 2 ? 'text-no2' : 'text-no3'
          }`}
        >
          {rank}
        </span>
        <div className='flex gap-3 w-full'>
          <img src={thumbnail} alt='' className='w-[60px] h-[60px] object-cover rounded-md' />
          <div className='flex flex-col gap-1 w-3/5 justify-center'>
            <span className='text-sm font-semibold text-[#fff]'>
              {title?.length > 30 ? `${title?.slice(0, 30)}...` : title}
            </span>
            <span className='text-xs text-[#96969B] hover:text-[#AA5ED1] hover:underline'>{artist}</span>
          </div>
        </div>
        <span className='text-[#fff] w-1/5 flex justify-center items-center text-base font-bold'>{`${percent}%`}</span>
      </div>
    </div>
  )
}
