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
                        <Col key={index}>
                            <div className="service_item" style={{ background: `${item.bg}` }}>
                                <span><i className={item.icon} style={{ color: `${item.bg}` }}></i></span>
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