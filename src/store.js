import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import places from './state/places'
import searchField from './state/searchField'
import activitiesFilter from './state/activitiesFilter'

const reducer = combineReducers({
  places,
  searchField,
  activitiesFilter
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(
    thunk
  )
))

export default store