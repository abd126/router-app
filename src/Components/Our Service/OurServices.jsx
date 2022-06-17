import React from 'react'
import ServiceCard from './ServiceCard'
import {Row , Col} from 'react-bootstrap'
import './style.css'
const OurServices = () => {
  return (
    <div className='Our-service container-fluid'>
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      {/* <Row>
 
    <Col>
     <ServiceCard />
     <ServiceCard />
     <ServiceCard />
     <ServiceCard />
    </Col>

</Row> */}
    </div>
  )
}

export default OurServices
