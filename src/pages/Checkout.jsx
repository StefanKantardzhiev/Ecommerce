
import React from "react";
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { useSelector } from "react-redux";
import products from "../assets/data/products";
import { useParams } from "react-router";
import ProductsList from "../components/UI/ProductsList";
import { Link } from "react-router-dom";


const Checkout = () => {

    const totalQty = useSelector(state => state.cart.totalQuantity)
    const totalAmount = useSelector(state => state.cart.totalAmount)

    const relatedProducts = products.slice(0, 3)


    // const { imgUrl, productName, price, avgRating, reviews, description, shortDesc, category } = product


    return (
        <Helmet title='Checkout'>
            <CommonSection title='Checkout'></CommonSection>
            <section className="checkout">
                <Container>
                    <Row>
                        <Col>
                            <h6 className="mb-4 mt-4 fw-bold">Billing Information</h6>
                            <Form>
                                <FormGroup className="form_group">
                                    <input type="text" placeholder="Enter your name" />
                                </FormGroup>
                                <FormGroup className="form_group">
                                    <input type="email" placeholder="Enter your email" />
                                </FormGroup>
                                <FormGroup className="form_group">
                                    <input type="number" placeholder="Phone number" />
                                </FormGroup>
                                <FormGroup className="form_group">
                                    <input type="text" placeholder="Street address" />
                                </FormGroup>
                                <FormGroup className="form_group">
                                    <input type="text" placeholder="City" />
                                </FormGroup>
                                <FormGroup className="form_group">
                                    <input type="text" placeholder="Postcode" />
                                </FormGroup>
                                <FormGroup className="form_group">
                                    <input type="text" placeholder="Country" />
                                </FormGroup>
                            </Form>
                        </Col>

                        <div className="checkout-cart">
                            <h6>Total Qty: <span>{totalQty} Products</span></h6>
                            <h6>Shipping: <span>{(6.99).toFixed(2)} €</span></h6>
                            <h6>Subtotal: <span>{Number(totalAmount).toFixed(2)} €</span></h6>
                            {
                                (totalAmount > 1000) ? <h6><h6>Free shipping</h6>Total: <span>{Number(totalAmount).toFixed(2)} €</span></h6>
                                    :
                                    <h6>Total: <span>{Number(totalAmount + 6.99).toFixed(2)} €</span></h6>
                            }
                        </div>
                        <button className="buy_btn" id="order_btn"><Link to='/'>Order</Link></button>
                    </Row>
                </Container>
            </section>
            <section className="related-products">
                <div className="related-title"><h3>You might also like:</h3></div>
                <ProductsList data={relatedProducts} />
            </section>
        </Helmet>
    )
}

export default Checkout;