import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
const reduxconfig = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk))
  const persistor = persistStore(store)

  return { store, persistor }
}

export default reduxconfig
