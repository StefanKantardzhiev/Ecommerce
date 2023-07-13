import React from "react";

import { useParams } from "react-router";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
import { ToastContainer, toast } from 'react-toastify'






const ProductDetails = () => {

    const { id } = useParams()
    const product = products.find(item => item.id === id)

    const { imgUrl, productName, price, avgRating, review, description } = product


    const dispatch = useDispatch()


    const addToCart = () => {
        dispatch(
            cartActions.addItem({
                id: product.id,
                productName: product.productName,
                price: product.price,
                image: product.imgUrl
            }))

        toast.success('Product added to cart')
    }
    return <Helmet>
        <CommonSection />
        <section className="product-details">
            <div className="left-side">
                <img src={imgUrl}></img>
            </div>
            <div className="right-side">
                <div className="product-info">
                    <h2>{productName}</h2>
                    <span>{description}</span>
                </div>
                <div className="product-rating">
                    <span>{avgRating} </span>
                    <i className="ri-star-s-fill"></i>
                    <i className="ri-star-s-fill"></i>
                    <i className="ri-star-s-fill"></i>
                    <i className="ri-star-s-fill"></i>
                    <i className="ri-star-half-s-line"></i>
                </div>
                <span className="product-price">{price.toFixed(2)} €</span>
                <br />
                <button className="buy_btn" onClick={addToCart}>Add to cart</button>
            </div>

        </section>

    </Helmet>
}

export default ProductDetails;