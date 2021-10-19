import React from 'react';
import useAuth from '../../hooks/useAuth';
// import LoginComponent from './LoginComponent';

const Login = () => {
    const { signInUsingGoogle } = useAuth();

    const handleRegistration = (event) => {
        console.log('alu')
        event.preventDefault();
    }
    const handleNameChange = (event) => {
        console.log(event.target.value)
    }
    const handleEmailChange = (event) => {
        console.log(event.target.value)
    }
    const handlePasswordChange = (event) => {
        console.log(event.target.value)
    }
    return (
        <div>
            {/* <LoginComponent></LoginComponent> */}

            <div className="container mx-auto px-5 py-8 flex items-center  justify-center flex-col ">
                <h2 className="text-green-700 font-bold text-xl">Sign in to your Account</h2>
                <form action="" onSubmit={handleRegistration} className="object-center w-1/3  text-left">
                    <label htmlFor="name" className="mr-2 ">Name</label><br />
                    <input onBlur={handleNameChange} type="text" name="name" className="border-1 border-green-200 w-full rounded" placeholder="Your Name" />
                    <br />
                    <label htmlFor="email" className="mr-2 ">Email</label><br />
                    <input onBlur={handleEmailChange} type="text" name="email" className="border-1 border-green-200 w-full rounded" placeholder="Your Email" />
                    <br />
                    <label htmlFor="password" className="mr-2">Password</label><br />
                    <input onBlur={handlePasswordChange} type="password" name="password" className="border-1 border-green-200 w-full rounded" placeholder="Password" />
                    <br />
                    <input type="submit" value="Register" className="bg-green-200 my-2 px-4 py-2" />
                </form>
            </div>
            <br />
            <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;