import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { apiGetArtist } from '../../apis/music'
import { List } from '../../components/List'

export default function Singer() {
  const { singer } = useParams()
  const [artistData, setArtistData] = useState(null)
  const navigate = useNavigate()
  useEffect(() => {
    const fetchArtistData = async () => {
      const res = await apiGetArtist(singer)
      if (res.data.err === 0) {
        setArtistData(res?.data?.data)
      }
    }
    singer && fetchArtistData()
  }, [singer])
  console.log(artistData)
  return (
    <div className='flex flex-col w-full '>
      <div className='relative'>
        <div className='absolute left-0 top-0 right-0 bottom-0 bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-transparent'>
          <div className='text-[#fff] px-[60px] absolute bottom-5'>
            <h1 className='text-[60px] font-bold '>{artistData?.name}</h1>
            <span className='opacity-90'>{`${Number(
              artistData?.totalFollow.toFixed(1)
            ).toLocaleString()} người quan tâm`}</span>
          </div>
        </div>
        <img src={artistData?.cover} alt='' className='h-[400px] object-cover w-full' />
      </div>
      <div className='content flex flex-col px-[59px] pb-[90px]'>
        <div className='flex flex-col w-full mt-[31px]'>
          <h3 className='text-xl font-bold mb-5'>{artistData?.sections[0]?.title}</h3>
          <div className='flex justify-between flex-wrap w-full'>
            {artistData?.sections[0]?.items
              ?.filter((i, index) => index < 6)
              .map((item) => (
                <div key={item?.encodeId} className='flex-auto max-w-[48%]'>
                  <List songData={item} isHideAlbum />
                </div>
              ))}
          </div>
        </div>

        <h3 className='text-lg font-bold mb-5 mt-[31px]'>{artistData?.sections[3]?.title}</h3>
        <div className='flex items-start justify-start gap-[28px]'>
          {artistData?.sections[3].items
            ?.filter((item, index) => index <= 4)
            .map((item) => (
              <div key={item?.encodeId} className='flex flex-col gap-3  text-sm w-1/5'>
                <img
                  src={item?.thumbnailM}
                  alt=''
                  className='w-full object-contain rounded-lg cursor-pointer hover:animate-img-scale-up animate-img-scale-down'
                  onClick={() => {
                    navigate(item?.link?.split('.')[0])
                  }}
                />
                <span className='flex flex-col'>
                  <div className='flex flex-col'>
                    <span className='font-semibold'>{item?.title}</span>
                    <span className='text-[#7C7C7C]'>{item?.artistsNames}</span>
                  </div>
                </span>
              </div>
            ))}
        </div>

        <h3 className='text-lg font-bold mb-5 mt-[31px]'>{artistData?.sections[4]?.title}</h3>
        <div className='flex items-start justify-start gap-[28px]'>
          {artistData?.sections[4].items
            ?.filter((item, index) => index <= 4)
            .map((item) => (
              <div key={item?.encodeId} className='flex flex-col gap-3  text-sm w-1/5'>
                <img
                  src={item?.thumbnailM}
                  alt=''
                  className='w-full object-contain rounded-lg cursor-pointer hover:animate-img-scale-up animate-img-scale-down'
                  onClick={() => {
                    navigate(item?.link?.split('.')[0])
                  }}
                />
                <span className='flex flex-col'>
                  <div className='flex flex-col'>
                    <span className='font-semibold'>{item?.title}</span>
                    <span className='text-[#7C7C7C]'>{item?.artistsNames}</span>
                  </div>
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
