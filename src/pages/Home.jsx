import React from "react";
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from "reactstrap";
import heroImg from '../assets/images/hero-img.png'
import '../styles/Home.css'
import { Link } from "react-router-dom";
import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";

const Home = () => {
    const year = new Date().getFullYear()

    return <Helmet title={'Home'}>
        <section className="hero_section">
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="hero_content">
                            <p className="hero_subtitle">Trending in {year}</p>
                            <h2>PcBuildz© X WoodWorks©</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptatibus exercitationem libero,
                                eligendi unde dolore a accusantium deleniti qui voluptas eveniet
                                quia assumenda cupiditate neque ducimus repudiandae laborum eos totam.</p>
                            <Link to={'shop'}> <button className="buy_btn">Shop Now !</button></Link>
                        </div>
                    </Col>
                    {/* <Col lg='6' md='6'>
                        <div className="hero_img">
                            <img src={heroImg} alt='hero' width={700} />
                        </div>
                    </Col> */}
                </Row>
            </Container>
        </section>
        <Services />
        <section className="trending_products">
            <Container>
                <h2 className="section_title">Trending Products</h2>
                <Row>
                    <Col lg="10">
                        <ProductsList />
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>

}

export default Home;