import React from 'react'
import Map from './Map'
import SearchField from './SearchField'

const MapSearch  = () => (
  <div>
    <SearchField/>
    <div style={{ height: "800px"}}>
      <div className="center-block"
           style={{width: "80%", height: "100%"}}
      >

        <Map/>

      </div>
    </div>

  </div>
)
export default MapSearch