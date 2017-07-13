import React from 'react'
import MainMenu from './MainMenu'
// import Map from './Map'
import './Main.css'
import SearchField from "./SearchField";


const Main = () => (
<div>

  <div className="mainpage">
    <MainMenu/>
  <section className="mainsection">

    <SearchField/>

  </section>
  </div>
</div>
)
export default Main