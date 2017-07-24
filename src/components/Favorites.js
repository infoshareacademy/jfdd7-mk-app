import React from 'react'
import {connect} from 'react-redux'
import {Row, Col, Button} from 'react-bootstrap'
import IconCategory from './IconCategory'
import {Link} from 'react-router-dom'
import Description from './Description'
import ContactObject from './ContactObject'
import {initFavsSync} from '../state/favs'

export default connect(
  state => ({
    places: state.places.data,
    placeIds: state.placeIds
  }),
  dispatch => ({
    initFavsSync: () => dispatch(initFavsSync())
  })
)(
  class Favorites extends React.Component {

    componentWillMount(){
      this.props.initFavsSync()
    }

    render() {
      return (
        <div>
          {this.props.places !== null ? this.props.places.filter(place => this.props.placeIds.includes(place.id)).map(
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
                                 name={place.name} distance={place.distance}/>
                  </Col>
                </Link>

                <Col xs={10} xsOffset={2} smOffset={0} sm={3} className="contact">
                  <ContactObject telephone={place.telephone}/>
                  <Button data-uid={place.id} onClick={this.props.handleFavPlaceClick} className="addToFav">{
                    this.props.favedPlaceIds === null ?
                      '...' :
                      this.props.favedPlaceIds[place.id] !== true ?
                        '+' : '-'
                  }
                  </Button>
                </Col>
              </Row>
            )
          ) : null}
        </div>
      )
    }
  }
)