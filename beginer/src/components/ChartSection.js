import React, { memo, useEffect, useState } from 'react'
import { Chart } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import { useSelector } from 'react-redux'

export function ChartSection() {
  const [data, setData] = useState(null)
  const { chart, rank } = useSelector((state) => state.app)
  console.log({ chart, rank })

  const options = {
    responsive: true,
    pointRadius: 0,
    aspectRatio: 4,
    scales: {
      y: {
        ticks: { display: false },
        grid: { borderDash: [4, 4], color: 'rgba(255,255,255,0.5)' }
      },
      x: {
        ticks: { color: 'white' },
        grid: { color: 'transparent' }
      }
    },
    plugins: {
      legend: false
    }
  }

  useEffect(() => {
    const labels = chart?.chart?.times?.filter((item) => +item.hour % 2 == 0).map((item) => item.hour)
    const datasets = []
    if (chart?.items) {
      console.log(chart?.chart?.items[Object.keys(chart?.chart?.items)[0]])
      for (let i = 0; i < 3; i++) {
        datasets.push({
          data: chart?.chart?.items[Object.keys(chart?.chart?.items)[i]]
            .filter((item) => +item.hour % 2 === 0)
            .map((item) => item.counter),
          boderColor: i === 0 ? 'blue' : i === 1 ? 'yellow' : 'red',
          tension: 0.2,
          borderWidth: 2
        })
      }
      setData({ labels, datasets })
    }
  }, [chart])

  return (
    <div className='mt-12 bg-[#461A63] h-[400px] rounded-md p-5'>
      <h3 className='text-3xl text-[#fff] font-sans font-bold'>#Zingchart</h3>
      <div className='flex gap-4'>
        <div className='flex-4'>rank</div>
        <div className='flex-6'>{data && <Line data={data} options={options} />}</div>
      </div>
    </div>
  )
}
export default memo(ChartSection)
