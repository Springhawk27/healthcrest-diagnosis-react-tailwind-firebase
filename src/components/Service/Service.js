import React from 'react';

const Service = (props) => {
    const { name, price, img, description } = props.service;

    return (
        <div className="lg:w-1/3 md:w-1/2 p-4 w-full hover:shadow-xl">
            <div className="block relative h-48 rounded overflow-hidden">
                <img alt="service" className="object-contain object-center w-full h-full block" src={img} />
            </div>
            <div className="mt-4 text-left">
                {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3> */}
                <h2 className="text-gray-900 title-font text-lg font-medium">{name}</h2>
                {/* <p className="mt-1">Level: {level}</p> */}
                <p className="mt-1">{description}</p>
                <p className="mt-1 text-red-700">Cost: ${price}</p>
                {/* <p className="mt-1">Enrolled: {enrolled}</p> */}
                {/* <p className="mt-1">Language: {language}</p> */}

            </div>
        </div>
    );
};

export default Service;