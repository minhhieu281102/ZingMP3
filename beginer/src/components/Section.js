import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'

export function Section({ data, hideTitleAlbum }) {
  const navigate = useNavigate()
  return (
    <div className='mt-12 flex flex-col gap-5'>
      {!hideTitleAlbum && (
        <div className='flex items-center justify-between '>
          <h3 className='text-[20px] font-bold'>{data?.title}</h3>
          <span className='text-xs'>TẤT CẢ</span>
        </div>
      )}
      <div className='flex items-start justify-between gap-[28px]'>
        {data?.items
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
  )
}

export default memo(Section)
