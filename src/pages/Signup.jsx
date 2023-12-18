import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import { Link } from "react-router-dom";
import { useState } from "react";

import { toast } from "react-toastify";

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