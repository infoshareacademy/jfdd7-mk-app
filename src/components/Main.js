/**
 * Created by dominikakosiedowska on 06.07.17.
 */
import React from 'react'
import Map from './Map'
import SearchField from "./SearchField";
import './Main.css'

const Main  = () => (
  <div className="div-map">
    <SearchField/>
    <div className="center-block" style={{width: 800, height: 800}}>
    <Map/>
      </div>
  </div>
)
export default Main