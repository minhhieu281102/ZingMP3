import { useEffect, useState, useRef } from 'react'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as apis from '../apis'
import icons from '../ultis/icons'
import * as actions from '../store/actions'
import moment from 'moment'
import { toast } from 'react-toastify'

const {
  AiOutlineHeart,
  BsThreeDotsVertical,
  TbPlayerPlayFilled,
  TbPlayerSkipForwardFilled,
  TbPlayerSkipBackFilled,
  TbPlayerPauseFilled,
  RxShuffle,
  TbRepeatOnce,
  TbRepeat,
  BsMusicNoteList,
  BsVolumeMute,
  BsVolumeDown,
  BsVolumeUp
} = icons

var intervalId

export default function Player({ setIsShowRightSideBar }) {
  const dispatch = useDispatch()
  const { curSongId, isPlaying, songs } = useSelector((state) => state.music)
  const [songInfo, setSongInfo] = useState(null)
  const [isSuffer, setIsSuffer] = useState(false)
  const [repeatMode, setRepeatMode] = useState(0)
  const [audio, setAudio] = useState(new Audio())
  const [curSecond, setCurSecond] = useState(0)
  const [volume, setVolume] = useState(100)
  const thumbRef = useRef()
  const trackRef = useRef()

  useEffect(() => {
    const fetchDetailSong = async () => {
      const [res1, res2] = await Promise.all([apis.apiGetDetailSong(curSongId), apis.apiGetSong(curSongId)])
      if (res1.data.err === 0) {
        setSongInfo(res1.data.data)
      }
      if (res2.data.err === 0) {
        audio.pause()
        setAudio(new Audio(res2.data.data['128']))
      } else {
        audio.pause()
        setAudio(new Audio())
        dispatch(actions.play(false))
        toast.warning(res2.data.msg)
        setCurSecond(0)
        thumbRef.current.style.cssText = `right: 100%`
      }
    }
    fetchDetailSong()
  }, [curSongId])

  useEffect(() => {
    intervalId && clearInterval(intervalId)
    audio.pause()
    audio.load()
    if (isPlaying) {
      audio.play()
      intervalId = setInterval(() => {
        let percent = Math.round((audio.currentTime * 10000) / songInfo?.duration) / 100
        thumbRef.current.style.cssText = `right: ${100 - percent}%`
        setCurSecond(Math.round(audio.currentTime))
      }, 50)
    }
  }, [audio])

  useEffect(() => {
    const handleEnded = () => {
      if (isSuffer) {
        handleSuffle()
      } else if (repeatMode) {
        repeatMode === 1 ? handleRepeatOne() : handleNextSong()
      } else {
        audio.pause()
        dispatch(actions.play(false))
      }
    }
    audio.addEventListener('ended', handleEnded)
    return () => {
      audio.removeEventListener('ended', handleEnded)
    }
  }, [audio, repeatMode, isSuffer])

  useEffect(() => {
    audio.volume = volume / 100
  }, [volume])

  const handleTogglePlayMusic = async () => {
    if (isPlaying) {
      audio.pause()
      dispatch(actions.play(false))
    } else {
      audio.play()
      dispatch(actions.play(true))
    }
  }

  const handleClickProgressBar = (e) => {
    const trackRect = trackRef.current.getBoundingClientRect()
    const percent = Math.round(((e.clientX - trackRect.left) * 10000) / trackRect.width) / 100
    thumbRef.current.style.cssText = `right: ${100 - percent}%`
    audio.currentTime = (percent * songInfo.duration) / 100
    setCurSecond(Math.round((percent * songInfo.duration) / 100))
  }

  const handleNextSong = () => {
    if (songs) {
      let currentSongIndex
      songs?.forEach((item, index) => {
        if (item.encodeId === curSongId) currentSongIndex = index
      })
      let nextSongIndex = currentSongIndex + 1
      dispatch(actions.setCurSongId(songs[nextSongIndex === songs.length ? 0 : nextSongIndex].encodeId))
      dispatch(actions.play(true))
    }
  }

  const handlePrevSong = () => {
    if (songs) {
      let currentSongIndex
      songs?.forEach((item, index) => {
        if (item.encodeId === curSongId) currentSongIndex = index
      })
      dispatch(actions.setCurSongId(songs[currentSongIndex - 1].encodeId))
      dispatch(actions.play(true))
    }
  }

  const handleSuffle = () => {
    console.log(songs.length)
    const randomIndex = Math.round(Math.random() * songs.length)
    dispatch(actions.setCurSongId(songs[randomIndex].encodeId))
    dispatch(actions.play(true))
  }

  const handleRepeatOne = () => {
    audio.play()
  }

  return (
    <div className='px-5 h-full bg-[#fff] flex py-2'>
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
          <span
            title='Bật phát ngẫu nhiên'
            className={`cursor-pointer ${isSuffer && 'text-hover-pink'}`}
            onClick={() => setIsSuffer((prev) => !prev)}
          >
            <RxShuffle size={18} />
          </span>
          <span className={`${!songs ? 'text-[#96969B] ' : 'cursor-pointer'}`} onClick={handlePrevSong}>
            <TbPlayerSkipBackFilled size={18} />
          </span>
          <span
            className='p-3 border border-black rounded-full hover:text-hover-pink cursor-pointer'
            onClick={() => handleTogglePlayMusic()}
          >
            {isPlaying ? <TbPlayerPauseFilled size={18} /> : <TbPlayerPlayFilled size={18} />}
          </span>
          <span className={`${!songs ? 'text-[#96969B] ' : 'cursor-pointer'}`} onClick={handleNextSong}>
            <TbPlayerSkipForwardFilled size={18} />
          </span>
          <span
            onClick={() => setRepeatMode((prev) => (prev === 2 ? 0 : prev + 1))}
            title='Bật phát lại tất cả'
            className={`cursor-pointer ${repeatMode && 'text-hover-pink'}`}
          >
            {repeatMode === 1 ? <TbRepeatOnce size={18} /> : <TbRepeat size={18} />}
          </span>
        </div>
        <div className='w-full flex items-center justify-center gap-3 text-sm'>
          <span className='text-[#98989E]'>{moment.utc(curSecond * 1000).format('mm:ss')}</span>
          <div
            onClick={handleClickProgressBar}
            ref={trackRef}
            className='w-3/4 h-[3px] rounded-l-full rounded-r-full relative bg-[#E5E5E5] hover:h-[8px] cursor-pointer'
          >
            <div
              ref={thumbRef}
              className='absolute top-0 left-0 bottom-0  rounded-l-full rounded-r-full bg-[#8D22C3]'
            ></div>
          </div>
          <span>{moment.utc(songInfo?.duration * 1000).format('mm:ss')}</span>
        </div>
      </div>
      <div className='w-[30%] flex flex-auto items-center  justify-end gap-4'>
        <div className='gap-2 flex items-center'>
          <span
            onClick={() => {
              setVolume((prev) => (+prev === 0 ? 50 : 0))
            }}
            className='cursor-pointer'
          >
            {+volume === 0 ? <BsVolumeMute size={20} /> : <BsVolumeUp size={20} />}
          </span>
          <input
            type='range'
            step={1}
            min={0}
            max={100}
            onChange={(e) => {
              setVolume(e.target.value)
            }}
            value={volume}
          />
        </div>
        <span
          className='p-1 rounded-sm cursor-pointer text-[#54535B]'
          title='Danh sách phát'
          onClick={() => {
            setIsShowRightSideBar((prev) => !prev)
          }}
        >
          <BsMusicNoteList size={20} />
        </span>
      </div>
    </div>
  )
}
