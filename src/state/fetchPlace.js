import places from 'places'

const result = places(
  'students',
  process.env.PUBLIC_URL + '/data/places.json'
)

export const fetchPlace = result.fetchData
export default result.reducer