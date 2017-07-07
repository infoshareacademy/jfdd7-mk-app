import React from 'react'
import { Row, Col } from 'react-bootstrap'

import './ListSearch.css'

const ListSearch  = () => (
    <Row>
      <Col xs={3} className="pine">
        <h2> TU JEST PINEZKA KATEGORII </h2>
      </Col>
      <Col xs={9}>
        <div className="description">
          <h3> Calypso Przymorze <span> ~ odległość: 0,3 km </span></h3>
          <div className="address">
            <address className="street"> Adres:<small> ul. Obrońców Wybrzeża 1</small>
          <p> Telefon: <small> +48 555 555 55 </small></p>
          <p> Email: <small> calypso.przymorze@calypso.pl </small> </p>
          </address>
          </div>
        </div>
      </Col>
    </Row>
);
export default ListSearch