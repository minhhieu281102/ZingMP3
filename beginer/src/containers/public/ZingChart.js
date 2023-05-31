import React, { useEffect, useState } from 'react'
import { apiGetChartHome } from '../../apis/music'
import List from '../../components/List'
import { Lists } from '../../components/Lists'

export default function ZingChart() {
  const [chartData, setChartData] = useState()
  useEffect(() => {
    const fetchChartHome = async () => {
      const res = await apiGetChartHome()
      setChartData(res?.data?.data)
    }
    fetchChartHome()
  }, [])
  return (
    <div className='px-[59px] mt-10 mb-[90px]'>
      <h1 className='text-[40px] font-bold text-[#7F1FAF] pb-5'>#zingchart</h1>
      {chartData?.RTChart?.items?.map((item, index) => (
        <List key={item.encodeId} songData={item} isHideNote order={index + 1} />
      ))}
    </div>
  )
}
