import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';

// import LoginComponent from './LoginComponent';

const Login = () => {
    const { auth, signInUsingGoogle } = useAuth();

    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'


    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }


    const handleNameChange = (event) => {
        setDisplayName(event.target.value)
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }




    const handleSignin = (event) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;

            })

        event.preventDefault();

    }

    return (
        <div>
            <div className="container mx-auto px-5 py-8 flex items-center  justify-center flex-col ">
                <h2 className="text-green-700 font-bold text-xl">Sign in to your Account</h2>
                <form onSubmit={handleSignin} className="object-center w-1/3  text-left">

                    <label htmlFor="email" className="mr-2 ">Email</label><br />
                    <input onBlur={handleEmailChange} type="text" name="email" className="border-1 border-green-200 w-full rounded" placeholder="Your Email" required />
                    <br />
                    <label htmlFor="password" className="mr-2">Password</label><br />
                    <input onBlur={handlePasswordChange} type="password" name="password" className="border-1 border-green-200 w-full rounded" placeholder="Password" required />
                    <br />
                    <input type="submit" value="Register" className="bg-green-200 my-2 px-4 py-2" />
                </form>
            </div>
            <br />
            <p>New to Healthcrest? <NavLink to="/register" className="text-blue-600 font-bold">Create  an Account</NavLink></p>
            <div>Or</div>
            <button onClick={handleGoogleLogIn} className="bg-yellow-300 px-3 py-2 mt-2">Google Sign In</button>
        </div>
    );
};

export default Login;