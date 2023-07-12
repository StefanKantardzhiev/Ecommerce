import React from 'react'
import productImg from '../../assets/images/intel-pc.png'
import ProductsCard from './ProductsCard'

const ProductsList = ({ data, index }) => {
    return (

        <div className="products_list" key={index} >
            {
                data.map(item => (
                    <ProductsCard item={item} key={index} />
                ))}
        </div>

    )
}

export default ProductsList