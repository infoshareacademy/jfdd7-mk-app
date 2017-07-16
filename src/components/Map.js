import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import marker from '../images/marker.png'
import {connect} from 'react-redux'
import {fetchPlaces} from '../state/places'
import {Link} from 'react-router-dom'


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

    static defaultProps = {
      center: {lat: 54.403351, lng: 18.569951},
      zoom: 1
    };

    componentWillMount() {
      this.props.fetchPlaces()
    }


    render() {
      const {data} = this.props.places
      const checkString = string => string.toLowerCase().includes(this.props.searchPhrase.toLowerCase())
      const checkArray = functions => this.props.searchPhrase.toLowerCase().split(' ').every(phrase => functions.join(' ').toLowerCase().includes(phrase))
      const placeStyle = {
        width: 35,
        height: 35,
        backgroundImage: `url(${marker})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        top: -35,
        left: -35 / 2

      }


      return (
        <GoogleMapReact
          apiKey={'AIzaSyAJcR-ZM6KPN20sN1ECp89Jgi0hqJvQBho'}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >

          {data !== null && data.filter(
            place => this.props.searchPhrase === '' ? false : checkString(place.name) || checkArray(place.functions)
          ).map(
            place => (
              <Link
                to={'/details/' + place.id}
                lat={parseFloat(place.latitude)}
                lng={parseFloat(place.longitude)}
                style={placeStyle}
              >
              </Link>
            ))}

        </GoogleMapReact>
      );
    }
  })