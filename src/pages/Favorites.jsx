import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Col, Row } from "reactstrap";
import { favoriteActions } from '../redux/slices/favoriteSlice'
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../custom-hooks/useAuth'
import { toast } from "react-toastify";
import { cartActions } from "../redux/slices/cartSlice";



const Favorites = () => {
    const currentUser = useAuth()
    const favoriteItems = useSelector(state => state.favorite.favoriteItems)
    const totalAmount = useSelector(state => state.favorite.totalAmount);

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const addToCart = () => {
        favoriteItems.forEach(item => {
            dispatch(
                cartActions.addItem({
                    id: item.id,
                    productName: item.productName,
                    price: item.price,
                    imgUrl: item.imgUrl
                }))

            toast.success('Products added to cart!')
        }
        );
    };

    return (
        <Helmet title="Cart">
            {currentUser ? <>
                <CommonSection title='Shopping Cart' />
                <section className="shopping-favorite">
                    <Container>
                        <Row>
                            <Col lg='12'>
                                {

                                    favoriteItems.length === 0
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
                                                {favoriteItems.map((item, index) => (
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
                                    <button className="buy_btn" onClick={addToCart}><Link to='/cart'>Add to cart</Link></button>
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

    const removeFromCart = () => {
        dispatch(
            favoriteActions.deleteItem(item.id)
        )
    }
    return (
        <tr>
            <td><img src={item.imgUrl} alt="item-img"></img></td>
            <td>{item.productName}</td>
            <td>{item.price} €</td>
            <td>{item.quantity}</td>
            <td><i className="ri-delete-bin-line" onClick={removeFromCart}></i></td>
        </tr>

    )
}

export default Favorites;