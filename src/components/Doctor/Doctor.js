import React from 'react';
import { NavLink } from 'react-router-dom';

const Doctor = ({ doctor }) => {
    const { name, specialities, experiences, hospital, branch, phone, img } = doctor;

    return (
        <div className="lg:w-1/3 md:w-1/2 p-4 w-full hover:shadow-xl">
            <div className="block relative h-48 rounded overflow-hidden">
                <img alt="service" className="object-contain object-center w-full h-full block" src={img} />
            </div>
            <div className="mt-2 text-left">
                <h2 className="text-gray-900 title-font text-lg font-medium"><strong>Name:</strong>{name}</h2>
                <p className="mt-1"><strong>Specialities: </strong>{specialities}</p>
                <p className="mt-1"><strong>Experiences Summary: </strong>{experiences}</p>
                <p className="mt-1"><strong>Hospital: </strong>{hospital}</p>
                <p className="mt-1"><strong>Branch: </strong>{branch}</p>
                <p className="mt-1"><strong>Phone: </strong>{phone}</p>
                <NavLink to="/contact" className="flex justify-start mt-2">
                    < button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                        Get an appointment </button>
                </NavLink>

            </div>
        </div >
    );
};

export default Doctor;