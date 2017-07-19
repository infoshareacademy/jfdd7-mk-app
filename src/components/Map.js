import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import {connect} from 'react-redux'
import {fetchPlaces} from '../state/places'
import {Link} from 'react-router-dom'
import {placeStyle, placeStyleHovered} from './placeStyle'

export default connect(
  state => ({
    places: state.places,
    searchPhrase: state.searchField.searchPhrase
  }),
  dispatch => ({
    fetchPlaces: () => dispatch(fetchPlaces())
  })
)(
  class Map extends Component {

    componentWillMount() {
      this.props.fetchPlaces()
    }


    render() {
      const {data} = this.props.places
      const checkString = string => string.toLowerCase().includes(this.props.searchPhrase.toLowerCase())
      const checkArray = functions => this.props.searchPhrase.toLowerCase().split(' ').every(phrase => functions.join(' ').toLowerCase().includes(phrase))
      const dataToShow = data !== null ? data.filter(place => this.props.searchPhrase === '' ? false : checkString(place.name) || checkArray(place.functions)) : []
      const pointBetween = latOrLng => (Math.max.apply(null, dataToShow.map(place => parseFloat(place[latOrLng]))) + Math.min.apply(null, dataToShow.map(place => parseFloat(place[latOrLng])))) / 2

      const searchCenterLat = pointBetween("latitude")
      const searchCenterLng = pointBetween("longitude")
      console.log(searchCenterLng, searchCenterLat)
      const defaultProps = {
        center: this.props.searchPhrase.length < 1 ? {lat: 54.403334, lng: 18.569786} : {
          lat: searchCenterLat,
          lng: searchCenterLng
        },
        zoom: 12
      }

      return (
        <GoogleMapReact
          apiKey={'AIzaSyAJcR-ZM6KPN20sN1ECp89Jgi0hqJvQBho'}
          center={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >

          {dataToShow.map(
            place => (
              <Link
                to={'/details/' + place.id}
                lat={parseFloat(place.latitude)}
                lng={parseFloat(place.longitude)}
                style={placeStyle}

              >
                <div style={{position: 'absolute', top: 35, color: 'black'}}>
                  {place.name}
                </div>
              </Link>
            ))}

        </GoogleMapReact>
      );
    }
  })