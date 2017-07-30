import React, {Component} from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import {Grid, Row, Col} from 'react-bootstrap'
import './App.css';
import Main from './Main'
import MapSearch from './MapSearch'
import ListSearch from './ListSearch'
import Details from './Details'
import MainMenu from './MainMenu'
import Favorites from './Favorites'
import {connect} from 'react-redux'

export default connect(
  state => ({
    user: state.auth.user
  })
)(class App extends Component {
    render() {
      return (

        <Router>
          <Grid>
            <Row>
              <Route path="/" component={MainMenu}/>
            </Row>
            <Row>

              <Col sm={12}>
                <div className="App">
                  <Route exact path="/" component={MapSearch}/>
                  <Route path="/logowanie" component={Main}/>
                  <Route path="/map-search" component={MapSearch}/>
                  <Route exact path="/list-search" component={ListSearch}/>
                  <Route path="/details/:placeId" component={Details}/>
                  <Route path="/favorites" component={this.props.user !== null ? Favorites : ListSearch}/>
                </div>
              </Col>
            </Row>
          </Grid>

        </Router>

      );
    };
  }
)