/**
 * Created by dominikakosiedowska on 06.07.17.
 */
import React from 'react'
import Map from './Map'
import SearchField from "./SearchField";

const Main = () => (
  <div>
    <SearchField/>
    <div style={{width: 1200, height: 800}}>
      <Map>
        <SearchField/>
      </Map>
    </div>
  </div>
)
export default Main