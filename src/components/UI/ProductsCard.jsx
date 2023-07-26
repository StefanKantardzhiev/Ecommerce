import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'
import { favoriteActions } from '../../redux/slices/favoriteSlice';

import { toast } from 'react-toastify';


const ProductsCard = ({ item }) => {
    const [active, setActive] = useState(false);
    const [active2, setActive2] = useState(false);


    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(
            cartActions.addItem({
                id: item.id,
                productName: item.productName,
                price: item.price,
                imgUrl: item.imgUrl
            }))
        setActive2(!active2)
        toast.success('Product added to cart!')
    }


    const addToFavorites = () => {
        dispatch(
            favoriteActions.addItem({
                id: item.id,
                productName: item.productName,
                price: item.price,
                imgUrl: item.imgUrl
            })
        )
        setActive(!active);
        toast.success('Product added to favorites!')
    }

    return (
        <div className="product_item">
            <div className="product_img">
                <img src={item.imgUrl} alt="" srcSet="" />
            </div>
            <h3 className="product_name"><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
            <span className="product_desc">{item.shortDesc}</span>
            <div className="product-card-bottom">
                <span className="price" >{Number(item.price).toFixed(2)} €</span>
                <button className='add-icon' onClick={addToFavorites} style={{ color: active ? "rgba(255, 0, 0, 0.507)" : "rgba(0, 0, 0, 0.512)" }}><i className="ri-heart-add-line"></i></button>
                <button className='add-icon' onClick={addToCart} style={{ color: active2 ? "rgb(98, 107, 202)" : "rgba(0, 0, 0, 0.512)" }}><i className="ri-add-circle-line"></i></button>
            </div>
        </div >
    )
}

export default ProductsCard
