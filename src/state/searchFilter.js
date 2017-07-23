const UPDATE_LOCATION = 'searchFilter/UPDATE_LOCATION'

export const updateLocation = location => ({
  type: UPDATE_LOCATION,
  location
})

const initialState = {
  location: 1,
}

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case UPDATE_LOCATION:
      return {
        ...state,
        location: action.location
      }
    default:
      return state
  }
}