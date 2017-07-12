import React from 'react'
import { Carousel,
  Col,
  Row,
  Grid
} from 'react-bootstrap'
import CalypsoPrzymorze from '../images/CalypsoPrzymorze.jpg'

const CarouselDetails = () => (
<Carousel>
    <Row>
        <Col md={6}>
            <Carousel.Item>
                <img width={'100%'} height={250} alt="900x500" src={CalypsoPrzymorze}/>
            </Carousel.Item>
        </Col>
        <Col md={6}>
            <Carousel.Item>
                <img width={'100%'} height={250} alt="900x500" src={CalypsoPrzymorze}/>
            </Carousel.Item>
        </Col>
    </Row>
</Carousel>
)
export default CarouselDetails