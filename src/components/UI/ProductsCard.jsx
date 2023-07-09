import React from 'react'
import productImg from '../../assets/images/intel-pc.png'
import products from '../../assets/data/products'

const ProductsCard = () => {
    return products.map((item, index) => (
            <div className="product_item">
            <div className="product_img">
                <img src={item.imgUrl} alt="" srcset="" />
            </div>
            <h3 className="product_name">{item.productName}</h3>
            <span class="product_desc">{item.shortDesc}</span>
            <div className="product-card-bottom">
                <span className="price">{item.price} EUR</span>
                <span className='add-icon'><i class="ri-add-circle-fill"></i>
                </span>
            </div>


        </div>
    ))
}

export default ProductsCard