import React from 'react';
import { NavLink } from 'react-router-dom';
import main_logo from '../../images/logo/main-logo.png'

const Header = () => {
    return (

        <div className="sticky top-0"	>
            <header className="text-gray-600 body-font bg-green-50 ">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
                    <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src={main_logo} alt="" />
                        <NavLink to="/home"><span className="ml-3 text-xl text-green-600">Healthcrest Diagnosis</span></NavLink>
                    </div>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <NavLink
                            className="mr-5 hover:text-green-500"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#48BB78"
                            }}
                            to="/services">Services</NavLink>
                        <NavLink
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#48BB78"
                            }}
                            to="/doctors"
                            className="mr-5 hover:text-green-500">Doctors</NavLink>
                        <NavLink
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#48BB78"
                            }}
                            to="/about"
                            className="mr-5 hover:text-green-500">About Us</NavLink>
                        <NavLink
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#48BB78"
                            }}
                            to="/contact"
                            className="mr-5 hover:text-green-500">Contact</NavLink>
                    </nav>
                    <button className="inline-flex items-center bg-green-100 border-0 py-1 px-3 focus:outline-none hover:bg-green-200 rounded text-base mt-4 md:mt-0">Button
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;