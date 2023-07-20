import React from 'react'
import ProductsCard from './ProductsCard'

const ProductsList = ({ data }) => {
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