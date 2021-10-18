import React from 'react';
import coronavirus_detail from '../../images/article/coronavirus_detail.png'

const ArticleDetail = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
                    <img className="lg:w-4/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="coronavirus_detail" src={coronavirus_detail} />
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-900">What is a coronavirus? What is COVID-19?
                        </h1>
                        <p className="mb-8 leading-relaxed text-left">Coronaviruses are a family of viruses commonly infecting people and animals. They are responsible for up to one-third of respiratory infections in children and adults, ranging from a common cold to more severe illness, like pneumonia. Historically, these viruses have been responsible for several respiratory disease outbreaks around the world, including SARS, MERS and now COVID-19. The official name of the novel coronavirus is severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). As of 11 March 2020, the WHO has declared COVID-19 a pandemic, which does not refer to the severity of the disease but rather the geographic spread of it where the likelihood of community spread is high.
                        </p>

                    </div>
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-900">How is it transmitted?
                        </h1>
                        <p className="mb-8 leading-relaxed text-left">COVID-19 is spread through airborne transmission, particularly when the infected person coughs or sneezes. These droplets contaminate other people, objects and surfaces within the vicinity of the infected person. When other people touch these objects or surfaces, they transfer the virus to themselves when they touch their face, particularly the eyes, nose or mouth.
                            <br /> <br />
                            Social distancing of a meter away from an infected person is key to preventing infection. The virus has been found to survive on surfaces for several hours, even up to several days. Therefore, practicing frequent handwashing upon coming into contact with these surfaces, i.e., door handles, railings, elevator buttons, etc. may help to prevent yourself from getting the virus.

                            <br /> <br />
                            Your cellphone, money and keyboards can inadvertently carry the virus if you’ve come into contact with the virus from one of these carrier surfaces. Disinfect them often.


                        </p>

                    </div>
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-900">What are the symptoms?
                        </h1>
                        <p className="mb-4 leading-relaxed text-left">Symptoms can appear within 2 to 14 days after exposure to the virus. Most people experience them after 5-6 days.

                            <br /> <br />
                            <li className="mb-2" ><strong>Fever (80-90% of cases) -</strong> body temperature over 38.3°C. This is the key symptom, sometimes accompanied by chills. More common in adults than children.</li>
                            <li className="mb-2"><strong>Cough (59-82% of cases) - </strong> usually dry.</li>
                            <li className="mb-2"><strong>Breathing difficulty, or shortness of breath (31-55% of cases) - </strong> appears on average 5-8 days after the first symptoms of the disease.</li>
                            <li className="mb-2"><strong>Anosmia -</strong> sudden partial or complete loss of the sense of smell.</li>
                            <li className="mb-2"><strong>Cutaneous manifestations –</strong> morbilliform rash, hives, vesicular (varicella-like) eruptions (small papules, vesicles, pustules) or chilblain-like acral lesions (on fingers, elbows, toes).</li>
                            <br />
                            In addition, other symptoms may occur, such as muscle pain, fatigue, increased phlegm production, headache, sore throat (at the beginning of the disease), chest pain, or coughing up blood (5% of cases). Some patients (10% of cases) also present gastrointestinal symptoms such as nausea, vomiting, diarrhea.

                            <br /><br />
                            <strong>Important: </strong> Viruses are particularly common at this time of year. COVID-19 is challenging to diagnose as many of the symptoms are common to other infections. The hallmark symptoms of the COVID-19 infection are cough and fever. However, these are also symptoms of the common flu. Other symptoms, like sneezing, runny nose, sore throat, fatigue and muscle aches, are more suggestive of other infectious diseases.


                        </p>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default ArticleDetail;