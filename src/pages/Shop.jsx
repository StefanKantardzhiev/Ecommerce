import React, { useEffect, useState } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";


import products from '../assets/data/products'
import ProductsList from '../components/UI/ProductsList'


const Shop = () => {

    const [productsData, setProductsData] = useState(products)
    const handleSearch = e => {
        const searchTerm = e.target.value;
        const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()));
        setProductsData(searchedProducts)
    }

    const handleFilter = e => {
        const filterValue = e.target.value
        if (filterValue === 'gaming') {
            const filteredProducts = products.filter(item => item.category === 'gaming');
            setProductsData(filteredProducts)
        }
        if (filterValue === 'office') {
            const filteredProducts = products.filter(item => item.category === 'office');
            setProductsData(filteredProducts)
        }
        if (filterValue === 'mobile') {
            const filteredProducts = products.filter(item => item.category === 'mobile');
            setProductsData(filteredProducts)
        }
        if (filterValue === 'laptop') {
            const filteredProducts = products.filter(item => item.category === 'laptop');
            setProductsData(filteredProducts)
        }
        if (filterValue === 'watch') {
            const filteredProducts = products.filter(item => item.category === 'watch');
            setProductsData(filteredProducts)
        }
        if (filterValue === 'wireless') {
            const filteredProducts = products.filter(item => item.category === 'wireless');
            setProductsData(filteredProducts)
        }
        if (filterValue === 'Filter by Category') {
            setProductsData(products)
        }
    }



    return <Helmet title="Shop">
        <CommonSection title='Products' />
        <div className="widget-container">
            <div className="filter_widget">
                <select onChange={handleFilter}>
                    <option>Filter by Category</option>
                    <option value="gaming">Gaming Buildz</option>
                    <option value="office">Office PCs</option>
                    <option value="mobile">Phones</option>
                    <option value="laptop">Laptops</option>
                    <option value="watch">Watches</option>
                    <option value="wireless">Wireless Products</option>
                </select>
            </div>
            <div className="search_box">
                <span><i class="ri-search-line"></i></span>
                <input type="text" placeholder="Search..." onChange={handleSearch} />

            </div>
        </div>
        <section>
            <Container>
                <Row>
                    {
                        productsData.length === 0 ? <h1>No products found!</h1>
                            : <ProductsList data={productsData} />
                    }
                </Row>
            </Container>
        </section>
    </Helmet>

}

export default Shop;