const SYNC_USER = 'auth/SYNC_USER'

export const syncUser = (user) => ({
  type: SYNC_USER,
  user
})

const initialState = {
  user: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SYNC_USER:
      return {
        ...state,
        user: action.user
      }
    default:
      return state
  }
}