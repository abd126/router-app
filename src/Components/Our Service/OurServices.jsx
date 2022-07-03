import React from 'react'
import ServiceCard from './ServiceCard'
import { Row, Col } from 'react-bootstrap'
import styles from './ourService.module.css'

const OurServices = () => {
 
  return (
    <div className="container-fluid">
      <div className={styles.OurService}>
        <ServiceCard />
      </div>
    </div>

  )
}

export default OurServices