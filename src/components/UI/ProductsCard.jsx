import React from 'react'
import productImg from '../../assets/images/intel-pc.png'
import products from '../../assets/data/products'
import { Link } from 'react-router-dom'

const ProductsCard = ({ item, index }) => {
    return (
        <div className="product_item" key={index} >
            <div className="product_img">
                <img src={item.imgUrl} alt="" srcSet="" />
            </div>
            <h3 className="product_name"><Link to={`/shop/${item.id}`} key={index}>{item.productName}</Link></h3>
            <span className="product_desc">{item.shortDesc}</span>
            <div className="product-card-bottom">
                <span className="price">{Number(item.price).toFixed(2)} €</span>
                <span className='add-icon'><i className="ri-add-circle-fill"></i>
                </span>
            </div>
        </div>
    )
}

export default ProductsCard