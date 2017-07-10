import React from 'react'
import {
  Row,
  Col
} from'react-bootstrap'
import {Link} from 'react-router-dom'
import Foto from './Foto'
import ObjectName from './ObjectName'
import ObjectDetails from './ObjectDetails'
export default class Details extends React.Component {

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
          <h1>Not found yet...</h1>
        </div>
      )
    }

    return (
      <Row>
        <Col xs={12} md={5} mdPush={7}>
          <ObjectName name={place.name}/>
          <Link to={'/places/' + place.id}>
            {place.name}
          </Link>
          <ObjectDetails address={place.adress} telephone={place.telephone} mail={place.mail} website={place.website}/>
        </Col>
        <Col xs={12} md={7} mdPull={5}>
          <Foto/>
        </Col>
      </Row>
    )
  }
}




