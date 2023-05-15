import actionTypes from './actionTypes'
import * as apis from '../../apis'

export const setCurSongId = (id) => ({
  type: actionTypes.SET_CUR_SONG_ID,
  id: id
})

export const play = (flag) => ({
  type: actionTypes.PLAY,
  flag: flag
})
