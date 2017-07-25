import React from 'react'
import './ListSearch.css'

const ContactObject = ({telephone}) => (
  <text>Kontakt:<a href={telephone}>{telephone}</a></text>
)

export default ContactObject