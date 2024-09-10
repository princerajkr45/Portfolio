import React, { useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoIosSchool } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import AOS from 'aos'
import 'aos/dist/aos.css';

function Education({ position, company, location, duration }) {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay:1000,
        });
    }, []);


    return (
        <article 
            className="pt-8 border-b-2  border-dark-content pb-5 dark:border-light-content border-opacity-20 dark:border-opacity-20" 
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
        >
            <div className="flex justify-between items-center">
                <h1 className="text-gray-400 md:text-lg lg:text-xl">{position}</h1>
                {/* <div className="btn bg-greenbg text-green-text text-xs inline-block rounded-3xl px-3 py-1 min-w-fit">
                    {type}
                </div> */}
            </div>
            <div className="flex justify-between pt-2">
                <div className="flex flex-col md:flex-row">
                    <div className="flex items-center pr-5">
                       <IoIosSchool className="text-gray-400"/>
                           
                        <p className="text-gray-400 text-xs md:text-sm font-light pl-1">{company}</p>
                    </div>
                    <div className="flex items-center">

                         <CiLocationOn className="text-gray-400"/>
                        <p className="text-gray-400 text-xs md:text-sm font-light pl-1">{location}</p>
                    </div>
                </div>
                <div className="flex gap-1 items-center">
                    <SlCalender className="text-gray-400" />
                    <p className="text-gray-400 text-xs md:text-sm font-light pl-1 min-w-fit">{duration}</p>
                </div>
                
            </div>
        </article>
    );
}

export default Education;
