import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import SearchField from "./SearchField";

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
          text={<h45636>Tu jestes, i kiedys to bedzie ikonka , ale jeszcze nie teraz  ;P</h45636>}
        />
      </GoogleMapReact>
    );
  }
}