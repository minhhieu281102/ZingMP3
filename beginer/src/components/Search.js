import React, { useState } from 'react'
import icons from '../ultis/icons'
import { apiSearch } from '../apis'
import * as actions from '../store/actions'
import { useNavigate, createSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import path from '../ultis/path'

const { CiSearch, GrClose } = icons
export default function Search() {
  const [keyword, setKeyword] = useState()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSearch = async (e) => {
    if (e.keyCode === 13) {
      dispatch(actions.search(keyword))
      navigate({
        pathname: `/${path.SEARCH}/${path.ALL}`,
        search: createSearchParams({
          q: keyword
        }).toString()
      })
    }
  }
  return (
    <div className='flex relative'>
      {keyword && (
        <span onClick={() => setKeyword('')} className='absolute right-[16px] top-[13px] cursor-pointer'>
          <GrClose />
        </span>
      )}
      <span className='h-10 pl-4 bg-[#F2F2F2] flex rounded-l-[20px] items-center justify-center text-gray-700'>
        <CiSearch size={24} />
      </span>
      <input
        type='text'
        className='outline-none bg-[#F2F2F2] px-4 py-2 rounded-r-[20px] h-10 w-full text-gray-700'
        placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...'
        value={keyword || ''}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyUp={handleSearch}
      />
    </div>
  )
}
