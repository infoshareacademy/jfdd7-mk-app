import React from 'react'
import Moment from 'moment';
import { extendMoment } from 'moment-range'

const OpenTime = ({ place }) => {
  const moment = extendMoment(Moment)
  const now = moment()
  const start = moment().hours(place.start_h).minutes(place.start_m)
  const end = moment().hours(place.end_h).minutes(place.end_m)
  const openingRange = moment().range(start, end)
  const isOpen = openingRange.contains(now)

  return(
    <figure>
      {isOpen ? <img src='../images'>}
    </figure>
  )
}
export default OpenTime