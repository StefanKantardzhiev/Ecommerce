import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Col, Row } from "reactstrap";
import tdImg from '../assets/images/hero-img.png'
import { cartActions } from '../redux/slices/cartSlice'
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';

import { Link } from "react-router-dom";

const Cart = () => {

    const cartItems = useSelector(state => state.cart.cartItems)
    const totalAmount = useSelector(state => state.cart.totalAmount)
    return <Helmet title="Cart">

        <CommonSection title='Shopping Cart' />
        <section className="shopping-cart">
            <Container>
                <Row>
                    <Col lg='12'>
                        {

                            cartItems.length === 0
                                ?
                                <h2 className="no-products">No products added!</h2>
                                :
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
                                        {cartItems.map((item, index) => (
                                            <Tr item={item} key={index} />
                                        ))}
                                    </tbody>
                                </table>
                        }
                    </Col>
                    <div className="total">
                        <div className="total-text">
                            <h6>Total Amount:</h6>
                            <span>{totalAmount} €</span>
                        </div>
                        <p>taxes and shipping wil be added on checkout</p>
                        <div className="total-buttons">
                            <button className="buy_btn"><Link to='/shop'>Continue shopping</Link></button>
                            <button className="buy_btn"><Link to='/checkout'>Checkout</Link></button>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    </Helmet>;
}



const Tr = ({ item }) => {
    const dispatch = useDispatch()

    const removeFromCart = () => {
        dispatch(
            cartActions.deleteItem(item.id)
        )
    }
    return (
        <tr>
            <td><img src={item.image}></img></td>
            <td>{item.productName}</td>
            <td>{item.price} €</td>
            <td>{item.quantity}</td>
            <td><i className="ri-delete-bin-line" onClick={removeFromCart}></i></td>
        </tr>

    )
}

export default Cart;