import React, { useEffect } from "react";
import Education from "../Components/Education";
import { personalDetails, eduDetails } from "../Details";
import AOS from 'aos'
import 'aos/dist/aos.css';

function About() {

    useEffect(() => {
        AOS.init({duration: 800, delay:100, once: false,mirror:false})
    },[]); 

    return (
        <main className="bg-[#252233] py-10 md:py-20" data-aos="fade-right">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <section className="text-center">
                    <h1 className="text-2xl text-heading md:text-4xl xl:text-5xl font-bold">
                        About Me
                    </h1>
                    <p className="text-gray-400 py-8 mx-auto lg:max-w-3xl">
                        {personalDetails.about}
                    </p>
                </section>
                <section className="pt-10">
                    <h2 className="text-xl text-heading md:text-3xl xl:text-4xl font-bold text-center">
                        Education
                    </h2>
                    <div className="mt-8">
                        {React.Children.toArray(
                            eduDetails.map(({ Position, Company, Location, Duration }) => (
                                <Education
                                    position={Position}
                                    company={Company}
                                    location={Location}
                                    duration={Duration}
                                />
                            ))
                        )}
                    </div>
                </section>
            </div>
        </main>
    );
}

export default About;
