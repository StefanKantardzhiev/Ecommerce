import React, { useEffect, useState } from 'react'
import products from '../../assets/data/products'
import ProductsList from '../../components/UI/ProductsList'


const Office = (index) => {

    const [office, setOffice] = useState(products)

    const officeList = products.filter(item => item.category === "office")

    useEffect(() => {
        setOffice(officeList)

    }, [])


    return (
        <ProductsList data={office} key={index} />
    )
}

export default Office