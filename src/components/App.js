import React, {Component} from 'react';

import './App.css';
import Main from './Main'
import MapSearch from './MapSearch'
import ListSearch from './ListSearch'
import Details from './Details'
import Map from './Map'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{width: 800, height: 800}}>
          <Map>
          </Map>
        </div>
        <Main/>
        <hr/>
        <MapSearch/>
        <hr/>
        <ListSearch/>
        <hr/>
        <Details/>

      </div>
    );
  }
}

export default App;
