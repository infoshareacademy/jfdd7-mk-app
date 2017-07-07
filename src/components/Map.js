import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Map extends Component {
  static defaultProps = {
    center: {lat: 54.403351, lng: 18.569951},
    zoom: 15
  };

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={54.403351}
          lng={18.569951}
          text={'Kreyser Avrora'}
        />
      </GoogleMapReact>
    );
  }
}