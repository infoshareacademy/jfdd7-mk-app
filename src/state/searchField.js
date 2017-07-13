const UPDATE_SEARCH_PHRASE = 'searchField/UPDATE_SEARCH_PHRASE'

export const updateSearchPhrase = searchPhrase => ({
  type: UPDATE_SEARCH_PHRASE,
  searchPhrase
})

const initialState = {
  searchPhrase: ''
}

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case UPDATE_SEARCH_PHRASE:
      return {
        ...state,
        searchPhrase: action.searchPhrase
      }
    default:
      return state
  }
}