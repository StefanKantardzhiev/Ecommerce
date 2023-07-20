import React, { useEffect, useState } from 'react'
import { ListGroup } from 'reactstrap'
import products from '../../assets/data/products'
import ProductsList from '../../components/UI/ProductsList'

const GamingPc = (item) => {
    const [gaming, setGaming] = useState(products)
    const index = Math.random(32) * 100
    const gamingList = products.filter(item => item.category === "gaming")

    useEffect(() => {
        setGaming(gamingList)
    }, [])


    return (
        <ProductsList data={gaming} />
    )
}

export default GamingPc