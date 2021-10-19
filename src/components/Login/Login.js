import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useHistory, useLocation } from 'react-router';

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
    const handleRegistration = (event) => {
        // console.log(name, email, password)
        createUserWithEmailAndPassword(auth, displayName, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
            })
        // .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     // ..
        // });
        event.preventDefault();
    }

    return (
        <div>
            {/* <LoginComponent></LoginComponent> */}

            <div className="container mx-auto px-5 py-8 flex items-center  justify-center flex-col ">
                <h2 className="text-green-700 font-bold text-xl">Sign in to your Account</h2>
                <form onSubmit={handleRegistration} className="object-center w-1/3  text-left">
                    <label htmlFor="name" className="mr-2 ">Name</label><br />
                    <input onBlur={handleNameChange} type="text" name="name" className="border-1 border-green-200 w-full rounded" placeholder="Your Name" required />
                    <br />
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
            <button onClick={handleGoogleLogIn} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;