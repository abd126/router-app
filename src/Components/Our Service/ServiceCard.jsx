import React from 'react'
// import Pic from '../../Images/Ship.jpg'
import { Card, Row, Col, Container } from 'react-bootstrap'
import styles from './ourService.module.css'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'



const ServiceCard = () => {
  
  
  const {cards} = useSelector(state => state.cardsReducer);

  return (
    <Container className={styles.OurService}>
      <Row>
        {cards.map((item, ind) => (
          <Col md={6} key={ind}>
            <Link to={`service_detail/${item.id}`}>
              <Card className={styles.serviceCard}>
                <Card.Img variant="top" src={`/images/${item.Pic}`} className="w-100" />
                <Card.Body>
                  <Card.Title className={styles.cardTitle}>{item.name}</Card.Title>
                  {/* <Card.Text>
                    {item.desc}
                  </Card.Text> */}
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ServiceCard
