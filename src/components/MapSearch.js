import React from 'react'
import Map from './Map'
import SearchField from './SearchField'

const MapSearch  = () => (
  <div>
    <SearchField mapButtonVisibility="none"/>
    <div style={{ height: "83vh"}}>
      <div className="center-block"
           style={{width: "100%", height: "100%"}}
      >

        <Map/>

      </div>
    </div>

  </div>
)
export default MapSearch