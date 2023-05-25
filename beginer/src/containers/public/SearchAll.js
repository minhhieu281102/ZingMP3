import React from 'react'
import { useSelector } from 'react-redux'
import { search } from '../../store/actions'
import { handleNumber } from '../../ultis/fn'
import { List } from '../../components/List'
import { Section } from '../../components/Section'
import { Navigate, useNavigate } from 'react-router-dom'
import { Artist } from '../../components'

export default function SearchAll() {
  const { searchData } = useSelector((state) => state.music)
  const navigate = useNavigate()
  console.log(searchData)
  return (
    <div className='w-full flex flex-col px-[60px] pb-[90px]'>
      <div className='flex flex-col'>
        <h3 className='text-lg font-bold mb-5'>Nổi bật</h3>
        <div className='flex gap-8 cursor-pointer'>
          {searchData?.top && (
            <div className='p-[10px] flex-1 rounded-md flex gap-8 items-center bg-[#F2F2F2]'>
              <img src={searchData.top.thumbnail} alt='' className={`w-[84px] h-[84px] object-cover rounded-md `} />
              <div className='flex flex-col text-xs'>
                <span className='mb-[6px]'>{searchData?.top.objectType === 'artist' ? 'Nghệ sĩ' : 'Bài hát'}</span>
                <span className='text-sm font-semibold '>{searchData?.top.title || searchData.top.name}</span>
                {searchData?.top.objectType === 'artist' ? (
                  <span> {handleNumber(searchData?.artists[0]?.totalFollow) + 'quan tâm'}</span>
                ) : (
                  <span>{searchData?.top?.artistsNames}</span>
                )}
              </div>
            </div>
          )}
          {searchData?.songs
            ?.filter((item, index) => [...Array(2).keys()].some((i) => i === index))
            ?.map((item) => (
              <div key={item?.encodeId} className='flex-1'>
                <div className='p-[10px] flex-1 rounded-md flex gap-8 items-center bg-[#F2F2F2]'>
                  <img src={item?.thumbnail} alt='' className={`w-[84px] h-[84px] object-cover rounded-md`} />
                  <div className='flex flex-col text-xs'>
                    <span className='mb-[6px]'>{item?.objectType === 'artist' ? 'Nghệ sĩ' : 'Bài hát'}</span>
                    <span className='text-sm font-semibold '>{item?.title || item.name}</span>
                    <span>{item?.artistsNames}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className='flex flex-col w-full mt-[31px]'>
        <h3 className='text-lg font-bold mb-5'>Bài hát</h3>
        <div className='flex justify-between flex-wrap w-full'>
          {searchData?.songs?.map((item) => (
            <div key={item?.encodeId} className='flex-auto w-[45%]'>
              <List songData={item} isHideAlbum />
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col w-full mt-[31px]'>
        <h3 className='text-lg font-bold mb-5'>Playlist/Album</h3>
        <div className='flex items-start justify-between gap-[28px]'>
          {searchData?.playlists
            ?.filter((item, index) => index <= 4)
            .map((item) => (
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
      <div className='flex flex-col w-full mt-[31px]'>
        <h3 className='text-lg font-bold mb-5'>Nghệ sĩ</h3>
        <div className='flex   gap-[28px]'>
          {searchData?.artists
            ?.filter((i, index) => index < 5)
            ?.map((item) => (
              <Artist
                key={item?.id}
                image={item?.thumbnailM}
                title={item?.name}
                follower={item?.totalFollow}
                link={item?.link}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
