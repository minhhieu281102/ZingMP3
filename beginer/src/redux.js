import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const reduxconfig = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk))
  return store
}

export default reduxconfig
