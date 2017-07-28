import React from 'react'
import {Link} from 'react-router-dom'


const MapPin = ({place}) => {

  return (
    <div>
      <Link
        key={place.id}
        to={'/details/' + place.id}
        className="placeStyle"

      >
        <div className="placeNameStyle">
          {place.name}
        </div>
      </Link>
    </div>
  )
}

export default MapPin