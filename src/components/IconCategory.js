import React from 'react'
import {Image} from 'react-bootstrap'
import GymIconNew from '../images/GymIconNew.png'
import './ListSearch.css'
import {Col} from 'react-bootstrap'

const IconCategory = () => (
  <Col xs={2} className="pin">
    <Image className="center-block" src={GymIconNew}/>
  </Col>
);
export default IconCategory