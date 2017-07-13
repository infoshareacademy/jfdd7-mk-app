import React from 'react'
import {connect} from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {fetchPlaces} from '../state/places'
import IconCategory from './IconCategory'
import Description from './Description'
import ContactObject from './ContactObject'
import './ListSearch.css'

export default connect(
  state => ({
    places: state.places
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


      // console.log(this.state)
      return (
        <div className="all-description">

          {
            data === null ?
              null :
              data.map(
                place => (
                  <Link to={'/details/' + place.id}>
                    <Row className="info">
                      <Col xs={2} md={2} className="pin">
                        <div>
                          <IconCategory/>
                        </div>
                      </Col>

                      <Col xs={5} md={3}  className="main-description">
                        <Description address={place.address} telephone={place.telephone} website={place.website}
                                     name={place.name} latitude={place.latitude} longitude={place.longitude}/>
                      </Col>

                      <Col xs={5} md={3} className="contact">
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