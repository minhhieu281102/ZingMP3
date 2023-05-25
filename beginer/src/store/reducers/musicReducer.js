import actionTypes from '../actions/actionTypes'

const initState = {
  curSongId: null,
  isPlaying: false,
  atAlbum: false,
  songs: null,
  searchData: {},
  keyword: ''
}

const musicReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_CUR_SONG_ID:
      return {
        ...state,
        curSongId: action.id || null
      }

    case actionTypes.PLAY:
      return {
        ...state,
        isPlaying: action.flag
      }
    case actionTypes.SET_ALBUM:
      return {
        ...state,
        atAlbum: action.flag
      }
    case actionTypes.PLAYLIST:
      return {
        ...state,
        songs: action.songs || null
      }
    case actionTypes.SEARCH:
      return {
        ...state,
        searchData: action.data || {},
        keyword: action.keyword || ''
      }
    default:
      return state
  }
}

export default musicReducer
