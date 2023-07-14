import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Col, Row } from "reactstrap";
import tdImg from '../assets/images/hero-img.png'


const Cart = () => {
    return <Helmet title="Cart">
        <CommonSection title='Shopping Cart' />
        <section className="shopping-cart">
            <Container>
                <Row>
                    <Col lg='9'>
                        <table className="table bordered">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody className="table-item">
                                <td><img src={tdImg} width={100}></img></td>
                                <td>Gaming PC</td>
                                <td>1299.90 €</td>
                                <td>1</td>
                                <td><i className="ri-delete-bin-line"></i></td>
                            </tbody>
                        </table>

                    </Col>
                    <Col lg='3'></Col>
                </Row>
            </Container>
        </section>
    </Helmet>
}

export default Cart;