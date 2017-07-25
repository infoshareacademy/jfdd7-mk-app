import React from 'react'
import {connect} from 'react-redux'
import {Row, Col, Button} from 'react-bootstrap'
import IconCategory from './IconCategory'
import {Link} from 'react-router-dom'
import Description from './Description'
import ContactObject from './ContactObject'
import {initFavsSync, deleteFav, favPlace} from '../state/favs'
import {fetchPlaces} from '../state/places'

export default connect(
  state => ({
    places: state.places.data,
    favedPlaceIds: state.favs.placeIds
  }),
  dispatch => ({
    initFavsSync: () => dispatch(initFavsSync()),
    fetchPlaces: () => dispatch(fetchPlaces()),
    handleFavPlaceClick: event => dispatch(favPlace(event.target.dataset.uid)),
    handleDeletePlaceClick: event => dispatch(deleteFav(event.target.dataset.uid))
  })
)(
  class Favorites extends React.Component {

    componentWillMount() {
      this.props.initFavsSync()
      this.props.fetchPlaces()

    }


    render() {
      const favoriteKeys = this.props.favedPlaceIds !== null ? Object.keys(this.props.favedPlaceIds) : []
      console.log(this.props.places)
      console.log(favoriteKeys)
      return (
        <div>
          {this.props.places !== null ? this.props.places.filter(place => favoriteKeys.includes(place.id)).map(
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
                                 name={place.name} distance={2.32}/>
                  </Col>
                </Link>

                <Col xs={10} xsOffset={2} smOffset={0} sm={3} className="contact">
                  <ContactObject telephone={place.telephone}/>
                  <Button data-uid={place.id}
                          onClick={this.props.favedPlaceIds[place.id] !== true ? this.props.handleFavPlaceClick : this.props.handleDeletePlaceClick}
                          className="addToFav"
                  >
                    {
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