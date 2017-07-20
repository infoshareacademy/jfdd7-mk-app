const TOGGLE_FILTER = 'activitiesFilters/TOGGLE_FILTER'

export const activateFilter = filterName => ({
  type: TOGGLE_FILTER,
  filterName
})

const initialState = {
  activeFilterNames: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_FILTER:
      return {
        ...state,
        activeFilterNames: state.activeFilterNames.includes(action.filterName) ?
          state.activeFilterNames.filter(
            filterName => filterName !== action.filterName
          ) :
          state.activeFilterNames.concat(
            action.filterName
          )
      }
    default:
      return state
  }
}