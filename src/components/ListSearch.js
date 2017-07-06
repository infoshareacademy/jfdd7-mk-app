import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './ListSearch.css'

const ListSearch  = () => (
    <Row>
      <Col xs={3} className="Pine">
        TU MA BYC PINEZKA Z LOGIEM KATEGORII
      </Col>
      <Col xs={9}>
        <div className="Description">
          TU MA BYC MALY OPIS OBIEKTU (nazwa, odleglosc, nr tel, email...)
        </div>
      </Col>
    </Row>
)
export default ListSearch