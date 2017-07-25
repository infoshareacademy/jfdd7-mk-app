import React from 'react'
import OpenTime from './OpenTime'


const ObjectName = ({ name, place }) => (
  <h2 className="Object__Name">{name}<OpenTime place={place} /></h2>
)
export default ObjectName