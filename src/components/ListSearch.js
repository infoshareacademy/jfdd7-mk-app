import React from 'react'
import {Row, Col } from 'react-bootstrap'
import IconCategory from './IconCategory'
import Description from './Description'
import ContactObject from './ContactObject'
import './ListSearch.css'

const ListSearch = () => (
  <Row className="info">
    <Col xs={12} lg={2} className="pin">
      <div>
      <IconCategory/>
      </div>
    </Col>

    <Col xs={12} lg={3} className="main-description">
    <Description/>
    </Col>

    <Col xs={12} lg={7} className="contact">
      <ContactObject/>
    </Col>
  </Row>

)
export default ListSearch