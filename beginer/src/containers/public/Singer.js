import React, { useEffect, useState, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { apiGetArtist } from '../../apis/music'
import { List } from '../../components/List'
import { CiGlass } from 'react-icons/ci'

export default function Singer() {
  const ref = useRef()
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

  useEffect(() => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
  }, [singer])
  return (
    <div className='flex flex-col w-full '>
      <div className='relative' ref={ref}>
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
              ?.map((item) => (
                <div key={item?.encodeId} className='flex-auto max-w-[48%]'>
                  <List songData={item} isHideAlbum />
                </div>
              ))}
          </div>
        </div>

        <h3 className='text-lg font-bold mb-5 mt-[31px]'>
          {artistData?.sections?.find((item) => item?.title === 'Single & EP')?.title}
        </h3>
        <div className='flex items-start justify-start gap-[28px]'>
          {artistData?.sections
            ?.find((item) => item?.title === 'Single & EP')
            ?.items?.filter((item, index) => index <= 4)
            ?.map((item) => (
              <div key={item?.encodeId} className='flex flex-col gap-3 flex-1 text-sm w-1/5'>
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
                    <span className='text-[#7C7C7C]'>{item?.releaseDate}</span>
                  </div>
                </span>
              </div>
            ))}
        </div>

        <h3 className='text-lg font-bold mb-5 mt-[31px]'>
          {artistData?.sections?.find((item) => item?.title === 'Tuyển tập')?.title}
        </h3>
        <div className='flex items-start justify-start gap-[28px]'>
          {artistData?.sections
            ?.find((item) => item?.title === 'Tuyển tập')
            ?.items?.filter((item, index) => index <= 4)
            ?.map((item) => (
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

        <h3 className='text-lg font-bold mb-5 mt-[31px]'>
          {artistData?.sections?.find((item) => item?.title === 'Xuất hiện trong')?.title}
        </h3>
        <div className='flex items-start justify-start gap-[28px]'>
          {artistData?.sections
            ?.find((item) => item?.title === 'Xuất hiện trong')
            ?.items?.filter((item, index) => index <= 4)
            ?.map((item) => (
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

        <div className='mt-12'>
          <h3 className='text-lg font-bold mb-5'>{`Về ${artistData?.name}`}</h3>
          <div className='flex gap-8'>
            <img src={artistData?.thumbnailM} alt='' className='w-[45%] flex-none h-[275px] object-cover rounded-md' />
            <div className='flex flex-col gap-2 text-sm'>
              <p dangerouslySetInnerHTML={{ __html: artistData?.biography }} className='text-[#828282]'></p>
              <div className='text-[20px] font-bold '>
                {Number(artistData?.totalFollow.toFixed(1)).toLocaleString()}
              </div>
              <span>Người quan tâm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
