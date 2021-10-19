import React from 'react';
import { NavLink } from 'react-router-dom';
import useDoctors from '../../hooks/useDoctors';
import Doctor from '../Doctor/Doctor';

const FeaturedDoctors = () => {
    const [doctors] = useDoctors([]);

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 pt-12 mx-auto">
                    <div className="flex flex-col text-center w-full mb-1">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-1 text-green-700">Checkout the best doctors in town</h1>
                    </div>
                </div>
            </section>
            <div>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-12 mx-auto">
                        <NavLink to="/services" className="flex flex-wrap -m-4">
                            {
                                doctors.slice(0, 6).map(doctor => <Doctor
                                    key={doctor.id}
                                    doctor={doctor}
                                ></Doctor>)
                            }

                        </NavLink>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default FeaturedDoctors;