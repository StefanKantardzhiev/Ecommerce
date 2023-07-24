import React, { useState, useRef } from "react";

import { useParams } from "react-router";
import products from "../../assets/data/products";
import Helmet from "../Helmet/Helmet";
import CommonSection from "./CommonSection";
import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'
import { toast } from 'react-toastify'
import ProductsList from "./ProductsList";



const ProductDetails = () => {

    const { id } = useParams()
    const product = products.find(item => item.id === id)
    const [tab, setTab] = useState('desc')
    const [rating, setRating] = useState(0)
    const reviewMsg = useRef('')
    const reviewUser = useRef('')
    const [active, setActive] = useState(false);

    const { imgUrl, productName, price, avgRating, reviews, description, shortDesc, category } = product


    const dispatch = useDispatch()


    const addToCart = () => {
        dispatch(
            cartActions.addItem({
                id,
                productName,
                price,
                imgUrl
            }))

        toast.success('Product added to cart')
    }

    const relatedProducts = products.filter(item => item.category === category)

    const submitHandler = (e) => {
        e.preventDefault()

        const reviewUserName = reviewUser.current.value
        const reviewUserMsg = reviewMsg.current.value

        console.log(reviewUserMsg, reviewUserName, rating)

        const reviewObj = {
            userName: reviewUserName,
            text: reviewUserMsg,
            rating
        }

        product.reviews.push(reviewObj)
        console.log(reviewObj)
        setActive(!active)
        toast.success('Thank you for your time!')
    }





    return (

        <Helmet title={productName}>
            <CommonSection title={productName} />
            <section className="product-details">
                <div className="left-side">
                    <img src={imgUrl} alt='product-pic'></img>
                </div>
                <div className="right-side">
                    <div className="product-info">
                        <h2>{productName}</h2>
                        <span>{shortDesc}</span>
                    </div>
                    <div className="product-rating">
                        <span>{avgRating} </span>
                        <i className="ri-star-s-fill"  ></i>
                        <i className="ri-star-s-fill" ></i>
                        <i className="ri-star-s-fill" ></i>
                        <i className="ri-star-s-fill" ></i>
                        <i className="ri-star-half-s-line"></i>
                    </div>
                    <span className="product-price">{price.toFixed(2)} €</span>
                    <br />
                    <button className="buy_btn" onClick={addToCart}>Add to cart</button>
                </div>
            </section>
            <section className="tab-section">
                <div className="tab-wrapper">
                    <h6 className={`${tab === 'desc' ? 'active_tab' : ''}`} onClick={() => {
                        setTab('desc')
                    }}>Description</h6>
                    <h6 className={`${tab === 'rev' ? 'active_tab' : ''}`} onClick={() => {
                        setTab('rev')
                    }}>Reviews ({reviews.length})</h6>
                </div>
                {
                    tab === 'desc' ? <div className="tab_content">
                        <p>{description}</p>
                    </div> : <div className="reviews_list">{reviews.map(review => <span><i class="ri-user-smile-fill"></i>{review.userName} commented: {review.text}</span>)}</div>
                }
                <div className="review_form">
                    <h4>Leave your thoughts</h4>
                    <form action="" method="post" onSubmit={submitHandler}>
                        <div className="form_group">
                            <input type="text" placeholder="Enter name..." ref={reviewUser} />
                        </div>

                        
                        <div className="form_group">
                            <textarea
                                rows={5}
                                placeholder="Review Message"
                                ref={reviewMsg}
                                required />
                        </div>
                        <div className="form_group">
                            {/* eslint-disable-next-line */}
                            <a onClick={() => setRating(1)} style={{ color: active ? "rgb(98, 107, 202)" : "rgba(0, 0, 0, 0.512)" }}>1 <i className="ri-star-s-fill"></i></a>
                            {/* eslint-disable-next-line */}
                            <a onClick={() => setRating(2)} style={{ color: active ? "rgb(98, 107, 202)" : "rgba(0, 0, 0, 0.512)" }}>2 <i className="ri-star-s-fill"></i></a>
                            {/* eslint-disable-next-line */}
                            <a onClick={() => setRating(3)} style={{ color: active ? "rgb(98, 107, 202)" : "rgba(0, 0, 0, 0.512)" }}>3 <i className="ri-star-s-fill"></i></a>
                            {/* eslint-disable-next-line */}
                            <a onClick={() => setRating(4)} style={{ color: active ? "rgb(98, 107, 202)" : "rgba(0, 0, 0, 0.512)" }}>4 <i className="ri-star-s-fill"></i></a>
                            {/* eslint-disable-next-line */}
                            <a onClick={() => setRating(5)} style={{ color: active ? "rgb(98, 107, 202)" : "rgba(0, 0, 0, 0.512)" }}>5 <i className="ri-star-s-fill"></i></a>
                        </div>
                        <button type="submit" className="buy_btn">Submit</button>
                    </form>
                </div>
            </section>
            <section className="related-products">
                <div className="related-title"><h3>You might also like:</h3></div>
                <ProductsList data={relatedProducts.filter(item => item.productName !== productName)} />
            </section>
        </Helmet>
    )
}

export default ProductDetails;