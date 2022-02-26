import React from 'react'
import Pic from '../../Images/Ship.jpg'
import { Card } from 'react-bootstrap'
import './style.css'



const ServiceCard = () => {
    return (
        <div className='service-card'>
            <img src={Pic} alt="" />
            <h3>Heading</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit alias quo, optio dolorum eaque ut corporis molestiae, error nulla sint, tempore iure esse sed animi? Dolorem sed molestiae necessitatibus hic.</p>



            {/* <Card className='w-100'>
        <Card.Img variant="top" src={Pic} className="w-100" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card> */}
        </div>
    )
}

export default ServiceCard
