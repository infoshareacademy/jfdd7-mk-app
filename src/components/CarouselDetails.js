import React from 'react'
import Slider  from 'react-slick'
import CalypsoPrzymorze from '../images/CalypsoPrzymorze.jpg'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const CarouselDetails = () => (
<Slider
    infinite={true}
    responsive ={[ { breakpoint: 768, settings: { slidesToShow: 1 } }, { breakpoint: 10024, settings: { slidesToShow: 2 } }]}
    slidesToShow={1}
    slidesToScroll={1}
    focusOnSelect={true}
    speed={1000}
    autoplay={true}
    adaptiveHeight={false}
    swipe={true}
    draggable={false}
    dots={true}
    accessibility={false}
    arrows={true}
>
    <div className="photo"><img src={CalypsoPrzymorze}/></div>
    <div className="photo"><img src={CalypsoPrzymorze}/></div>
    <div className="photo"><img src={CalypsoPrzymorze}/></div>
</Slider>
)
export default CarouselDetails