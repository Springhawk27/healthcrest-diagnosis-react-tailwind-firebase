import React from 'react';
import { NavLink } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, img, description } = service;

    return (
        <div className="lg:w-1/3 md:w-1/2 p-4 w-full hover:shadow-xl">
            <div className="block relative h-48 rounded overflow-hidden">
                <img alt="service" className="object-contain object-center w-full h-full block" src={img} />
            </div>
            <div className="mt-2 text-left">
                {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{name}</h3> */}
                <h2 className="text-gray-900 title-font text-lg font-medium">{name}</h2>
                {/* <p className="mt-1">Level: {level}</p> */}
                <p className="mt-1">{description}</p>
                {/* <p className="mt-1 text-red-700">Cost: ${price}</p> */}
                <NavLink to={`/booking/${id}`} className="flex justify-start mt-2">
                    < button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                        Book {name}</button>
                </NavLink>

            </div>
        </div >
    );
};

export default Service;