import React from 'react'
import {Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import IconCategory from './IconCategory'
import Description from './Description'
import ContactObject from './ContactObject'
import './ListSearch.css'

export default class ListSearch extends React.Component {

  state = {
    places: null
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
    console.log(this.state)
    return (
      <div className="all-description">

        {
          this.state.places === null ?
            null :
            this.state.places.map(
              place => (
                <Link to={'/places/' + place.id}>
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
}