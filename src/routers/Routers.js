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


const Routers = () => {
    return <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path='shop' element={<Shop />} />
        <Route path='shop/:id' element={<ProductDetails />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='signup' element={<Signup />} />
        <Route path='login' element={<Login />} />
        <Route path='users/:id' element={<Profile />} />

        <Route path='phones' element={<Phones />} />
        <Route path='laptops' element={<Laptops />} />
        <Route path='gaming' element={<GamingPc />} />
        <Route path='office' element={<OfficePC />} />
        <Route path='watches' element={<Watches />} />
        <Route path='wireless' element={<Wireless />} />

    </Routes>
};

export default Routers