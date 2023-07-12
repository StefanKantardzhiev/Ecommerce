import React, { useEffect, useState } from 'react'
import { ListGroup } from 'reactstrap'
import products from '../../assets/data/products'
import ProductsList from '../UI/ProductsList'


const Wireless = (item, index) => {
    const [wireless, setWireless] = useState(products)

    const wirelessList = products.filter(item => item.category === "wireless")

    useEffect(() => {
        setWireless(wirelessList)
    }, [])


    return (
        <ProductsList data={wireless} key={index} />
    )
}

export default Wireless