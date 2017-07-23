import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import localstorage from 'redux-localstorage'


import places from './state/places'
import searchField from './state/searchField'
import activitiesFilter from './state/activitiesFilter'
import searchFilter from './state/searchFilter'
import auth from './state/auth'

const reducer = combineReducers({
  places,
  searchField,
  activitiesFilter,
  searchFilter,
  auth
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(
    thunk
  ),
  localstorage(['auth'], { key: 'userLoggedIn'})
))

export default store