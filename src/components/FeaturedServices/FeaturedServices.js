import React from 'react';
import { NavLink } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const FeaturedServices = () => {
    const [services] = useServices([]);

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 pt-12 mx-auto">
                    <div className="flex flex-col text-center w-full mb-1">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-1 text-green-700">We provide the below diagnosis and many more</h1>
                    </div>
                </div>
            </section>
            <div>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-12 mx-auto">
                        <NavLink to="/courses" className="flex flex-wrap -m-4">
                            {
                                services.slice(0, 6).map(service => <Service
                                    key={service.id}
                                    service={service}
                                ></Service>)

                            }

                        </NavLink>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default FeaturedServices;