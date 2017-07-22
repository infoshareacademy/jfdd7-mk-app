import React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { updateLocation } from '../state/searchFilter'

export default connect(
  state => ({
    location:state.searchFilter.location
  }),
  dispatch => ({
    updateLocation:(location) => dispatch(updateLocation(location))
  })
)(
  class LocationFilter extends React.Component {
    render() {
      return (
      <div>
        <Col xs={12} sm={6}>
          <h4> Wybierz odległość: </h4>
          <p>{this.props.location} km</p>
          <Slider min={1} max={12} value={this.props.location} onChange={this.props.updateLocation}/>
        </Col>
      </div>
      )
    }
  }
)