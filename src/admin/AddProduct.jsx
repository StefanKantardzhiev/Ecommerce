import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { toast } from 'react-toastify'
import { db, storage } from '../firebase.config'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { collection, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router'
import { useAuth } from '../custom-hooks/useAuth'

const AddProduct = () => {
    const [title, setTitle] = useState('')
    const [shortDesc, setShortDesc] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [productImg, setProductImg] = useState(null)
    const navigate = useNavigate()
    const user = useAuth()



    const addProduct = async (e) => {
        e.preventDefault()
        // const product = {
        //     title,
        //     shortDesc,
        //     description,
        //     category,
        //     price,
        //     productImg,
        //     ownerId: user.uid,
        // }

        //add product to firebase

        try {
            const docRef = collection(db, 'products')
            const storageRef = ref(storage, `images/${(Date.now() * 100).toFixed(0)}`);

            uploadBytes(storageRef, productImg)
                .then((snapshot) => {
                    getDownloadURL(snapshot.ref).then(async (downloadUrl) => {
                        await addDoc(docRef, {
                            title,
                            shortDesc,
                            description,
                            category,
                            price,
                            ownerId: user.uid,
                            imgUrl: downloadUrl,
                        })
                    })
                });
        } catch (error) {
            toast.error(error.toString())
        }
        toast.dark('Product successfully added !')
        navigate('/profile')
    }


    return (
        <Helmet title="Add Product">
            <CommonSection title="Add Product" />
            <section className="add-product">
                <div className="add-product-container">
                    <h3 className="add-product-title">
                        Add Product
                    </h3>
                    <form className="add-product-form" required>
                        <input
                            type="text"
                            placeholder="Product title..."
                            value={title}
                            onChange={e => setTitle(e.target.value)}>
                        </input>
                        <input
                            required
                            type="text"
                            placeholder="Short description..."
                            value={shortDesc}
                            onChange={e => setShortDesc(e.target.value)}>

                        </input>
                        <input
                            required
                            type="number"
                            placeholder="Price.."
                            value={price}
                            onChange={e => setPrice(e.target.value)}>
                        </input>
                        <div className='form-group'>
                            <span>Category : </span>
                            <select className="categories" value={category} onChange={e => setCategory(e.target.value)}>
                                <option value="gaming">Gaming Buildz</option>
                                <option value="office">Office Buildz</option>
                                <option value="laptop">Laptops</option>
                                <option value="wireless">Wi-Fi Devices</option>
                                <option value="watches">Watches</option>
                                <option value="mobile">Smartphones</option>
                                <option value="tablet">Tablets</option>
                            </select>
                        </div>
                        <textarea
                            required
                            className='add-product-textarea'
                            type="text"
                            placeholder="Full description..."
                            value={description}
                            onChange={e => setDescription(e.target.value)}>
                        </textarea>
                        <span className='add-product-image'>Product Image</span>
                        <input type="file" placeholder='Upload .png/.jpg' required onChange={(e) => setProductImg(e.target.files[0])} />
                        <button
                            type="submit"
                            className="buy_btn" onClick={addProduct}>Add</button>
                    </form>
                </div>
            </section>
        </Helmet>
    )
}

export default AddProduct