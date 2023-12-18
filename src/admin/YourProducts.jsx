
import React, { useContext, useEffect, useState } from 'react'
// import ProductsCard from '../components/UI/ProductsCard'
// import products from '../assets/data/products'
// import { useSelector } from 'react-redux'
import Helmet from '../components/Helmet/Helmet'
import { Row, Col, Container } from 'reactstrap'
// import { Link } from 'react-router-dom'
// import productsData from '../custom-hooks/useGetData'
import CommonSection from '../components/UI/CommonSection'
import { Link } from 'react-router-dom'
import { api } from '../services/rest-service'
const YourProducts = () => {
    const productsData = api.get('/products/catalog')
    const [isDeleting, setIsDeleting] = useState(false);
    
    

    const removeItem = async (id) => {
       
    };

    useEffect(() => {
        if (isDeleting) {
            // If an item was deleted, we trigger a refetch after a short delay to update the component with the latest data.
            const delay = setTimeout(() => {
                setIsDeleting(false);
            }, 100); // You can adjust the delay (in milliseconds) based on your needs.
            return () => clearTimeout(delay);
        }
    }, [isDeleting]);
    return (
        <Helmet title='Your Products'>
            <CommonSection title="Your Products" />
            <section className="owner-items">
                <Container>
                    <Row>
                        <Col lg='12'>
                            {

                                !productsData
                                    ?
                                    <h2 className="no-products">No products added!</h2>
                                    :
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Title</th>
                                                <th>Price</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        {

                                                    productsData.map(item => (
                                                        <tfoot key={item.id}>
                                                            <tr>
                                                                <td><img src={item.imgUrl} width={80} alt='product-img' /></td>
                                                                <td>{item.title}</td>
                                                                <td>{item.price} €</td>
                                                                <td><i className="ri-delete-bin-line" onClick={() => { removeItem(item.id) }}></i></td>
                                                            </tr>
                                                        </tfoot>
                                                    ))
                                       /* {productsData.map(item => (
                                                    <tfoot key={item.id}>
                                                        <tr>
                                                            <td><img src={item.imgUrl} width={80} alt='product-img' /></td>
                                                            <td>{item.title}</td>
                                                            <td>{item.price} €</td>
                                                            <td><i className="ri-delete-bin-line" onClick={() => { removeItem(item.id) }}></i></td>
                                                        </tr>
                                                    </tfoot>
                                                ))} */}
                                    </table>
                            }
                            <Link to='/profile/add-product'><span className="profile-addProduct"><i class="ri-add-line" /><span>Add New products</span><i class="ri-add-line" /></span></Link>
                        </Col>
                    </Row>
                </Container>
            </section >
        </Helmet >
    )
}

export default YourProducts