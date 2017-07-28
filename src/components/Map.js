import React, {Component} from 'react';
import {connect} from 'react-redux'
import GoogleMapReact from 'google-map-react';
import {fetchPlaces} from '../state/places'
import {activateFilter} from '../state/activitiesFilter'
import distanceCalc from './distanceCalc'
import './Map.css'
import MapPin from './MapPin'

export default connect(
  state => ({
    places: state.places,
    searchPhrase: state.searchField.searchPhrase,
    activeFilterNames: state.activitiesFilter.activeFilterNames,
    location: state.searchFilter.location,
  }),
  dispatch => ({
    fetchPlaces: () => dispatch(fetchPlaces()),
    activateFilter: filterName => dispatch(activateFilter(filterName))
  })
)(
  class Map extends Component {

    componentWillMount() {
      this.props.fetchPlaces()
    }


    render() {
      const {data} = this.props.places

      const places = data === null ? [] : data

      const filters = {
        fitness: place => place.functions.includes('fitness'),
        zajecia_dla_dzieci: place => place.functions.includes('zajęcia dla dzieci'),
        solarium: place => place.functions.includes('solarium'),
        sztuki_walki: place => place.functions.includes('sztuki walki'),
        masaz_wodny: place => place.functions.includes('masaż wodny'),
        zumba: place => place.functions.includes('zumba'),
        jacuzzi: place => place.functions.includes('jacuzzi'),
        basen: place => place.functions.includes('basen'),
        kregle: place => place.functions.includes('kręgle'),
        scianka_wspinaczkowa: place => place.functions.includes('ścianka wspinaczkowa'),
        taniec_towarzyski: place => place.functions.includes('taniec towarzyski'),
        sauna: place => place.functions.includes('sauna'),
        silownia: place => place.functions.includes('siłownia'),
        crossfit: place => place.functions.includes('crossfit')
      }

      const checkString = string => string.toLowerCase().includes(this.props.searchPhrase.toLowerCase())
      const checkArray = functions => this.props.searchPhrase.toLowerCase().split(' ').every(phrase => functions.join(' ').toLowerCase().includes(phrase))

      const filteredPlaces = places.filter(
        place => this.props.activeFilterNames.map(
          filterName => filters[filterName] || (() => true)
        ).every(
          f => f(place) === true
        )
      ).filter(place => this.props.searchPhrase === '' ? data : checkString(place.name) || checkArray(place.functions)
      ).map(
        place => ({
          ...place,
          distance: distanceCalc(place.latitude, place.longitude, 54.403351, 18.569951)
        }))
        .filter(place => place.distance <= this.props.location)


      const pointBetween = latOrLng => (Math.max.apply(null, filteredPlaces.map(place => parseFloat(place[latOrLng]))) + Math.min.apply(null, filteredPlaces.map(place => parseFloat(place[latOrLng])))) / 2

      const searchCenterLat = pointBetween("latitude")
      const searchCenterLng = pointBetween("longitude")

      const zoomLvl = Math.max.apply(null, filteredPlaces.map(place => parseFloat(place['latitude']))) - Math.min.apply(null, filteredPlaces.map(place => parseFloat(place['latitude'])))
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
          {filteredPlaces.map(
            place => (
                <MapPin
                  lat={parseFloat(place.latitude)}
                  lng={parseFloat(place.longitude)}
                  place={place}
                />
            ))}

        </GoogleMapReact>
      );
    }
  })