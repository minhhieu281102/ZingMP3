import React, { useEffect } from 'react'
import { Slider, Section, NewReleases } from '../../components'
import { useSelector } from 'react-redux'

export default function Home() {
  const { energy, famousArtists, chill, albumHot, top100 } = useSelector((state) => state.app)
  return (
    <div className='overlow-y-auto px-[59px] z-0'>
      <Slider />
      <Section data={chill} />
      <Section data={energy} />
      <NewReleases />
      <Section data={famousArtists} />
      <Section data={top100} />
      <Section data={albumHot} />
      <div className='w-full h-[90px]'></div>
    </div>
  )
}
