import React from 'react'
import {Row, Col} from 'react-bootstrap'

import './ListSearch.css'

const ListSearch = () => (
  <Row>
    <Col lg={2} className="pine">
      <h2> TU JEST PINEZKA KATEGORII </h2>
    </Col>
    <Col lg={3} className="main-description">
      <section className="description">
        <h3> Calypso Przymorze <span className="distance"> ~ odległość: 0,3 km </span></h3>
          <span> ul. Obrońców Wybrzeża 1 <br/> 80-432 Gdańsk</span>
        <div className="website">
          <a href="https://www.calypso.com.pl/klub/calypso-gdansk-przymorze">www.calypso.com.pl/gdansk-przymorze</a>
        </div>
      </section>
    </Col>
    <Col lg={7} className="contact">
      <text>Kontakt:<a href="tel: 0048 555 55 55">+48 555 55 55</a></text>
    </Col>
  </Row>
);
export default ListSearch