import React, { useEffect, useState } from "react";
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from "reactstrap";
import heroImg from '../assets/images/hero-img.png'
import '../styles/Home.css'
import { Link } from "react-router-dom";
import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";
import products from "../assets/data/products";
import Clock from "../components/UI/Clock";
import counterImg from '../assets/images/intel-pc.png'


const Home = () => {
    const [trending, setTrending] = useState(products)
    const [premium, setPremium] = useState(products)
    const [limited, setLimited] = useState([])
    const [index, setIndex] = useState(0)
    // const [trendingProducts, setTrendingProducts] = useState([])
    const year = new Date().getFullYear()

    let min = products[0].id
    let length = products.length - 1
    let max = products[length].id
    // let max = products[products.length].id
    // let max = products[products.length].id




    useEffect(() => {
        // min = products[0].id
        // length = products.length - 1
        // max = products[length].id
        let randomized = 10;
        const limitedItem = products[randomized]
        setLimited(limitedItem)
    }, [limited])

    useEffect(() => {
        const filtered = products.filter(item => item.price > 500).sort()
        setPremium(filtered.slice(0, 3))

    }, []);

    useEffect(() => {
        const filteredData = products.filter(item => Number(item.avgRating) > 4.7).slice(0, 6)
        setTrending(filteredData)
        // setTrending(filteredData.slice(0, 3))
    }, []);


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
                <h2 className="section_title">Premium Products</h2>
                <Row>
                    <Col lg="12">
                        <ProductsList data={premium} key={index} />
                    </Col>
                </Row>
            </Container>
        </section>
        <section className="trending_products">
            <Container>
                <h2 className="section_title">Trending Products</h2>
                <Row>
                    <Col lg="10">
                        <ProductsList data={trending} key={index} />
                    </Col>
                </Row>
            </Container>
        </section>
        <section className="timer_count">
            <Container>
                <Row>
                    <Col lg="6" md='6'>
                        <h2>Limited Offer:</h2>
                        <h3>{limited.productName}</h3>
                        <Clock />
                        <button className="limited_buy_btn"><Link to='/shop'>Visit Store</Link></button>
                    </Col>
                    <Col lg="6" md='6'>
                        <img src={limited.imgUrl} alt="" srcset="" width={800} />
                    </Col>
                    {/* <ProductsList data={trending} key={index} /> */}

                </Row>
            </Container>
        </section>
    </Helmet>

}

export default Home;