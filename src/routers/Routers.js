import { Routes, Route } from 'react-router-dom'


import React from "react";
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import ProductDetails from '../components/UI/ProductDetails'
import Shop from '../pages/Shop'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Profile from '../pages/Profile';

//product pages // 

import Gaming from '../components/Product Pages/Gaming'
import Laptops from '../components/Product Pages/Laptops'
import Office from '../components/Product Pages/Office'
import Wireless from '../components/Product Pages/Wireless'
import Watches from '../components/Product Pages/Watches'
import Phones from '../components/Product Pages/Phones'



import AllProducts from '../admin/YourProducts';
import AddProduct from '../admin/AddProduct';

import ProtectedRoute from './ProtectedRoute';
import Favorites from '../pages/Favorites';

const Routers = () => {
    return (
        <Routes>
            {/* default pages */}
            <Route path='/' element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='shop/:id' element={<ProductDetails />} />
            <Route path='cart' element={<Cart />} />
            <Route path='favorites' element={<Favorites />} />
            {/* admin pages */}
            <Route path='/*' element={<ProtectedRoute />}>
                <Route path='profile' element={<AllProducts />} />
                <Route path='profile/add-product' element={<AddProduct />} />
                <Route path='checkout' element={<Checkout />} />
            </Route>
            {/* products items */}
            <Route path='gaming' element={<Gaming />} />
            <Route path='laptops' element={<Laptops />} />
            <Route path='office' element={<Office />} />
            <Route path='phones' element={<Phones />} />
            <Route path='watches' element={<Watches />} />
            <Route path='wireless' element={<Wireless />} />
            {/* login & sign */}
            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<Login />} />
        </Routes>
    );
};

export default Routers