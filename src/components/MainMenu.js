import React from 'react'
import { Link } from 'react-router-dom'
import {
  LinkContainer,
  IndexLinkContainer
} from 'react-router-bootstrap'
import {
  Navbar,
  Nav,
  NavItem
} from 'react-bootstrap'


const MainMenu = (props) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/main">Gdzie poćwiczę?</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <IndexLinkContainer to="/main">
        <NavItem>Main</NavItem>
      </IndexLinkContainer>
      <LinkContainer to="/map-search">
        <NavItem>MapSearch</NavItem>
      </LinkContainer>
      <LinkContainer to="/list-search">
        <NavItem>ListSearch</NavItem>
      </LinkContainer>
      <LinkContainer to="/details">
        <NavItem>Details</NavItem>
      </LinkContainer>
    </Nav>
  </Navbar>
)

export default MainMenu