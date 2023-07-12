import React, { useEffect, useState } from 'react'
import { ListGroup } from 'reactstrap'
import products from '../../assets/data/products'
import ProductsList from '../UI/ProductsList'


const Laptops = (item, index) => {
    const [laptops, setLaptops] = useState(products)

    const laptopsList = products.filter(item => item.category === "laptop")

    useEffect(() => {
        setLaptops(laptopsList)
    }, [])


    return (
        <ProductsList data={laptops} key={index} />
    )
}

export default Laptops