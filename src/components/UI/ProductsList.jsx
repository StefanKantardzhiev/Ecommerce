import React from 'react'
import productImg from '../../assets/images/intel-pc.png'
import ProductsCard from './ProductsCard'

const ProductsList = ({ data, index }) => {
    return (

        <div className="products_list">
            {
                data.map(item => (
                    <ProductsCard item={item} />
                ))}
        </div>

    )
}

export default ProductsList