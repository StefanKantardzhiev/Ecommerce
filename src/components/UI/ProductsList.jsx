import React from 'react'
import productImg from '../../assets/images/intel-pc.png'
import ProductsCard from './ProductsCard'

const ProductsList = ({ data }) => {
    const index = (Math.random(28) * 10).toFixed(0)
    return (
        <div className="products_list">
            {
                data.map(item => (
                    <ProductsCard item={item} key={item.id}/>
                ))}
        </div>
    )


}

export default ProductsList