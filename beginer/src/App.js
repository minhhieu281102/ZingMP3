import { useDispatch, useSelector } from 'react-redux'
import {
  Home,
  Login,
  Public,
  Personal,
  Album,
  ZingChart,
  Search,
  SearchAll,
  SearchSongs,
  Singer,
  SearchPlaylist
} from './containers/public'
import { Route, Routes } from 'react-router-dom'
import path from './ultis/path'
import { useEffect, useState } from 'react'
import * as actions from './store/actions/home'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { WeekRank } from './components'
import { apiGetChartHome } from './apis'

function App() {
  const dispatch = useDispatch()
  const [weekChart, setWeekChart] = useState()
  useEffect(() => {
    dispatch(actions.getHome())
    const fetchChartHome = async () => {
      const res = await apiGetChartHome()
      setWeekChart(res?.data?.data?.weekChart)
    }
    fetchChartHome()
  }, [])
  return (
    <div>
      <div className=''>
        <Routes>
          <Route path={path.PUBLIC} element={<Public />}>
            <Route path={path.HOME} element={<Home />} />
            <Route path={path.LOGIN} element={<Login />} />
            <Route path={path.MY_MUSIC} element={<Personal />} />
            <Route path={path.ALBUM__TITLE__ID} element={<Album />} />
            <Route path={path.PLAYLIST__TITLE__ID} element={<Album />} />
            <Route
              path={path.WEEKRANK__TITLE__ID}
              element={<WeekRank weekChart={weekChart && Object.values(weekChart)} />}
            />
            <Route path={path.ZING_CHART} element={<ZingChart />} />
            <Route path={path.HOME__SINGER} element={<Singer />} />
            <Route path={path.HOME_ARTIST__SINGER} element={<Singer />} />
            <Route path={path.SEARCH} element={<Search />}>
              <Route path={path.ALL} element={<SearchAll />} />
              <Route path={path.SONG} element={<SearchSongs />} />
              <Route path={path.PLATLIST_SEARCH} element={<SearchPlaylist />} />
            </Route>

            <Route path={path.STAR} element={<Home />} />
          </Route>
        </Routes>
      </div>
      {/* <ToastContainer /> */}
    </div>
  )
}

export default App
