import React from 'react'
// import { Container, Row } from 'reactstrap'
import logo from '../../assets/images/eco-logo.png'


const Header = () => {
    return (
        <header className='header'>
            <div className='nav_wrapper'>

                <div className='logo'>
                    <div className='logo-text'>
                        <img src={logo} alt='logo' />
                        <h1>PCBuildz.de</h1>
                        <p>From enthusiasts for enthusiasts!</p>
                    </div>
                </div>
                <ul className='menu'>
                    {/* if user */}<div className='logged'>
                        <li className='nav_item'>Home</li>
                        <li className='nav_item'>Shop</li>
                        <li className='nav_item'>Cart</li></div>

                    {/* if not user */}
                    <div className="not-logged">
                        <li className='nav_item'>Login</li>
                        <li className='nav_item'>Sign Up</li>
                    </div>
                </ul>

            </div>
        </header>

    )
}

export default Header