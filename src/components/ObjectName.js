import React from 'react'
import OpenTime from './OpenTime'
import AddToFavButton from './AddToFavButton'


const ObjectName = ({name, place, favoriteKeys, handleFavPlaceClick, handleDeletePlaceClick}) => (
  <div className="objectNameBlock">
    <h2 className="Object__Name">
      {name}

      <OpenTime place={place}/>
    </h2>
    <AddToFavButton favoriteKeys={favoriteKeys}
                    data-uid={place.id}
                    place={place}
                    handleFavPlaceClick={handleFavPlaceClick}
                    handleDeletePlaceClick={handleDeletePlaceClick}
                    id="detailsFav"
    >
      {favoriteKeys.includes(place.id) ? '-' : '+'}
    </AddToFavButton>
  </div>

)
export default ObjectName