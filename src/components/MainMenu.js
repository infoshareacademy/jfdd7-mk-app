import React from 'react'
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

const MainMenu = ({user}) => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link className='Main__Menu' to="/">Gdzie poćwiczę?</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <IndexLinkContainer to="/">
          <NavItem className='Main__Menu'>HOME</NavItem>
        </IndexLinkContainer>
        <LinkContainer to="/map-search">
          <NavItem className='Main__Menu'>MAPA</NavItem>
        </LinkContainer>
        <LinkContainer to="/list-search">
          <NavItem className='Main__Menu'>LISTA</NavItem>
        </LinkContainer>
        {user === null ? null :
          <LinkContainer to="/favorites">
            <NavItem className='Main__Menu'>ULUBIONE</NavItem>
          </LinkContainer>
        }
      </Nav>
      <Nav pullRight>
        {user === null ? null :
          <NavItem className="signOutButton"
                   onClick={() => firebase.auth().signOut()}>
            Wyloguj się
          </NavItem>

        }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default connect(
  state => ({
    user: state.auth.user
  })
)(MainMenu)