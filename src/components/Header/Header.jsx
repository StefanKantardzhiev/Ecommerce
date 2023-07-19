import React from 'react'
import logo from '../../assets/images/PcBuildzLogo.png'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from "react-redux"


// const navLinks = [
//     {
//         path: '/',
//         display: 'Home'
//     },
//     {
//         path: 'shop',
//         display: 'Shop'
//     },
// ]

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

    // const headerRef = useRef(null)
    const totalQuantity = useSelector(state => state.cart.totalQuantity)

    return (
        <header className='header'>
            <div className='nav_wrapper'>
                <div className='logo'>
                    <img src={logo} alt='logo' />
                    <div className='logo-text'>
                        <span> <Link to={'/'}><h3>PCBuildz.de&copy;</h3>
                            From enthusiasts for enthusiasts!</Link></span>
                    </div>
                </div>

                {isLoggedIn ?
                    <div className="logged">
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