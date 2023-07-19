import React from 'react'
import productImg from '../../assets/images/intel-pc.png'
import ProductsCard from './ProductsCard'

const ProductsList = ({ data, index }) => {

    index = (Math.random() * 10).toFixed(0)
    const prodIndex = (Math.random() * 100).toFixed(0)


    return (
        <div className="products_list" key={index} >
            {
                data.map(item => (
                    <ProductsCard item={item} key={prodIndex} />
                ))}
        </div>
    )


}

export default ProductsList