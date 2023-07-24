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

import Phones from '../components/Product Pages/Phones';
import GamingPc from '../components/Product Pages/Gaming';
import OfficePC from '../components/Product Pages/Office';
import Laptops from '../components/Product Pages/Laptops';
import Watches from '../components/Product Pages/Watches';
import Wireless from '../components/Product Pages/Wireless';
import ProtectedRoute from './ProtectedRoute';
import Favorites from '../pages/Favorites';

const Routers = () => {
    return <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cart' element={
            <ProtectedRoute>
                <Cart />
            </ProtectedRoute>} />
        <Route path='shop' element={<Shop />} />
        <Route path='shop/:id' element={<ProductDetails />} />
        <Route path='checkout' element={
            <ProtectedRoute>
                <Checkout />
            </ProtectedRoute>} />
        <Route path='signup' element={<Signup />} />
        <Route path='login' element={<Login />} />
        <Route path='/profile' element={
            <ProtectedRoute>
                <Profile />
            </ProtectedRoute>} />
        <Route path='/favorites' element={
            <ProtectedRoute>
                <Favorites />
            </ProtectedRoute>} />
    </Routes>
};

export default Routers