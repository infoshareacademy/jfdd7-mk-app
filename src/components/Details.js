import React from 'react'
import {connect} from 'react-redux'
import {
  Row,
  Col,
} from'react-bootstrap'
import {fetchPlaces} from '../state/places'
import {favPlace, deleteFav} from '../state/favs'
import CarouselDetails from './CarouselDetails'
import ObjectName from './ObjectName'
import ObjectDetails from './ObjectDetails'
import OpenHours from './OpenHours'
import MapDetails from './MapDetails'
import ActivitiesDetails from './ActivitiesDetails'
import './Details.css'


export default connect(
  state => ({
    places: state.places,
    favedPlaceIds: state.favs.placeIds
  }),
  dispatch => ({
    fetchPlaces: () => dispatch(fetchPlaces()),
    handleFavPlaceClick: event => dispatch(favPlace(event.target.dataset.uid)),
    handleDeletePlaceClick: event => dispatch(deleteFav(event.target.dataset.uid))
  })
)(
  class Details extends React.Component {

    componentWillMount() {
      this.props.fetchPlaces()
    }


    render() {
      const {data} = this.props.places
      const placeId = this.props.match.params.placeId
      const place = data === null ? undefined : data.find(
        place => place.id === placeId
      )
      const favoriteKeys = this.props.favedPlaceIds !== null ? Object.keys(this.props.favedPlaceIds) : []


      if (place === undefined) {
        return (
          <div>
            <h1>Not found yet...</h1>
          </div>
        )
      }

      return (
        <div>
          <Row>
            <Col>
              <CarouselDetails place={place}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <ObjectName
                className="Object__Name"
                name={place.name} place={place}
                handleFavPlaceClick={this.props.handleFavPlaceClick}
                handleDeletePlaceClick={this.props.handleDeletePlaceClick}
                favoriteKeys={favoriteKeys}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Row>
                <ObjectDetails className="Object__Details" address={place.address} telephone={place.telephone}
                               mail={place.mail}
                               website={place.website}/>
              </Row>
              <Row>
                <ActivitiesDetails activities={place.functions}/>

              </Row>
            </Col>

            <Col sm={6}>
              <Row>
                <OpenHours className="Open__Hours" place={place}/>
              </Row>
              <Row>
                <Col xs={12}>
                  <div style={{width: '100%', height: 250, border: '1px solid lightgrey'}}>
                    <MapDetails name={place.name} latitude={parseFloat(place.latitude)}
                                longitude={parseFloat(place.longitude)}/>
                  </div>
                </Col>
              </Row>
            </Col>

          </Row>

        </div>
      )
    }
  }
)



