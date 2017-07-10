import React from 'react'
import {Row, Col } from 'react-bootstrap'
import IconCategory from './IconCategory'
import Description from './Description'
import ContactObject from './ContactObject'
import './ListSearch.css'

export default class ListSearch extends React.Component {

  state = {
    places: []
  }

  componentWillMount() {
    fetch(
      process.env.PUBLIC_URL + '/data/places.json'
    ).then(
      response => response.json()
    ).then(
      places => this.setState({
        places
      })
    )
  }

  render() {
    const placeId = parseInt(this.props.match.params.placeId, 10)
    const place = this.state.places.find(
      place => place.id === placeId
    )

    if (place === undefined) {
      return (
        <div>
          <h1> Not found yet</h1>
        </div>
      )
    }

    return (
      <Row className="info">
        <Col xs={12} lg={2} className="pin">
          <div>
            <IconCategory/>
          </div>
        </Col>

        <Col xs={12} lg={3} className="main-description">
          <Description address={place.address} telephone={place.telephone} website={place.website} mail={place.mail} name={place.name}/>
        </Col>

        <Col xs={12} lg={7} className="contact">
          <ContactObject telephone={place.telephone}/>
        </Col>
      </Row>
    )
  }
}