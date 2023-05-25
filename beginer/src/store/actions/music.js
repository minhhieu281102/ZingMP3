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

export const playAlbum = (flag) => ({
  type: actionTypes.SET_ALBUM,
  flag: flag
})

export const setPlaylist = (songs) => ({
  type: actionTypes.PLAYLIST,
  songs
})

export const search = (keyword) => async (dispatch) => {
  try {
    const response = await apis.apiSearch(keyword)
    if (response.data.err === 0) {
      dispatch({ type: actionTypes.SEARCH, data: response.data.data, keyword })
    } else {
      dispatch({ type: actionTypes.SEARCH, data: null })
    }
  } catch (error) {
    dispatch({ type: actionTypes.SEARCH, data: null })
  }
}
