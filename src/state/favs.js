import firebase from 'firebase'

const SYNC = 'favs/SYNC'

const favsSync = favs => ({
  type: SYNC,
  favs
})

export const initFavsSync = () => dispatch => {
  const userUid = firebase.auth().currentUser.uid
  firebase.database().ref('favs/' + userUid).on(
    'value',
    snapshot => {
      const favs = snapshot.val() || {}
      dispatch(favsSync(favs))
    }
  )
}

export const favPlace = uid => dispatch => {
  const userUid = firebase.auth().currentUser.uid
  const ref = firebase.database().ref('favs/' + userUid + '/placeIds/' + uid)
  ref.set(true)
}

export const deleteFav = uid => dispatch => {
  const userUid = firebase.auth().currentUser.uid
  const ref = firebase.database().ref('favs/' + userUid + '/placeIds/' + uid)
  ref.remove()
}

const initialState = {
  placeIds: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SYNC:
      return {
        ...state,
        placeIds: action.favs.placeIds || null
      }
    default:
      return state
  }
}