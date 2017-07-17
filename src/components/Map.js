import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import {connect} from 'react-redux'
import {fetchPlaces} from '../state/places'
import {Link} from 'react-router-dom'
import {placeStyle} from './placeStyle'

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
                <div style={{position:'absolute', top:-13, color: 'black'}}>
                  {place.name}
                  </div>
              </Link>
            ))}

        </GoogleMapReact>
      );
    }
  })