
import React from 'react'
// import ProductsCard from '../components/UI/ProductsCard'
// import products from '../assets/data/products'
// import { useSelector } from 'react-redux'
import Helmet from '../components/Helmet/Helmet'
import { Row, Col, Container } from 'reactstrap'
// import { Link } from 'react-router-dom'
// import productsData from '../custom-hooks/useGetData'
import useGetData from '../custom-hooks/useGetData'
import CommonSection from '../components/UI/CommonSection'



const AllProducts = () => {
    const { data: productsData } = useGetData('products')


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
                                        {productsData.map((item) => (
                                            <tr>
                                                <td><img src={item.imgUrl}></img></td>
                                                <td>{item.title}</td>
                                                <td>{item.price} €</td>
                                                {/* <td min={0} max={9999}><button onClick={removeOneItem}>-</button>{item.quantity}<button onClick={addToCart}>+</button></td> */}
                                                {/* <td><i className="ri-delete-bin-line" onClick={removeFromCart}></i></td> */}
                                            </tr>
                                        ))}

                                    </table>
                            };
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default AllProducts