import React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { updateLocation } from '../state/searchFilter'
import './LocationFilter.css'

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
        <Col xs={12} sm={7} className="div-location-filter">
          <h6> Wybierz odległość:</h6>
          <p> {this.props.location} km</p>
          <Slider max={12} min={1} value={this.props.location} onChange={this.props.updateLocation}/>
        </Col>
      </div>
      )
    }
  }
)