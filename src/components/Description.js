import React from 'react'
import './ListSearch.css'

const Description = ({address, website, name}) => (
  <section className="description">
    <h3>{name} {/*<span className="distance"> ~ odległość: 0,3 km </span>*/}</h3>
    <span>{address}</span>
    <div className="website">
      <a href={website}>{website}</a>
    </div>
  </section>
)
export default Description