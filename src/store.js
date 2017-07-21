import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import places from './state/places'
import searchField from './state/searchField'
import activitiesFilter from './state/activitiesFilter'
import auth from './state/auth'

const reducer = combineReducers({
  places,
  searchField,
  activitiesFilter,
  auth
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(
    thunk
  )
))

export default store