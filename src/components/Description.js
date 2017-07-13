import React from 'react'
import './ListSearch.css'

function deg2rad(deg) {
    return deg * (Math.PI/180)
}

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var latitude = Number(lat1);
    var longitude = Number(lon1);
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-latitude);  // deg2rad below
    var dLon = deg2rad(lon2-longitude);
    var a =
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d;
}



const Description = ({address, website, name, latitude, longitude}) => (
  <section className="description">
    <h3>{name} <span className="distance"> ~ odległość: {getDistanceFromLatLonInKm(latitude, longitude, 54.403351, 18.569951).toFixed(2)} </span></h3>
    <span>{address}</span>
    <div className="website">
      <a href={website}>{website}</a>
    </div>
  </section>
)
export default Description