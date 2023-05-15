import { useDispatch, useSelector } from 'react-redux'
import { Home, Login, Public, Personal, Album } from './containers/public'
import { Route, Routes } from 'react-router-dom'
import path from './ultis/path'
import { useEffect } from 'react'
import * as actions from './store/actions/home'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.getHome())
  }, [])
  return (
    <div className=''>
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.MY_MUSIC} element={<Personal />} />
          <Route path={path.ALBUM__TITLE__ID} element={<Album />} />

          <Route path={path.STAR} element={<Home />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
