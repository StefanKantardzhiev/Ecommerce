import React from 'react'
import { Container, Row, Col, ListGroupItem, ListGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/PcBuildzLogo.png'

const Footer = () => {
  const date = new Date()

  return (

    <footer className='footer'>
      <Container>
        <Row>
          <Col lg="5">
            <div className='logo'>
              <img src={logo} alt='logo' />
              <div className='logo-text'>
                <Link to={'/'}><h3>PCBuildz.de</h3>
                  <p>From enthusiasts for enthusiasts!</p></Link>
              </div>
            </div>
            <p className="footer-text mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ratione illo quos possimus, ipsam voluptatum commodi iure quam facilis earum cupiditate ad praesentium totam aspernatur ipsum minima explicabo repellat porro!
            </p>
          </Col>
          <Col lg="2">
            <div className="footer-quick-links">
              <h4 className='quick-links-title'>Top Categories</h4>
              <ListGroup>
                <ListGroupItem>
                  <Link to='/'>Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem>
                  <Link to='/'>Laptops</Link>
                </ListGroupItem>
                <ListGroupItem>
                  <Link to='/'>Watches</Link>
                </ListGroupItem>
                <ListGroupItem>
                  <Link to='/'>Office PCs</Link>
                </ListGroupItem>

              </ListGroup>
            </div>
          </Col>
          <Col lg="2">
            <div className="footer-quick-links">
              <h4 className='quick-links-title'>Useful Links</h4>
              <ListGroup>
                <ListGroupItem>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>
                <ListGroupItem>
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>
                <ListGroupItem>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>
                <ListGroupItem>
                  <Link to='/'>Privacy Policy</Link>
                </ListGroupItem>

              </ListGroup>
            </div></Col>
          <Col lg="3">
            <div className="footer-quick-links">
              <h4 className='quick-links-title'>Contact</h4>
              <ListGroup>
                <ListGroupItem>
                  <Link to='https://www.google.de/maps/place/Freseniusstra%C3%9Fe+20,+45145+Essen/@51.4497013,6.9834605,17z/data=!3m1!4b1!4m5!3m4!1s0x47b8c2ebe55fe795:0xee126138d15b0b2d!8m2!3d51.449698!4d6.9860354?entry=ttu'>
                    <span><i className="ri-map-pin-line"></i></span>
                    <p>Essen, Germany 45145</p>
                  </Link>
                </ListGroupItem>
                <ListGroupItem>
                  <Link to='tel:+4911515151511'>
                    <span><i className="ri-phone-line"></i></span>
                    <p> +4911515151511</p>
                  </Link>
                </ListGroupItem>
                <ListGroupItem>
                  <Link to='mailto:pcbuildz@outlook.de'> <span><i className="ri-mail-line"></i></span>
                    <p > pcbuildz@outlook.de</p>
                  </Link>
                </ListGroupItem>

              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className='footer_copyright'>Copyright {date.getFullYear()}&copy; developed and designed by Stefan Kantardzhiev.<p>All rights reserved.</p></p>
          </Col>
        </Row>

      </Container>
    </footer>
  )
}

export default Footer