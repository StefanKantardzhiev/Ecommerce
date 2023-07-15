import React, { useRef } from 'react'
// import { Container, Row } from 'reactstrap'
import logo from '../../assets/images/PcBuildzLogo.png'
import { Link, NavLink } from 'react-router-dom'

import { useSelector } from "react-redux"
import cartSlice from '../../redux/slices/cartSlice'


const navLinks = [
    {
        path: '/',
        display: 'Home'
    },
    {
        path: 'shop',
        display: 'Shop'
    },
]

const navLinksNewUser = [
    {
        path: 'login',
        display: 'Login'
    },
    {
        path: 'signup',
        display: 'Sign Up'
    },
]

const navLinksLoggedUser = [
    {
        path: 'profile',
        display: 'Profile'
    },
    {
        path: 'cart',
        display: 'Cart'
    }
]

const Header = () => {
    const isLoggedIn = true;

    const headerRef = useRef(null)
    const totalQuantity = useSelector(state => state.cart.totalQuantity)

    return (
        <header className='header'>
            <div className='nav_wrapper'>
                <div className='logo'>
                    <img src={logo} alt='logo' />
                    <div className='logo-text'>
                        <Link to={'/'}><h3>PCBuildz.de&copy;</h3>
                            <p>From enthusiasts for enthusiasts!</p></Link>
                    </div>
                </div>

                {!isLoggedIn ?
                    <div className="not-logged">
                        {navLinksNewUser.map((item, index) => (
                            <li className='nav_item' key={index}>
                                <NavLink to={item.path} className={(navClass) => navClass.isActive ? "nav_active" : ''} >{item.display}</NavLink>
                                
                            </li>
                        ))}
                    </div> :
                    <div className="logged">
                        {navLinksLoggedUser.map((item, index) => (
                            <li className='nav_item' key={index}>
                                <NavLink to={item.path} className={(navClass) => navClass.isActive ? "nav_active" : ''} >{item.display}</NavLink>
                            </li>
                        ))
                        }
                       <span className='totalQty'>{totalQuantity}</span>
                    </div>
                    
                }


                {/* <div className="logged">
                    {navLinksLoggedUser.map((item, index) => (
                        <li className='nav_item' key={index}>
                            <NavLink to={item.path} className={(navClass) => navClass.isActive ? "nav_active" : ''} >{item.display}</NavLink>
                        </li>
                    ))}
                </div> */}

            </div>
        </header>

    )
}

export default Header