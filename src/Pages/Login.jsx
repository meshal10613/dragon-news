import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const {signIn} = use(AuthContext);
    const [showPass, setShowPass] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setError("");
        
        signIn(email, password)
        .then(() => {
            navigate(`${location.state ? location.state : "/"}`);
        })
        .catch((error) => {
            console.log(error)
            setError(error.code)
        })
    }
    return (
        <div className="flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className='py-5'>
                    <h2 className='text-center text-3xl font-semibold text-accent'>Login Your Account</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={handleLogin} className="fieldset">
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Enter Your Email" required/>
                        {/* password */}
                        <div className='relative'>
                            <label className="label">Password</label>
                            <input type={showPass ? "text" : "password"} name='password' className="input" placeholder="Enter Your Password" required/>
                            <p 
                                onClick={() => {setShowPass(!showPass)}} 
                                className='absolute right-5 top-7 cursor-pointer'>
                                    { showPass ? <FaEyeSlash  size={20}/> : <FaEye size={20}/>}
                            </p>
                        </div>
                        {
                            error && <p className='text-red-500'>{error}</p>
                        }
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    </form>
                    <p className='text-center'>Don't Have An Accont?
                        <Link to="/auth/register" className='link link-hover text-secondary'> Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;