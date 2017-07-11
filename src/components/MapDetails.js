import React from 'react';
import GoogleMapReact from 'google-map-react';

const Pin = ({ name }) => <div>{name}</div>;

const MapDetails = ({latitude, longitude, name}) => (
    <GoogleMapReact
        apiKey={'AIzaSyBngayffPqu7R11fSu2NBzykLk1Fl3ZSF0'}
        defaultCenter={{lat: latitude, lng: longitude}}
        defaultZoom={15}
    >
        <Pin
           lat={latitude}
           lng={longitude}
           name={name}
        />
    </GoogleMapReact>
)
export default MapDetails