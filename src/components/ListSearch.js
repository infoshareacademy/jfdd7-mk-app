import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { fetchPlaces } from '../state/places'
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
    searchPhrase: state.searchField.searchPhrase

  }),
  dispatch => ({
    fetchPlaces: () => dispatch(fetchPlaces())
  })
)(
  class ListSearch extends React.Component {

    componentWillMount() {
      this.props.fetchPlaces()
    }


    render() {
      const isFunctionSet = this.props.match.params.function !== undefined
      const {data} = this.props.places
      const places = isFunctionSet && data !== null ? data.filter(place => place.functions.indexOf(this.props.match.params.function) !== -1) : data;


      const checkString = string => string.toLowerCase().includes(this.props.searchPhrase.toLowerCase())
      const checkArray = functions => this.props.searchPhrase.toLowerCase().split(' ').every(phrase => functions.join(' ').toLowerCase().includes(phrase))


      // console.log(this.state)
      return (
        <div className="all-description">
          <MenuFilter function={this.props.match.params.function}/>
          <div className="center-block" style={{width: "70%"}}>
            <SearchField />
          </div>


          {places !== null && places.filter(
            place => this.props.searchPhrase === '' ? isFunctionSet : checkString(place.name) || checkArray(place.functions)
          ).map(
            place => (
                  <Link to={'/details/' + place.id} key={place.id}>
                    <Row className="info">
                      <Col xs={12} lg={2} className="pin">
                        <div>
                          <IconCategory/>
                        </div>
                      </Col>

                      <Col xs={12} lg={6} className="main-description">
                        <Description address={place.address} telephone={place.telephone} website={place.website}
                                     name={place.name} latitude={place.latitude} longitude={place.longitude}/>
                      </Col>

                      <Col xs={12} lg={4} className="contact">
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