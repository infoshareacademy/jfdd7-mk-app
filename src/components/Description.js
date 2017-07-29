import React from 'react'
import './ListSearch.css'
import {Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Description = ({place}) => (
  <Link className="description" to={'/details/' + place.id} key={place.id}>
    <Col xs={10} sm={6} className="main-description">
        <h3>{place.name}
          <div className="distance"> ~ odległość: {place.distance.toFixed(2)} km</div>
        </h3>
        <span>{place.address}</span>
    </Col>
  </Link>
)
export default Description