import React from 'react'
import ServiceCard from './ServiceCard'
import { Row, Col } from 'react-bootstrap'
import styles from './ourService.module.css'
const OurServices = () => {
  return (
    <div className="container-fluid">
      <div className={styles.OurService}>
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
    </div>

  )
}

export default OurServices
