import actionTypes from '../actions/actionTypes'

const initState = {
  banner: [],
  energy: {},
  famousArtists: {},
  chill: {},
  albumHot: {},
  top100: {},
  newReleases: {},
  weekChart: {},
  chart: {}
}

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_HOME:
      return {
        ...state,
        banner: action.homeData?.find((item) => item.sectionId === 'hSlider')?.items || null,
        energy: action.homeData?.find((item) => item.sectionId === 'hEditorTheme2') || {},
        famousArtists: action.homeData?.find((item) => item.sectionId === 'hArtistTheme') || {},
        chill: action.homeData?.find((item) => item.sectionId === 'hEditorTheme') || {},
        albumHot: action.homeData?.find((item) => item.sectionId === 'hAlbum') || {},
        top100: action.homeData?.find((item) => item.sectionId === 'h100') || {},
        newReleases: action.homeData?.find((item) => item.sectionType === 'new-release') || {},
        weekChart: action.homeData?.find((item) => item.sectionType === 'weekChart') || {},
        chart: action.homeData?.find((item) => item.sectionType === 'RTChart') || {}
      }

    default:
      return state
  }
}

export default appReducer
