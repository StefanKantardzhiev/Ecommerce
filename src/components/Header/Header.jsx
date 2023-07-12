import React from 'react'
// import { Container, Row } from 'reactstrap'
import logo from '../../assets/images/PcBuildzLogo.png'
import { Link, NavLink } from 'react-router-dom'
const navLinks = [
    {
        path: '/',
        display: 'Home'
    },
    {
        path: 'shop',
        display: 'Shop'
    },
    {
        path: 'cart',
        display: 'Cart'
    }
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

const Header = () => {

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
                {/* if user */}
                <div className='logged'>

                    {navLinks.map((item, index) => (
                        <li className='nav_item' key={index}>
                            <NavLink to={item.path} className={(navClass) => navClass.isActive ? "nav_active" : ''} >{item.display}</NavLink>
                        </li>
                    ))}
                </div>
                <div className="not-logged">
                    {/* if not user */}
                    {navLinksNewUser.map((item, index) => (
                        <li className='nav_item' key={index}>
                            <NavLink to={item.path} className={(navClass) => navClass.isActive ? "nav_active" : ''} >{item.display}</NavLink>
                        </li>
                    ))}
                </div>

            </div>
        </header>

    )
}

export default Header