import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import { Link } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { auth } from "../firebase.config";
import { storage } from '../firebase.config'


import { toast } from "react-toastify";

import { db } from '../firebase.config'
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [rePass, setRepass] = useState('')
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)


    const navigate = useNavigate()

    const sign = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            const user = userCredential.user

            const storageRef = ref(storage, `images/${username.toString().toLocaleLowerCase()}`)
            if (password === rePass) {
                if (email != '' && username != '') {
                    uploadBytes(storageRef, file)
                        .then((snapshot) => {
                            //update profile
                            getDownloadURL(snapshot.ref).then(async (downloadUrl) => {
                                await updateProfile(user, {
                                    displayName: username,
                                    photoURL: downloadUrl,
                                }).catch((error) => {
                                    toast.error(error)
                                })

                                await setDoc(doc(db, "users", user.uid), {
                                    uid: user.uid,
                                    displayName: username,
                                    email,
                                    photoURL: downloadUrl,
                                }).catch((error) => {
                                    toast.error(error)
                                })


                            });
                        });
                    setLoading(false)
                    toast.success('Successfully Registered')
                    navigate('/login')
                } else {
                    toast.error("Passwords don't match!")
                    setLoading(false)
                    navigate('/signup')
                }
            }
        }
        catch (error) {
            setLoading(false)
            toast.error(error)
        }

    }

    return (
        <Helmet title="Register">
            <CommonSection title="Register" />
            {loading ? (<div className="loading-text">
                <span>Loading...</span>
            </div>) : (<>
                <section className="register">
                    <div className="register-container">
                        <h3 className="register-title">Register</h3>
                        <form className="register-form" onSubmit={sign}>
                            <input
                                type="text"
                                placeholder="Enter your username"
                                value={username}
                                onChange={e => setUsername(e.target.value)}></input>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}></input>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}></input>
                            <input type="re-password" placeholder="Repeat password" value={rePass} onChange={e => setRepass(e.target.value)}></input>
                            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                            <button type="submit" className="buy_btn">Register</button>
                        </form>
                        <p>Already have an account?<br />Login <Link to={'/login'}>here</Link>!</p>
                    </div>
                </section>
            </>
            )
            }
        </Helmet>
    )
}

export default SignUp