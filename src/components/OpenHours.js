import React from 'react'

const OpenHours = ({place}) => (
  <section className="open-hours">
    <h4>Godziny otwarcia</h4>
    <p>Pon-Nie: {place.start_h}:{place.start_m} - {place.end_h}:{place.end_m}</p>
  </section>
)
export default OpenHours