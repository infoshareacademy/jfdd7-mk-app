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
        <Link className='Main__Menu' to="/">Gdzie poćwiczę?</Link>
      </Navbar.Brand>
    </Navbar.Header>
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
    </Nav>
  </Navbar>
)

export default MainMenu