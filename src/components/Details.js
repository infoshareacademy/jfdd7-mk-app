import React from 'react'
import {connect} from 'react-redux'
import {
    Row,
    Col,
    Grid,
} from'react-bootstrap'
import {fetchPlaces} from '../state/places'
import CarouselDetails from './CarouselDetails'
import ObjectName from './ObjectName'
import ObjectDetails from './ObjectDetails'
import MapDetails from './MapDetails'
import ActivitiesDetails from './ActivitiesDetails'
import OpenTime from './OpenTime'
import './Details.css'


export default connect(
    state => ({
        places: state.places
    }),
    dispatch => ({
        fetchPlaces: () => dispatch(fetchPlaces())
    })
)(
    class Details extends React.Component {
        componentWillMount() {
            this.props.fetchPlaces()
        }


        render() {
            const {data} = this.props.places
            const placeId = parseInt(this.props.match.params.placeId, 10)
            const place = data === null ? undefined : data.find(
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
                <Grid>
                    <Row>
                        <Col>
                            <CarouselDetails/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>

                            <ObjectName className ="Object__Name" name={place.name}/>
                            <OpenTime place={place} />

                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <Row>
                                <ObjectDetails className ="Object__Details" address={place.address} telephone={place.telephone} mail={place.mail}
                                               website={place.website}/>
                            </Row>
                            <Row>
                                <ActivitiesDetails activities={place.functions}/>

                            </Row>
                        </Col>

                        <Col sm={6}>

                            <Row>
                                <div style={{width: '100%', height: 250}}>
                                    <MapDetails name={place.name} latitude={parseFloat(place.latitude)}
                                                longitude={parseFloat(place.longitude)}/>
                                </div>
                            </Row>
                        </Col>

                    </Row>

                </Grid>
            )
        }
    }
)



