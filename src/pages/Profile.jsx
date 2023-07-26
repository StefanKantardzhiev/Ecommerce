import React from 'react'
import { useAuth } from '../custom-hooks/useAuth'
import ProductsCard from '../components/UI/ProductsCard'
import cartItems from '../pages/Cart'
import { useSelector } from 'react-redux'

const Profile = ({ data }) => {

    const currentUser = useAuth()
    const cartItems = useSelector(state => state.cart.cartItems).slice(0, 3)


    return (
        <section className="profile">
            <div className="profile-info">
                <img src={currentUser.photoURL} alt="" className="profile-img" />
                <h3>Welcome {currentUser.displayName} !</h3>
            </div>
            <div className='favorite-products'>
                {
                    cartItems.map(item => (
                        <ProductsCard item={item} key={item.id} />
                    ))
                }
            </div>
        </section>
    )
}

export default Profile