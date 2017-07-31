import React from 'react'
import {Button} from 'react-bootstrap'

const AddToFavButton = ({place, handleFavPlaceClick, handleDeletePlaceClick, favoriteKeys}) => (
  <button
    className="addToFav"
    onClick={!favoriteKeys.includes(place.id) ? handleFavPlaceClick : handleDeletePlaceClick}
    data-uid={place.id}
    data-active={favoriteKeys.includes(place.id)}
  >

  </button>
)
export default AddToFavButton