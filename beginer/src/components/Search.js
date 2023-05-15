import React from 'react'
import icons from '../ultis/icons'

const { CiSearch } = icons
export default function Search() {
  return (
    <div className='flex'>
      <span className='h-10 pl-4 bg-[#F2F2F2] flex rounded-l-[20px] items-center justify-center text-gray-700'>
        <CiSearch size={24} />
      </span>
      <input
        type='text'
        className='outline-none bg-[#F2F2F2] px-4 py-2 rounded-r-[20px] h-10 w-full text-gray-700'
        placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...'
      />
    </div>
  )
}
