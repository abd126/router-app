import React from 'react'
import { Carousel } from 'react-bootstrap'
import ship from '../Images/Ship.jpg';
import warehouse from '../Images/Warehouse.jpg';
import byroad from '../Images/By-road.jpg';
// import './style.css'
const Slider = () => {
  return (
    <div className='slider container-fluid'>

      <Carousel className='slider-Carousel' fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ship}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={warehouse}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={byroad}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>



    </div>
  )
}

export default Slider
