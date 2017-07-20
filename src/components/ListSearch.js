import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { fetchPlaces } from '../state/places'
import { activateFilter } from '../state/activitiesFilter'
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
    activeFilterNames: state.activitiesFilter.activeFilterNames
  }),
  dispatch => ({
    fetchPlaces: () => dispatch(fetchPlaces()),
    activateFilter: filterName => dispatch(activateFilter(filterName))
  })
)(
  class ListSearch extends React.Component {

    componentWillMount() {
      this.props.fetchPlaces()
    }


    render() {
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
            place => (
                  <Link to={'/details/' + place.id} key={place.id}>
                    <Row className="info">
                      <Col xs={12} lg={2} className="pin">
                        <div>
                          <IconCategory/>
                        </div>
                      </Col>

                      <Col xs={12} lg={3} className="main-description">
                        <Description address={place.address} telephone={place.telephone} website={place.website}
                                     name={place.name} latitude={place.latitude} longitude={place.longitude}/>
                      </Col>

                      <Col xs={12} lg={7} className="contact">
                        <ContactObject telephone={place.telephone}/>
                      </Col>
                    </Row>
                  </Link>
                )
              )
          }
        </div>
      )
    }
  })