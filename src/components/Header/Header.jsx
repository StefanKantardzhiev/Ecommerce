import React from 'react'
import logo from '../../assets/images/PcBuildzLogo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux"
import { toast } from 'react-toastify'
import useAuth from '../../custom-hooks/useAuth'
import { motion } from 'framer-motion'

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
    const navigate = useNavigate()
    // const user = auth.currentUser
    const currentUser = useAuth();

    const sign = (e) => {

        // signOut(auth)
            // .then(() => {
            //     toast.success('Sign out successful!')
            //     navigate('/')
            // })
            // .catch((error) => {
            //     toast.error(error)
            // });
    }


    // const headerRef = useRef(null)
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const totalFavs = useSelector(state => state.favorite.totalQuantity)
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

                {currentUser === null ?
                    <div className="logged">
                        {navLinksNewUser.map((item, index) => (
                            <li className='nav_item' key={(Math.random() * 100).toFixed(0)}>
                                <NavLink to={item.path} className={(navClass) => navClass.isActive ? "nav_active" : ''} >{item.display}</NavLink>
                            </li>

                        ))}
                    </div> : <>
                        <div className='logged'>
                            <li className="favorites-icon"><Link to ='/favorites'><i className='ri-heart-line' /></Link><span className='totalQty'>{totalFavs}</span></li>
                            <li className="total-icon"><Link to ='/cart'><i className='ri-shopping-cart-line' /></Link><span className='totalQty'>{totalQuantity}</span></li>
                            <li className='profile'><Link to="/profile"><motion.img whileTap={{ scale: 1.2 }} src={currentUser ? currentUser.photoURL : 'Profile'} />{currentUser.displayName}</Link></li>
                            <li className='logout' onClick={sign}>Logout</li>
                        </div>
                    </>
                }

            </div>
        </header >
    )
}

export default Header