import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Col, Row } from "reactstrap";
import { cartActions } from '../redux/slices/cartSlice'
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../custom-hooks/useAuth'
import { toast } from 'react-toastify'

const Cart = () => {
    const currentUser = useAuth()
    const cartItems = useSelector(state => state.cart.cartItems)
    const totalAmount = useSelector(state => state.cart.totalAmount)
    const [item, setItem] = useState(cartItems)


    // useEffect(() => {
    //     console.log(items.item.quantity)
    // }, [item])
    const navigate = useNavigate()

    return (
        <Helmet title="Cart">
            {currentUser ? <>
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
                                    <h6>TOTAL:</h6>
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
            </> :
                <span className="not-logged">You have to login in order to see this content</span>
            }

        </Helmet >
    )
}


const Tr = ({ item }) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.cartItems)


    const removeOneItem = (e) => {
        e.preventDefault()
        dispatch(cartActions.removeOne(item.id)
        )
    }
    const removeFromCart = (e) => {
        e.preventDefault()

        dispatch(
            cartActions.deleteItem(item.id)
        )

    }

    const addToCart = () => {
        dispatch(
            cartActions.addItem({
                id: item.id,
                productName: item.productName,
                price: item.price,
                imgUrl: item.imgUrl,
            }))
        toast.success('Product added to cart!')
    }
    return (
        <tr>
            <td><img src={item.imgUrl} alt="item-img"></img></td>
            <td>{item.productName}</td>
            <td>{item.price} €</td>
            <td min={0} max={9999}><button onClick={removeOneItem}>-</button>{item.quantity}<button onClick={addToCart}>+</button></td>
            <td><i className="ri-delete-bin-line" onClick={removeFromCart}></i></td>
        </tr>

    )
}

export default Cart;