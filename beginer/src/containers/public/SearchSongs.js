import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../store/actions'
import { Lists } from '../../components/Lists'

export default function SearchSongs() {
  const { searchData, songs } = useSelector((state) => state.music)
  console.log(searchData)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.searchLittleSongs(searchData?.top?.playlistId))
    console.log(songs)
  }, [searchData])

  return (
    <div className='px-[59px] pb-[90px] '>
      <Lists isHideTime />
    </div>
  )
}
