import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { apiGetArtist } from '../../apis'
import { useNavigate } from 'react-router-dom'

export default function SearchPlaylist() {
  const { searchData } = useSelector((state) => state.music)
  const [playlist, setPlaylist] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    const fetch = async () => {
      const res = await apiGetArtist(searchData?.top?.alias)
      if (res.data.err === 0) {
        setPlaylist(res.data.data.sections[1])
      }
    }
    fetch()
  }, [searchData])
  return (
    <div className='flex '>
      <div className='flex items-start justify-between gap-[28px] px-[59px] pt-[24px] pb-[90px] flex-wrap h-full w-full'>
        {playlist?.items
          ?.filter((item, index) => index <= 4)
          .map((item) => (
            <div key={item?.encodeId} className='flex flex-col gap-3 flex-1 text-sm  '>
              <img
                src={item?.thumbnailM}
                alt=''
                className='w-full object-contain rounded-lg cursor-pointer hover:animate-img-scale-up animate-img-scale-down'
                onClick={() => {
                  navigate(item?.link?.split('.')[0])
                }}
              />
              <span className='flex flex-col'>
                {item?.sortDescription !== '' ? (
                  <div className='flex flex-col'>
                    <span className='font-semibold'>{item?.title}</span>
                    <span className='text-[#7C7C7C]'>
                      {item?.sortDescription?.length > 50
                        ? `${item?.sortDescription?.slice(0, 50)}...`
                        : item?.sortDescription}
                    </span>
                  </div>
                ) : (
                  <div className='flex flex-col'>
                    <span className='font-semibold'>{item?.title}</span>
                    <span className='text-[#7C7C7C]'>{item?.artistsNames}</span>
                  </div>
                )}
              </span>
            </div>
          ))}
      </div>
    </div>
  )
}
