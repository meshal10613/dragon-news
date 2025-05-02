import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from '../Provider/AuthProvider';


const Register = () => {
    const {createUser, setUser, updateUser } = use(AuthContext);
    const [showPass, setShowPass] = useState(false);
    const [nameError, setNameError] = useState("");
    const navigate = useNavigate()
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        if(name.length <= 5){
            setNameError("Name should be more than 5 character");
            return;
        }else{
            setNameError("");
        }
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
        .then((result) => {
            console.log(result)
            const user = result.user;
            const updateProfile = {displayName: name, photoURL: photo};
            updateUser(updateProfile)
            .then(() => {
                setUser({...user, displayName: name, photoURL: photo});
                navigate("/")
            })
            .catch((error) => {
                console.log(error);
                setUser(user)
            })
        })
        .catch((error) => {
            console.log(error.message)
        })
    };
    return (
        <div className="flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className='py-5'>
                    <h2 className='text-center text-3xl font-semibold text-accent'>Register Your Account</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset">
                        <label className="label">Your Name</label>
                        <input type="text" name='name' className="input" placeholder="Enter Your Name" required/>
                        {
                            nameError && <p className='text-red-500'>{nameError}</p>
                        }
                        <label className="label">Photo URL</label>
                        <input type="text" name='photo' className="input" placeholder="Enter Your Photo URL" required/>
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Enter Your Email" required/>
                        <div className='relative'>
                            <label className="label">Password</label>
                            <input type={showPass ? "text" : "password"} required name='password' className="input" placeholder="Enter Your Password" />
                            <p 
                                onClick={() => {setShowPass(!showPass)}} 
                                className='absolute right-5 top-7 cursor-pointer'>
                                    { showPass ? <FaEyeSlash  size={20}/> : <FaEye size={20}/>}
                            </p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <input type="checkbox" required defaultChecked/><p>Accept Terms & Conditions</p>
                        </div>
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    </form>
                    <p className='text-center'>Already Have An Accont?
                        <Link to="/auth/login" className='link link-hover text-secondary'> Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;