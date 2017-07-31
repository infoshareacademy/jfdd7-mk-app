import React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import {Row, Col} from 'react-bootstrap'
import {connect} from 'react-redux'
import {updateLocation} from '../state/searchFilter'
import './LocationFilter.css'

const MAX_LOCATION = 40000;
export default connect(
  state => ({
    location: state.searchFilter.location,
    sliderDisabled: false,
  }),
  dispatch => ({
    updateLocation: (location) => dispatch(updateLocation(location))
  })
)(
  class LocationFilter extends React.Component {

    render() {
      const handleSliderChange = (value) => {
        if (this.state && this.state.sliderDisabled) {
          this.props.updateLocation(MAX_LOCATION)
        } else {
          this.props.updateLocation(value)
        }
      }
      const handleCheckboxChange = (element) => {
        if (element.target.checked) {
          this.props.updateLocation(1);
          this.setState({sliderDisabled: false})
        } else {
          this.setState({sliderDisabled: true}, () => {
            this.props.updateLocation(MAX_LOCATION)
          })
        }
        return;
      }
      return (
        <div>
          <Col xs={12} sm={5} className="div-location-filter">
            <Row>
              <h6> Wybierz odległość:
                <span> {this.props.location === MAX_LOCATION ? "brak limitu" : this.props.location + " km"}</span></h6>
            </Row>
            <Row>
              <input type="checkbox" className="location-check" checked={this.state === null || !this.state.sliderDisabled}
                     onChange={handleCheckboxChange}/>
              <Slider max={30} min={1} value={this.props.location} onChange={handleSliderChange}
                      disabled={this.state && this.state.sliderDisabled}/>
            </Row>
          </Col>
        </div>
      )
    }
  }
)