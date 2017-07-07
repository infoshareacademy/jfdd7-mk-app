/**
 * Created by dominikakosiedowska on 06.07.17.
 */
import React from 'react'
import Map from './Map'
import SearchField from "./SearchField";

const Main  = () => (
  <div>
    Main
    <SearchField/>
    <div style={{width: 800, height: 800}}>
          <Map/>
      </div>
  </div>
)
export default Main