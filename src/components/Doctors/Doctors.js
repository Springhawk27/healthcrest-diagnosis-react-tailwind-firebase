import React from 'react';
import useDoctors from '../../hooks/useDoctors';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors] = useDoctors([]);

    return (
        <div >
            <section className="text-gray-600 body-font">
                <div className="container px-5 pt-8 mx-auto">
                    <div className="flex flex-col text-center w-full mb-1">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-1 text-green-700">Available Doctors</h1>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            doctors.map(doctor => <Doctor
                                key={doctor.id}
                                doctor={doctor}
                            ></Doctor>)

                        }


                    </div>
                </div>
            </section>
        </div>

    );
};

export default Doctors;