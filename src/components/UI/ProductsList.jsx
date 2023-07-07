import React from 'react'
import productImg from '../../assets/images/intel-pc.png'
import ProductsCard from './ProductsCard'
const ProductsList = () => {
    return (

        <div className="products_list">
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
        </div>
        
    )
}

export default ProductsList