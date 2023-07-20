import React from 'react'

import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'

import { toast } from 'react-toastify';

const ProductsCard = ({ item, index }) => {

    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(
            cartActions.addItem({
                id: item.id,
                productName: item.productName,
                price: item.price,
                image: item.imgUrl
            }))

        toast.success('Product added to cart')
    }

    return (
        <div className="product_item" >
            <div className="product_img"  >
                <img src={item.imgUrl} alt="" srcSet="" />
            </div>
            <h3 className="product_name"  ><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
            <span className="product_desc"  >{item.shortDesc}</span>
            <div className="product-card-bottom" >
                <span className="price" >{Number(item.price).toFixed(2)} €</span>
                <span className='add-icon' onClick={addToCart} ><i className="ri-add-circle-fill"></i>
                </span>
            </div>
        </div>
    )
}

export default ProductsCard