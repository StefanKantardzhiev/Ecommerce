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

import AllProducts from '../admin/AllProducts';
import AddProduct from '../admin/AddProduct';

import ProtectedRoute from './ProtectedRoute';
import Favorites from '../pages/Favorites';

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='shop/:id' element={<ProductDetails />} />
            <Route path='cart' element={<Cart />} />
            <Route path='favorites' element={<Favorites />} />
            <Route path='/*' element={<ProtectedRoute />}>
                <Route path='profile' element={<Profile />} />
                <Route path='profile/all-products' element={<AllProducts />} />
                <Route path='profile/add-product' element={<AddProduct />} />
                <Route path='checkout' element={<Checkout />} />
            </Route>
            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<Login />} />
        </Routes>
    );
};

export default Routers