import React, { memo } from 'react'
import { Audio } from 'react-loader-spinner'

export function AudioLoading() {
  return (
    <div>
      <Audio
        height='100'
        width='100'
        color='white'
        ariaLabel='audio-loading'
        wrapperStyle={{}}
        wrapperClass='wrapper-class'
        visible={true}
      />
    </div>
  )
}

export default memo(AudioLoading)
