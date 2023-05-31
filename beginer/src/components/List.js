import React, { memo } from 'react'
import icons from '../ultis/icons'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import * as actions from '../store/actions'

const { CiMusicNote1 } = icons
export function List({ songData, isHideAlbum, isHideNote, order }) {
  const dispatch = useDispatch()

  return (
    <div
      className='flex justify-between items-center p-[10px] h-[60px] hover:bg-[#F2F2F2] cursor-pointer border-b-[#F2F2F2] border-b'
      onClick={() => {
        dispatch(actions.setCurSongId(songData?.encodeId))
        dispatch(actions.play(true))
        dispatch(actions.playAlbum(true))
      }}
    >
      {order && (
        <div className='w-[100px]'>
          <span
            className={`px-[30px] flex justify-center items-center font-bold text-[#fff] text-3xl ${
              order === 1 ? 'text-no1' : order === 2 ? 'text-no2' : order === 3 ? 'text-no3' : 'text-other'
            }`}
          >
            {order}
          </span>
        </div>
      )}
      <div className='flex items-center gap-2 flex-1 '>
        {!isHideNote && (
          <span>
            <CiMusicNote1 />
          </span>
        )}
        <img src={songData?.thumbnail} alt='' className='w-10 h-10 object-cover rounded-md' />
        <span className='flex flex-col w-[320px]'>
          <span className='text-sm font-semibold'>
            {songData?.title?.length > 30 ? `${songData?.title?.slice(0, 40)}...` : songData?.title}
          </span>
          <span className='hover:text-hover-pink text-xs opacity-70 hover:underline'>{songData?.artistsNames}</span>
        </span>
      </div>
      {!isHideAlbum && (
        <div className='flex-1 items-center flex hover:text-hover-pink opacity-70'>{songData?.album?.title}</div>
      )}
      <div className='flex-1 flex justify-end opacity-70'>{moment.utc(songData?.duration * 1000).format('mm:ss')}</div>
    </div>
  )
}
export default memo(List)
