import React from 'react'
import logo from '../../assets/images/PcBuildzLogo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux"
import { auth } from '../../firebase.config'
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify'



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
        path: 'profile/:id',
        display: 'Profile'
    },
    {
        path: 'cart',
        display: 'Cart'
    }
]


const Header = () => {
    const navigate = useNavigate()
    const user = auth.currentUser

    const sign = (e) => {

        signOut(auth)
            .then(() => {
                toast.success('Sign out successful!')
                navigate('/')
            })
            .catch((error) => {
                toast.error(error)
            });
    }


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

                {!user ?
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
                        <span className='logout' onClick={sign}>Logout</span>
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