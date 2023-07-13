import React from 'react'
import productImg from '../../assets/images/intel-pc.png'
import products from '../../assets/data/products'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'
//*Toastify notifications*//

import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

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
        <div className="product_item" key={index} >
            <div className="product_img" key={index} >
                <img src={item.imgUrl} alt="" srcSet="" />
            </div>
            <h3 className="product_name" key={index} ><Link to={`/shop/${item.id}`} key={index}>{item.productName}</Link></h3>
            <span className="product_desc" key={index} >{item.shortDesc}</span>
            <div className="product-card-bottom" key={index} >
                <span className="price"  key={index} >{Number(item.price).toFixed(2)} €</span>
                <span className='add-icon' onClick={addToCart} key={index} ><i className="ri-add-circle-fill"></i>
                </span>
            </div>
        </div>
    )
}

export default ProductsCard