import React from 'react'
import Map from './Map'
import MenuFilter from './MenuFilter'
import { Col, Row } from 'react-bootstrap'
const MapSearch  = () => (
  <Row>
    <Col sm={4}>
      <MenuFilter/>
    </Col>
    <Col sm={8}>
    <div style={{ height: "calc(100vh - 80px)"}}>
      <div
           style={{width: "100%", height: "100%"}}
      >

        <Map/>

      </div>
    </div>
    </Col>
  </Row>

)
export default MapSearch