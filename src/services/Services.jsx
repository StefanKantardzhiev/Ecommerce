import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'
import serviceData from '../assets/data/serviceData'



const Services = () => {
    return <section className='services'>
        <Container>
            <Row>
                {
                    serviceData.map((item, index) => (
                        <Col lg='3' md='5'>
                            <div className="service_item">
                                <span>'{item.icon}'</span>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.subtitle}</p>
                                </div>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </Container>

    </section>
}

export default Services