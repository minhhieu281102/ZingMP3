import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getArrSlider } from '../ultis/fn'
import * as actions from '../store/actions'
import { useNavigate } from 'react-router-dom'

export default function Slider() {
  const navigate = useNavigate()
  const { banner } = useSelector((state) => state.app)
  const dispatch = useDispatch()

  // animation for banner
  useEffect(() => {
    const sliderEls = document.getElementsByClassName('slider-item')
    let min = 0
    let max = 2
    const intervalId = setInterval(() => {
      const list = getArrSlider(min, max, sliderEls.length - 1)
      for (let i = 0; i < sliderEls.length; i++) {
        // Delete classnames (css)
        sliderEls[i]?.classList?.remove('animate-slide-right', 'order-last', 'z-20', 'hidden')
        sliderEls[i]?.classList?.remove('animate-slide-left', 'order-first', 'z-10', 'hidden')
        sliderEls[i]?.classList?.remove('animate-slide-left2', 'order-2', 'z-10', 'hidden')

        // Hide or Show images
        if (list.some((item) => item === i)) {
          sliderEls[i].style.cssText = `display: block`
        } else {
          sliderEls[i].style.cssText = `display: none`
        }
      }
      // Add animation by adding classnames
      list.forEach((item) => {
        if (item === max) {
          sliderEls[item]?.classList?.add('animate-slide-right', 'order-last', 'z-20')
        } else if (item === min) {
          sliderEls[item]?.classList?.add('animate-slide-left', 'order-first', 'z-10')
        } else {
          sliderEls[item]?.classList?.add('animate-slide-left2', 'order-2', 'z-10')
        }
      })
      min = min === sliderEls.length - 1 ? 0 : min + 1
      max = max === sliderEls.length - 1 ? 0 : max + 1
    }, 4000)
    return () => {
      intervalId && clearInterval(intervalId)
    }
  }, [])

  const handleClickBanner = (item, index) => {
    if (item?.type === 1) {
      dispatch(actions.setCurSongId(item.encodeId))
      dispatch(actions.play(true))
      dispatch(actions.setPlaylist(null))
    } else if (item?.type === 4) {
      const albumPath = item?.link?.split('.')[0]
      navigate(albumPath)
    } else {
      dispatch(actions.setPlaylist(null))
    }
  }

  return (
    <div className='w-full overflow-hidden  z-1'>
      <div className='flex w-full gap-8 pt-8 overflow-x-hidden'>
        {banner?.map((item, index) => (
          <img
            onClick={() => handleClickBanner(item, index)}
            key={item.encodeId}
            src={item.banner}
            className={`slider-item flex-1 object-contain w-[30%] rounded-lg ${
              index <= 2 ? 'block' : 'hidden'
            } cursor-pointer`}
          />
        ))}
      </div>
    </div>
  )
}
