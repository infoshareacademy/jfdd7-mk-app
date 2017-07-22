import React from 'react'
import Moment from 'moment';
import { extendMoment } from 'moment-range'
import './iconmonstr-iconic-font-1.2.0/iconmonstr-iconic-font-1.2.0/css/iconmonstr-iconic-font.min.css'

const OpenTime = ({ place }) => {
  const moment = extendMoment(Moment)
  const now = moment()
  const start = moment().hours(place.start_h).minutes(place.start_m)
  const end = moment().hours(place.end_h).minutes(place.end_m)
  const openingRange = moment().range(start, end)
  const isOpen = openingRange.contains(now)

  return(
    <span>
      {isOpen ? <i className="im im-clock-o" style={{color:"green"}}/> : <i className="im im-clock-o" style={{color: "red"}}/>}
    </span>
  )
}
export default OpenTime