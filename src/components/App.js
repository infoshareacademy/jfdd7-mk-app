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
import LocationFilter from './LocationFilter'
import Favorites from './Favorites'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MainMenu/>
          <div className="App">
            <Route exact path="/" component={Main}/>
            <Route path="/map-search" component={MapSearch}/>
            <Route exact path="/list-search" component={ListSearch}/>
            <Route path="/details/:placeId" component={Details}/>
            <Route path="/list-search/:function" component={ListSearch}/>
            <Route path="/favorites" component={Favorites}/>
          </div>
        </div>
      </Router>

    );
  };
}
















