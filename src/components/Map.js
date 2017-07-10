import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({text}) => <div>{text}</div>;

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
        {
          this.state.places.map(
            place => (
              <AnyReactComponent
                lat={parseFloat(place.latitiude)}
                lng={parseFloat(place.longitude)}
                text={<h4>{place['place-name']}</h4>}
              />))
        }
      </GoogleMapReact>
    );
  }
}