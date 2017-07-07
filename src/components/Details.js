/**
 * Created by dominikakosiedowska on 06.07.17.
 */
import React from 'react'
import {
    Row,
    Col
} from'react-bootstrap'
import Foto from './Foto'
import ObjectName from './ObjectName'
import ObjectDetails from './ObjectDetails'
import Map from './Map'
const Details = () => (
  <div>
    <Row>
        <Col xs={12} md={6} mdPush={6}>
            <ObjectName/>
            <ObjectDetails/>
        </Col>
        <Col xs={12} md={6} mdPull={6}>
            <Foto/>
        </Col>
    </Row>
    <div style={{width: 800, height: 800}}>
      <Map/>
    </div>
  </div>
)
export default Details