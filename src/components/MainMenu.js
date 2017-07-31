import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {
  LinkContainer,
  IndexLinkContainer
} from 'react-router-bootstrap'
import {
  Navbar,
  Nav,
  NavItem,
} from 'react-bootstrap'
import firebase from 'firebase'
import {connect} from 'react-redux'
import logo from '../images/logo-nowe.png'

class MainMenu extends Component {
  render() {
    const user = this.props.user;
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link className='Main__Menu' to="/">
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <IndexLinkContainer to="/map-search">
              <NavItem className='Main__Menu'>MAPA</NavItem>
            </IndexLinkContainer>
            <LinkContainer to="/list-search">
              <NavItem className='Main__Menu'>LISTA</NavItem>
            </LinkContainer>
            {user !== null ? null :
              <LinkContainer to="/logowanie">
                <NavItem className='Main__Menu'>LOGOWANIE</NavItem>
              </LinkContainer>
            }
            {user === null ? null :
              <LinkContainer to="/favorites">
                <NavItem className='Main__Menu'>ULUBIONE</NavItem>
              </LinkContainer>
            }
          </Nav>
          <Nav pullRight>
            {user === null ? null :
              <LinkContainer to="/list-search">
                <NavItem className="signOutButton"
                         onClick={() => firebase.auth().signOut()}>
                  Wyloguj się
                </NavItem>
              </LinkContainer>

            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default connect(
  state => ({
    user: state.auth.user
  })
)(MainMenu)