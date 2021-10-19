import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const Services = (props) => {
    const [services] = useServices([]);

    return (

        <div >
            <section className="text-gray-600 body-font">
                <div className="container px-5 pt-8 mx-auto">
                    <div className="flex flex-col text-center w-full mb-1">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-1 text-green-700">Check Out Our  Services</h1>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            services.map(service => <Service
                                key={service.id}
                                service={service}
                            ></Service>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;





