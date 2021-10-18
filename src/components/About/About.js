import React from 'react';
import about_us from '../../images/about/about_us.jpg'
import goal_objective from '../../images/about/goal_objective.jpg'


const About = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src={about_us} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Who <strong>We Are</strong>
                        </h1>
                        <p className="mb-8 leading-relaxed">Healthcrest Diagnosisis an advanced Centre for diagnostic and medical services. It is one of the prestigious diagnostic complexes of Bangladesh which started its activities in 1990. Healthcrest Diagnosisis the largest diagnostic services provider organization in private sector of the country. It is been pioneer in introducing world latest medical equipments and advanced technology to provide round the clock medical investigations and consultancy services.</p>

                    </div>
                </div>
            </section>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <img alt="feature" class="object-cover object-center h-full w-full" src={goal_objective} />
                    </div>
                    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div class="flex flex-col mb-10 lg:items-start items-center">
                            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div class="flex-grow">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Our Goal</h2>
                                <p class="leading-relaxed text-base">To establish a referral Diagnostic and Medical Services Centre.

                                </p>

                            </div>
                        </div>

                        <div class="flex flex-col mb-10 lg:items-start items-center">
                            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div class="flex-grow">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Our Objective</h2>
                                <p class="leading-relaxed text-base">
                                    <li>To render the world standard diagnostic service to the people of the country at an affordable cost and in turn to limit the outflow of the patient abroad at the expense of heard earn foreign currency by providing quality diagnostic services.</li>
                                    <li>Out door basis treatment by renowned General Practitioners, Consultants and Professors in different medical fields.</li>
                                    <li>To promote Health Education & Medical Services.</li>
                                    <li>Day care Centre for follow-up cardiac renal and oncology patients.</li>
                                    <li>To build a full fledged specialized (Tertiary) Hospital.</li>
                                    <li>Set up Satellite collection Centre.</li>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;