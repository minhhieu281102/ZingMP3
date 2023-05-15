import { useEffect, useState } from 'react'
import React from 'react'
import { useSelector } from 'react-redux'
import * as apis from '../apis'
import icons from '../ultis/icons'

const {
  AiOutlineHeart,
  BsThreeDotsVertical,
  TbPlayerPlayFilled,
  TbPlayerSkipForwardFilled,
  TbPlayerSkipBackFilled,
  TbPlayerPauseFilled,
  CiRepeat,
  RxShuffle
} = icons

export default function Player() {
  const { curSongId, isPlaying } = useSelector((state) => state.music)
  const [songInfo, setSongInfo] = useState(null)
  const [sourse, setSourse] = useState(null)

  useEffect(() => {
    const fetchDetailSong = async () => {
      const [res1, res2] = await Promise.all([apis.apiGetDetailSong(curSongId), apis.apiGetSong(curSongId)])
      if (res1.data.err === 0) {
        setSongInfo(res1.data.data)
      }
      if (res2.data.err === 0) {
        setSourse(res2.data.data['128'])
      }
    }
    fetchDetailSong()
  }, [curSongId])

  const handleTogglePlayMusic = () => {}

  return (
    <div className='px-5 h-full bg-white flex py-2'>
      <div className='w-[30%] flex flex-auto items-center gap-4'>
        <img src={songInfo?.thumbnail} alt='thubnail' className='w-16 h-16 object-cover rounded-md' />
        <div className='flex flex-col '>
          <span className='font-semibold text-gray-700 text-sm'>{songInfo?.title}</span>
          <span className='text-xs text-gray-500'>{songInfo?.artistsNames}</span>
        </div>
        <div className='flex gap-1'>
          <span>
            <AiOutlineHeart size={16} />
          </span>
          <span>
            <BsThreeDotsVertical size={16} />
          </span>
        </div>
      </div>
      <div className='w-[40%] gap-2 flex flex-auto flex-col items-center justify-center'>
        <div className='flex gap-8 justify-center items-center'>
          <span title='Bật phát ngẫu nhiên' className='cursor-pointer'>
            <RxShuffle size={18} />
          </span>
          <span className='cursor-pointer'>
            <TbPlayerSkipBackFilled size={18} />
          </span>
          <span
            className='p-3 border border-black rounded-full hover:text-hover-pink cursor-pointer'
            onClick={() => handleTogglePlayMusic()}
          >
            {isPlaying ? <TbPlayerPauseFilled size={18} /> : <TbPlayerPlayFilled size={18} />}
          </span>
          <span className='cursor-pointer'>
            <TbPlayerSkipForwardFilled size={18} />
          </span>
          <span title='Bật phát lại tất cả' className='cursor-pointer'>
            <CiRepeat size={18} />
          </span>
        </div>
        <div>process</div>
      </div>
      <div className='w-[30%] flex flex-auto'>Volume</div>
    </div>
  )
}
