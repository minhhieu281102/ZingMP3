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

export const searchLittleSongs = (id) => async (dispatch) => {
  try {
    const response = await apis.apiGetDetailPlaylist(id)
    console.log(response)
    if (response.data.err === 0) {
      dispatch({ type: actionTypes.PLAYLIST, songs: response.data.data.song.items })
    } else {
      dispatch({ type: actionTypes.PLAYLIST, songs: null })
    }
  } catch (error) {
    dispatch({ type: actionTypes.PLAYLIST, songs: null })
  }
}

export const searchSongs = (singerId) => async (dispatch) => {
  try {
    const response = await apis.apiGetArtistSongs(singerId)
    console.log(response)
    if (response.data.err === 0) {
      dispatch({ type: actionTypes.PLAYLIST, songs: response.data.data.song.items })
    } else {
      dispatch({ type: actionTypes.PLAYLIST, songs: null })
    }
  } catch (error) {
    dispatch({ type: actionTypes.PLAYLIST, songs: null })
  }
}
