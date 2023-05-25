import React, { useEffect } from 'react'
import { Slider, Section, NewReleases, WeekRank } from '../../components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ChartSection } from '../../components/ChartSection'

export default function Home() {
  const { energy, famousArtists, chill, albumHot, top100, weekChart } = useSelector((state) => state.app)
  return (
    <div className='overlow-y-auto px-[59px] z-0'>
      <Slider />
      <Section data={chill} />
      <Section data={energy} />
      <NewReleases />
      <ChartSection />
      <Section data={famousArtists} />
      <Section data={top100} />
      <Section data={albumHot} />
      <div className='flex items-center  w-full mt-12 gap-5 '>
        {weekChart?.items?.map((item) => (
          <Link to={item?.link?.split('.')[0]} key={item?.link} className='flex-1 '>
            <img src={item?.cover} alt='' className='w-full object-cover rounded-md ' />
          </Link>
        ))}
      </div>
      <div className='w-full h-[90px]'></div>
    </div>
  )
}
