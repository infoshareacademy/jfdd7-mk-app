import React from 'react';
import GoogleMapReact from 'google-map-react'
import marker from '../images/marker.png'
import './Map.css'

const Pin = ({ name, lat, lng, marker }) => <div className="placeStyle"><div className="placeNameStyle">{name}</div></div>;

const MapDetails = ({latitude, longitude, name}) => (
    <GoogleMapReact
        apiKey={'AIzaSyAJcR-ZM6KPN20sN1ECp89Jgi0hqJvQBho'}
        defaultCenter={{lat: latitude, lng: longitude}}
        defaultZoom={15}
    >
        <Pin

          lat={latitude}
          lng={longitude}
          name={name}
          marker={marker}
        />
    </GoogleMapReact>
)
export default MapDetails
