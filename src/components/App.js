import React, {Component} from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import './App.css';
import Main from './Main'
import MapSearch from './MapSearch'
import ListSearch from './ListSearch'
import Details from './Details'
import MainMenu from './MainMenu'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <MainMenu/>
          <div className="App">
            <Route exact path="/main"component={Main}/>
            <Route path="/map-search" component={MapSearch}/>
            <Route path="/list-search" component={ListSearch}/>
            <Route path="/details" component={Details}/>
          </div>,
        </div>
      </Router>

    );
  };
}
















