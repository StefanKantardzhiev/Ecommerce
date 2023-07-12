import React, { useEffect, useState } from 'react'
import { ListGroup } from 'reactstrap'
import products from '../../assets/data/products'
import ProductsList from '../UI/ProductsList'


const Phones = (item, index) => {
    const [phones, setPhones] = useState(products)

    const phonesList = products.filter(item => item.category === "mobile")

    useEffect(() => {
        setPhones(phonesList)
    }, [])


    return (
        <ProductsList data={phones} key={index} />
    )
}

export default Phones