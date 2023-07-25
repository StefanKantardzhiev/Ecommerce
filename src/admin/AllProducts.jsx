
import React from 'react'
import ProductsCard from '../components/UI/ProductsCard'
import products from '../assets/data/products'
import { useSelector } from 'react-redux'

const AllProducts = () => {
    const cartItems = useSelector(state => state.cart.cartItems)

    return (


        cartItems.map(item => (
            <ProductsCard item={item} key={item.id} />
        ))

    )
}

export default AllProducts