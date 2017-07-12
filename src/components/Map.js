import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import marker from '../imges/marker.png'
import {connect} from 'react-redux'
import {fetchPlaces} from '../state/places'

export default connect(
  state => ({
    places: state.places
  }),
  dispatch => ({
    fetchPlaces: () => dispatch(fetchPlaces())
  })
) (
  class Map extends Component {

static defaultProps = {
    center: {lat: 54.403351, lng: 18.569951},
    zoom: 15
  };

  componentWillMount() {
    this.props.fetchPlaces()
  }


  render() {
    const {data} = this.props.places
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >

        {data !== null && data.map(
          place => (
            <div
              style={{width: 35, height: 35}}
              lat={parseFloat(place.latitude)}
              lng={parseFloat(place.longitude)}
            >
              <img
                src={marker}
                alt={place.name}
              />
            </div>
          ))}

      </GoogleMapReact>
    );
  }
})