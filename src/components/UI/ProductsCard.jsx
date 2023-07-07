import React from 'react'
import productImg from '../../assets/images/intel-pc.png'

const ProductsCard = () => {
    return (
        <div className="product_item">
            <div className="product_img">
                <img src={productImg} alt="" srcset="" />
            </div>
            <h3 className="product_name">Intel PCBuild</h3>
            <span class="product_desc">Gaming PC</span>
            <div className="product-card-bottom">
                <span className="price">300 EUR</span>
                <span className='add-icon'><i class="ri-add-circle-fill"></i>
                </span>
            </div>


        </div>
    )
}

export default ProductsCard