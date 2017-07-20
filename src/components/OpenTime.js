import React from 'react'
import { connect } from 'react-redux'
import { fetchPlaces } from '../state/places'
import * as moment from 'moment'

export default connect(
  state => ({
    places: state.places
  }),
  dispatch => ({
    fetchPlaces: () => dispatch(fetchPlaces()),
  })
)(
  class OpenTime extends React.Component {

    componentWillMount() {
      this.props.fetchPlaces()
    }
  }
render()
const {data} = this.props.places
const start =
  data => place.map(
    place => place.start_h
  )
const end =
  data => place.map(
    place => place.end_h
  )
const now = moment.toObject()

)






export default OpenTime
