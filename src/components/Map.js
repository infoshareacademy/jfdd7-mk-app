import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import {connect} from 'react-redux'
import {fetchPlaces} from '../state/places'
import {Link} from 'react-router-dom'
import './Map.css'

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
      const dataToShow = data !== null ? data.filter(place => this.props.searchPhrase === '' ? data : checkString(place.name) || checkArray(place.functions)) : []
      const pointBetween = latOrLng => (Math.max.apply(null, dataToShow.map(place => parseFloat(place[latOrLng]))) + Math.min.apply(null, dataToShow.map(place => parseFloat(place[latOrLng])))) / 2

      const searchCenterLat = pointBetween("latitude")
      const searchCenterLng = pointBetween("longitude")

      const zoomLvl = Math.max.apply(null, dataToShow.map(place => parseFloat(place['latitude']))) - Math.min.apply(null, dataToShow.map(place => parseFloat(place['latitude'])))
      const defaultProps = {
        center: this.props.searchPhrase.length < 1 ? {lat: 54.403334, lng: 18.569786} :
          {
            lat: searchCenterLat,
            lng: searchCenterLng
          },
        zoom: this.props.searchPhrase.length < 1 ? 14 : zoomLvl > 0 ? 12 : 14
      }

      return (
        <GoogleMapReact
          apiKey={'AIzaSyAJcR-ZM6KPN20sN1ECp89Jgi0hqJvQBho'}
          center={defaultProps.center}
          zoom={defaultProps.zoom}
        >
          <div
          lat={54.403351}
          lng={18.569951}
          >You are here</div>

          {dataToShow.map(
            place => (
              <Link
                key={place.id}
                to={'/details/' + place.id}
                lat={parseFloat(place.latitude)}
                lng={parseFloat(place.longitude)}
                // style={placeStyle}
                className="placeStyle"

              >
                <div className="placeNameStyle">
                  {place.name}
                </div>
              </Link>
            ))}

        </GoogleMapReact>
      );
    }
  })