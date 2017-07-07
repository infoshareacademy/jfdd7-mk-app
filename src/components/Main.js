/**
 * Created by dominikakosiedowska on 06.07.17.
 */
import React from 'react'
import Map from './Map'
import SearchField from "./SearchField";
import './Main.css'


const Main = () => (
  <div>
    <div className="main-map-style">
      <Map>
        <SearchField/>
      </Map>
    </div>

  </div>
)
export default Main