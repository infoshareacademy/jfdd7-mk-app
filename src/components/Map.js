import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import marker from '../images/marker.png'


export default class Map extends Component {


  state = {
    places: [],
  };

  static defaultProps = {
    center: {lat: 54.403351, lng: 18.569951},
    zoom: 15
  };

  componentWillMount() {
    fetch(
      process.env.PUBLIC_URL + '/places.json'
    ).then(
      response => response.json()
    ).then(
      places => this.setState({
        places: places
      })
    ).catch(
      error => console.log(error.message)
    )
  }


  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >

        {this.state.places.map(
            place => (
              <div style = {{width: 35, height: 35 }} lat={parseFloat(place.latitiude)} lng={parseFloat(place.longitude)}>
                <img src={marker} alt={place.name}/>
              </div>
            ))}

      </GoogleMapReact>
    );
  }
}