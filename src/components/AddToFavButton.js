import React from 'react'
import {Button} from 'react-bootstrap'

const AddToFavButton = ({place, handleFavPlaceClick, handleDeletePlaceClick, favoriteKeys}) => (
  <Button
    className="addToFav"
    onClick={!favoriteKeys.includes(place.id) ? handleFavPlaceClick : handleDeletePlaceClick}
  >
    {favoriteKeys.includes(place.id) ? '-' : '+'}
  </Button>
)
export default AddToFavButton