import React, { memo } from 'react'
import icons from '../ultis/icons'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import * as actions from '../store/actions'

const { CiMusicNote1 } = icons
export function List({ songData, isHideAlbum }) {
  const dispatch = useDispatch()

  return (
    <div
      className='flex justify-between items-center p-[10px] h-[60px] hover:bg-[#F2F2F2] cursor-pointer '
      onClick={() => {
        dispatch(actions.setCurSongId(songData?.encodeId))
        dispatch(actions.play(true))
        dispatch(actions.playAlbum(true))
      }}
    >
      <div className='flex items-center gap-2 flex-1 '>
        {!isHideAlbum && (
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
      {!isHideAlbum && <div className='flex-1 items-center flex hover:text-hover-pink '>{songData?.album?.title}</div>}
      <div className='flex-1 flex justify-end opacity-70'>{moment.utc(songData?.duration * 1000).format('mm:ss')}</div>
    </div>
  )
}
export default memo(List)
