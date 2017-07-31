import React from 'react'
import {connect} from 'react-redux'
import {geolocated} from 'react-geolocated';
import {Row, Col} from 'react-bootstrap'
import {fetchPlaces} from '../state/places'
import {activateFilter} from '../state/activitiesFilter'
import {favPlace, deleteFav, initFavsSync} from '../state/favs'
import IconCategory from './IconCategory'
import Description from './Description'
import ContactObject from './ContactObject'
import './ListSearch.css'
import './SearchField.css'
import MenuFilter from './MenuFilter'
import distanceCalc from './distanceCalc'
import {filters} from './filters'
import AddToFavButton from './AddToFavButton'


export default connect(
  state => ({
    places: state.places,
    searchPhrase: state.searchField.searchPhrase,
    activeFilterNames: state.activitiesFilter.activeFilterNames,
    location: state.searchFilter.location,
    favedPlaceIds: state.favs.placeIds,
    user: state.auth.user

  }),
  dispatch => ({
    fetchPlaces: () => dispatch(fetchPlaces()),
    activateFilter: filterName => dispatch(activateFilter(filterName)),
    handleFavPlaceClick: event => dispatch(favPlace(event.target.dataset.uid)),
    handleDeletePlaceClick: event => dispatch(deleteFav(event.target.dataset.uid)),
    initFavsSync: () => dispatch(initFavsSync()),
  })
)(
  geolocated ({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 100,
  }
  )(
  class ListSearch extends React.Component {

    componentWillMount() {
      this.props.fetchPlaces()
    }

    render() {

      const {data} = this.props.places
      const places = data === null ? [] : data
      const favoriteKeys = this.props.favedPlaceIds !== null ? Object.keys(this.props.favedPlaceIds) : []

      const checkString = string => string.toLowerCase().includes(this.props.searchPhrase.toLowerCase())
      const checkArray = functions =>
        this.props.searchPhrase.toLowerCase()
          .split(' ')
          .every(phrase =>
            functions.join(' ')
              .toLowerCase()
              .includes(phrase))

      const location = (this.props.isGeolocationAvailable && this.props.isGeolocationEnabled)
        ? this.props.coords
          ? {lat: this.props.coords.latitude, lng: this.props.coords.longitude}
          : null
        : {lat: 54.403351, lng: 18.569951}
      if (location === null) {
        return <div>Pobieram Twoją lokalizację</div>
      }


      const filteredPlaces = places.filter(
        place => this.props.activeFilterNames.map(
          filterName => filters[filterName] || (() => true)
        ).every(
          f => f(place) === true
        )
      ).filter(
        place => this.props.searchPhrase === '' && this.props.activeFilterNames.length === 0 ? true : checkString(place.name) || checkArray(place.functions)
      ).map(
        place => ({
          ...place,
          distance: distanceCalc(place.latitude, place.longitude, location.lat, location.lng)
        }))
        .sort((a, b) => a.distance - b.distance)
        .filter(place => place.distance <= this.props.location)

      return (
        <Row>
          <Col sm={4}>
            <MenuFilter/>
          </Col>
          <Col sm={8}>
            {filteredPlaces.length === 0 ? 'Brak wyników dla wybranych kryteriów' :
              filteredPlaces.map(
                place => (
                  <Row key={place.id} className="info">
                    <IconCategory/>
                    <Description place={place}/>
                    <Col
                      xs={10}
                      xsOffset={2}
                      smOffset={0}
                      sm={4} className="contact">
                      <ContactObject telephone={place.telephone}/>
                      {this.props.user === null ? null :
                        <AddToFavButton
                          favoriteKeys={favoriteKeys}
                          place={place}
                          handleFavPlaceClick={this.props.handleFavPlaceClick}
                          handleDeletePlaceClick={this.props.handleDeletePlaceClick}
                          data-active={favoriteKeys.includes(place.id)}
                        >
                        </AddToFavButton>
                      }
                    </Col>
                  </Row>
                )
              )
            }
          </Col>
        </Row>
      )
    }
  })
)