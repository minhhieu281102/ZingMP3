import moment from 'moment'
import React from 'react'
import 'moment/locale/vi'
import { useDispatch } from 'react-redux'
import * as actions from '../store/actions'

export default function SongItem({ thumbnail, title, artist, releaseDate, id }) {
  const dispatch = useDispatch()
  return (
    <div
      onClick={() => {
        dispatch(actions.setCurSongId(id))
        dispatch(actions.play(true))
      }}
      className='w-[45%] min-[1024px]:w-[30%] flex-auto p-[10px] flex gap-[10px] h-20 hover:bg-[#F2F2F2] cursor-pointer hover:rounded-md'
    >
      <img src={thumbnail} alt='' className='w-[60px] h-[60px] object-cover rounded-md' />
      <div className='flex flex-col gap-1'>
        <span className='text-sm font-semibold'>{title?.length > 30 ? `${title?.slice(0, 30)}...` : title}</span>
        <span className='text-xs text-[#96969B] hover:text-[#AA5ED1] hover:underline'>{artist}</span>
        <span className='text-xs text-[#96969B]'>{moment(releaseDate * 1000).fromNow()}</span>
      </div>
    </div>
  )
}
