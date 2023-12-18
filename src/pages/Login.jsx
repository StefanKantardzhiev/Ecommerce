import React from "react";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/CommonSection";
// import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // eslint-disable-next-line
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const signin = async (e) => {
        // e.preventDefault()
        // setLoading(true)
        // try {
        //     const userCred = await signInWithEmailAndPassword(auth, email, password)
        //     const user = userCred.user
        //     setLoading(false)
        //     navigate('/cart')
        //     toast.success('Successfully logged in !')
        // } catch (error) {
        //     setLoading(false)
        //     toast.error(`${error.message}`)
        // }
    }
    return (
        <Helmet title="Login">
            <CommonSection title="Login" />
            <section className="login">
                <div className="login-container">
                    <h3 className="login-title">
                        Login
                    </h3>
                    <form className="login-form" onSubmit={signin}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}>
                        </input>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}></input>
                        <button
                            type="submit"
                            className="buy_btn">Login</button>
                    </form>
                    <p>Don't have a login? <br />Sign up <Link to={'/signup'}>here</Link>!</p>
                </div>
            </section>
        </Helmet>
    )
}

export default Login