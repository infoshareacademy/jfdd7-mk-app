import React from 'react'
import './ListSearch.css'

const ContactObject = ({telephone}) => (
  <text>Kontakt:<a href="tel: 0048 555 55 55">{telephone}</a></text>
)

export default ContactObject