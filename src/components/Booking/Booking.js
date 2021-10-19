import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import useServices from '../../hooks/useServices';

const Booking = () => {
    const { serviceId } = useParams();
    const [services] = useServices([]);
    // console.log(serviceId)

    const [booking, setBooking] = useState([]);
    // const { id, name, price, img, description } = booking;


    useEffect(() => {
        const bookingDetail = services.find(service => service?.id == serviceId);
        setBooking(bookingDetail);
        // console.log(bookingDetail)
        // console.log('asaf', serviceId)

    }, [services, serviceId])

    return (

        <div className="lg:w-1/1 md:w-1/1 p-4 w-full hover:shadow-xl">
            <div className="block relative h-48 rounded overflow-hidden">
                <img alt="service" className="object-contain object-center w-full h-full block" src={booking?.img} />
            </div>
            <div className="mt-2 text-left">
                <h2 className="text-blue-600 title-font text-lg font-medium">{booking?.name}</h2>
                <p className="mt-1">{booking?.description}</p>
                <p className="mt-1 text-red-700">Cost: ${booking?.price}</p>
                <NavLink to="/doctors" className="flex justify-start mt-2">
                    < button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                        Book for appoinment</button>
                </NavLink>

            </div>
        </div >
    );
};

export default Booking;