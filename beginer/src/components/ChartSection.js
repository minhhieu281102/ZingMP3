import React, { memo, useEffect, useState } from 'react'
import { Chart } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import RankSong from './RankSong'
import icons from '../ultis/icons'
import { Link } from 'react-router-dom'
import path from '../ultis/path'

export function ChartSection() {
  const { TbPlayerPlayFilled } = icons
  const [data, setData] = useState(null)
  const { chart, rank } = useSelector((state) => state.app)
  console.log({ chart, rank })

  const options = {
    responsive: true,
    pointRadius: 0,
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: { display: false },
        grid: { color: 'rgba(255,255,255,0.1)', drawTicks: false },
        min: chart?.chart?.minScore,
        max: chart?.chart?.maxScore,
        border: { dash: [3, 4] }
      },
      x: {
        ticks: { color: 'white' },
        grid: { color: 'transparent' }
      }
    },
    plugins: {
      legend: false,
      tooltip: {
        enabled: false
      }
    },
    hover: {
      mode: 'dataset',
      intersect: false
    }
  }

  useEffect(() => {
    const labels = chart?.times?.filter((item) => +item.hour % 2 === 0).map((item) => item.hour)
    const datasets = []
    if (chart?.items) {
      for (let i = 0; i < 3; i++) {
        datasets.push({
          data: chart?.items[Object.keys(chart?.items)[i]]
            .filter((item) => +item.hour % 2 === 0)
            .map((item) => item.counter),
          borderColor: i === 0 ? '#4a90e2' : i === 1 ? '#50e3c2' : '#e35050',
          tension: 0.2,
          borderWidth: 2,
          pointBackgroundColor: 'white',
          pointHoverRadius: 4,
          pointBorderColor: i === 0 ? '#4a90e2' : i === 1 ? '#50e3c2' : '#e35050',
          pointHoverBorderWidth: 4
        })
      }
      setData({ labels, datasets })
    }
  }, [chart, rank])

  return (
    <div className='mt-12 bg-[#461A63] h-[414px] rounded-md p-5 '>
      <Link to={path.ZING_CHART} className='flex gap-2 items-center cursor-pointer'>
        <h3 className='text-3xl text-[#fff] font-sans font-bold'>#Zingchart</h3>
        <span className=' bg-[#fff] rounded-full p-2'>
          <TbPlayerPlayFilled />
        </span>
      </Link>
      <div className='flex gap-4 mt-5'>
        <div className='flex-4 flex flex-col gap-3'>
          {rank
            ?.filter((i, index) => index < 3)
            ?.map((item, index) => (
              <RankSong
                key={item.encodeId}
                thumbnail={item.thumbnail}
                title={item.title}
                artist={item.artistsNames}
                id={item.encodeId}
                rank={index + 1}
                percent={Math.round((+item?.score * 100) / +chart.totalScore)}
              />
            ))}
          <Link
            to={path.ZING_CHART}
            className='text-[#fff] px-4 py-2 rounded-l-full rounded-r-full border m-auto border-[#fff] hover:bg-[#604174] '
          >
            Xem thêm
          </Link>
        </div>
        <div className='flex-6 h-[300px]'>{data && <Line data={data} options={options} />}</div>
      </div>
    </div>
  )
}
export default memo(ChartSection)
