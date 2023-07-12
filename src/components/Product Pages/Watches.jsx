import React, { useEffect, useState } from 'react'
import { ListGroup } from 'reactstrap'
import products from '../../assets/data/products'
import ProductsList from '../UI/ProductsList'


const Watches = (item, index) => {
    const [watches, setWatches] = useState(products)

    const watchesList = products.filter(item => item.category === "watch")

    useEffect(() => {
        setWatches(watchesList)
    }, [])


    return (
        <ProductsList data={watches} key={index} />
    )
}

export default Watches