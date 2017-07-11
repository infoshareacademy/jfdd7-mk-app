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
const Details = () => (
    <Row>
        <Col xs={12} md={5} mdPush={7}>
            <ObjectName/>
            <ObjectDetails/>
        </Col>
        <Col xs={12} md={7} mdPull={5}>
            <Foto/>
        </Col>
    </Row>

)
export default Details