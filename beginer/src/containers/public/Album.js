import { useEffect, useState } from 'react'
import React from 'react'
import { useParams } from 'react-router-dom'
import * as apis from '../../apis'
import moment from 'moment'
import { Lists } from '../../components'
import { Scrollbars } from 'react-custom-scrollbars'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../store/actions'

export default function Album() {
  const { id } = useParams()
  const [playlistData, setPlaylistData] = useState({})
  const dispatch = useDispatch()
  const { curSongId, isPlaying, songs } = useSelector((state) => state.music)

  useEffect(() => {
    const fetchDetailPlaylist = async () => {
      const response = await apis.apiGetDetailPlaylist(id)
      console.log(response)
      if (response?.data.err === 0) {
        setPlaylistData(response.data?.data)
        dispatch(actions.setPlaylist(response.data?.data?.song?.items))
      }
    }
    fetchDetailPlaylist()
  }, [id])

  return (
    <div className='flex gap-8 w-full h-full px-[59px] pt-[40px]'>
      <div className='flex-none w-[300px] flex flex-col items-center gap-1'>
        <div className='w-full h-[300px] overflow-hidden'>
          <img
            src={playlistData?.thumbnailM}
            alt=''
            className={` object-contain   shadow-sm  rounded-md hover:animate-img-scale-up animate-img-scale-down`}
          />
        </div>
        <h3 className='text-[20px] font-bold text-[#32323D]'>{playlistData?.title}</h3>
        <span className='text-[#A4A4A4] text-sm'>
          <span>Cập nhật: </span>
          <span>{moment.unix(playlistData?.contentLastUpdate).format('DD/MM/YYYY')}</span>
        </span>
        <span className='text-[#A4A4A4] text-xs hover:text-hover-pink hover:cursor-pointer'>
          {playlistData?.artistsNames}
        </span>
        <span className='text-[#A4A4A4] text-sm '>{`${Math.round(playlistData?.like / 1000)}K người yêu thích`}</span>
      </div>
      <Scrollbars style={{ width: '100%', height: '80%' }}>
        <div className='flex-auto text-sm mr-2'>
          <span>
            <span className='text-[#A4A4A4]'>Lời tựa </span>
            <span>{playlistData?.sortDescription}</span>
          </span>
          <Lists totalDuration={playlistData?.song?.totalDuration} />
        </div>
      </Scrollbars>
    </div>
  )
}
