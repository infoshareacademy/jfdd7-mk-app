import React, {Component} from 'react';

import './App.css';
import Main from './Main'
import MapSearch from './MapSearch'
import ListSearch from './ListSearch'
import Details from './Details'

class App extends Component {
  render() {
    return (
      <div className="App">
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
