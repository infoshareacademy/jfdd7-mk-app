import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { fetchPlaces } from '../state/places'
import { activateFilter } from '../state/activitiesFilter'
import {favPlace, deleteFav} from '../state/favs'
import IconCategory from './IconCategory'
import Description from './Description'
import ContactObject from './ContactObject'
import './ListSearch.css'
import './SearchField.css'
import SearchField from './SearchField'
import MenuFilter from './MenuFilter'

export default connect(
  state => ({
    places: state.places,
    searchPhrase: state.searchField.searchPhrase,
    activeFilterNames: state.activitiesFilter.activeFilterNames,
    favedPlaceIds: state.favs.placeIds
  }),
  dispatch => ({
    fetchPlaces: () => dispatch(fetchPlaces()),
    activateFilter: filterName => dispatch(activateFilter(filterName)),
    handleFavPlaceClick: event => dispatch(favPlace(event.target.dataset.uid)),
    handleDeletePlaceClick: event => dispatch(deleteFav(event.target.dataset.uid))
  })
)(
  class ListSearch extends React.Component {

    componentWillMount() {
      this.props.fetchPlaces()
    }


    render() {
      function deg2rad(deg) {
        return deg * (Math.PI/180)}

      function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
        var latitude = Number(lat1);
        var longitude = Number(lon1);
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2-latitude);  // deg2rad below
        var dLon = deg2rad(lon2-longitude);
        var a =
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
          Math.sin(dLon/2) * Math.sin(dLon/2)
        ;
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c; // Distance in km
        return d;
      }

      const isFunctionSet = this.props.match.params.function !== undefined
      const {data} = this.props.places

      const places = data === null ? [] : data

      const filters = {
        fitness: place => place.functions.includes('fitness'),
        zajecia_dla_dzieci: place => place.functions.includes('zajecia dla dzieci'),
        solarium: place => place.functions.includes('solarium'),
        sztuki_walki: place => place.functions.includes('sztuki walki'),
        masaz_wodny: place => place.functions.includes('masaz wodny'),
        zumba: place => place.functions.includes('zumba'),
        jacuzzi: place => place.functions.includes('jacuzzi'),
        basen: place => place.functions.includes('basen'),
        kregle: place => place.functions.includes('kregle'),
        scianka_wspinaczkowa: place => place.functions.includes('scianka wspinaczkowa'),
        taniec_towarzyski: place => place.functions.includes('taniec towarzyski'),
        sauna: place => place.functions.includes('sauna'),
        silownia: place => place.functions.includes('silownia'),
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
      )

      return (
        <div className="all-description">
          <MenuFilter function={this.props.match.params.function}/>
          <div className="center-block" style={{width: "70%"}}>
            <SearchField/>
          </div>

          { filteredPlaces.filter(
            place => this.props.searchPhrase === '' && this.props.activeFilterNames.length === 0 ? isFunctionSet : checkString(place.name) || checkArray(place.functions)
          ).map(
            place => ({
              ...place,
              distance: getDistanceFromLatLonInKm(place.latitude, place.longitude, 54.403351, 18.569951)
            })
          ).sort((a, b) => a.distance - b.distance).map(
            place => (
                    <Row className="info">
                      <Col xs={2} lg={2} className="pin">
                        <div>
                          <IconCategory/>
                        </div>
                      </Col>
                      <Link to={'/details/' + place.id} key={place.id}>
                      <Col xs={7} lg={7} className="main-description">
                        <Description address={place.address} telephone={place.telephone} website={place.website}
                                     name={place.name} distance={place.distance} />
                      </Col>
                      </Link>

                      <Col xs={10} xsOffset={2} smOffset={0} sm={3} className="contact">
                        <ContactObject telephone={place.telephone}/>
                        <Button
                          data-uid={place.id}
                          onClick={
                            this.props.favedPlaceIds === place.id ?
                              this.props.handleDeletePlaceClick :
                              this.props.handleFavPlaceClick} className="addToFav"
                        >
                          +
                        </Button>
                      </Col>
                    </Row>
                )
              )
          }
        </div>
      )
    }
  })