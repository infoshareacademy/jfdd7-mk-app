import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import places from './state/places'
import fetchPlace from './state/fetchPlace'
import searchField from './state/searchField'

const reducer = combineReducers({
  places,
  fetchPlace,
  searchField,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(
    thunk
  )
))

export default store