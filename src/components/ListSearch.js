import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { fetchPlaces } from '../state/places'
import IconCategory from './IconCategory'
import Description from './Description'
import ContactObject from './ContactObject'
import './ListSearch.css'
import SearchField from './SearchField'

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
      const {data} = this.props.places


      const checkString = string => string.toLowerCase().includes(this.props.searchPhrase.toLowerCase())
      const checkArray = functions => this.props.searchPhrase.toLowerCase().split(' ').every(phrase => functions.join(' ').toLowerCase().includes(phrase))


      // console.log(this.state)
      return (
        <div className="all-description">
          <div className="center-block" style={{width: "70%"}}>
            <SearchField />
          </div>


          {data !== null && data.filter(
            place => this.props.searchPhrase === '' ? false : checkString(place.name) || checkArray(place.functions)
          ).map(
            place => (
                  <Link to={'/details/' + place.id}>
                    <Row className="info">
                      <Col xs={12} lg={2} className="pin">
                        <div>
                          <IconCategory/>
                        </div>
                      </Col>

                      <Col xs={12} lg={3} className="main-description">
                        <Description address={place.address} telephone={place.telephone} website={place.website}
                                     name={place.name}/>
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