import React from 'react'
import { useAuth } from '../custom-hooks/useAuth'
import ProductsCard from '../components/UI/ProductsCard'
import products from '../assets/data/products'
const Profile = ({ data }) => {

    const currentUser = useAuth()
    
    return (
        <section className="profile">
            <div className="profile-info">
                <img src={currentUser.photoURL} alt="" className="profile-img" />
                <h3>Welcome {currentUser.displayName} !</h3>
            </div>
            <div className='favorite-products'>
                {
                    products.map(item => (
                        <ProductsCard item={item} key={item.id} />
                    ))
                }
            </div>
        </section>
    )
}

export default Profile