import React, { useEffect } from "react";
import { contactDetails } from "../Details";
import contact from '../assets/contact.jpg';
import AOS from 'aos'
import 'aos/dist/aos.css';

function Contact() {
    const { email, phone } = contactDetails;

    useEffect(() => {
        AOS.init({
            duration: 2500,
            delay: 200,
            easing: 'ease-in-out'
        });
    }, []);


    return (
        <div className="bg-[#191919] py-12 px-4" data-aos="fade-up">
            <h1 className="text-2xl md:text-4xl xl:text-5xl text-heading dark:text-light-heading font-bold text-center mb-8">
                Contact Us
            </h1>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center bg-gray-900 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden " data-aos="zoom-in" data-aos-delay="800">
                <div className="w-full md:w-1/2 h-64 md:h-auto">
                    <img
                        src={contact}
                        alt="Contact"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="w-full md:w-1/2 p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-gray-200 dark:text-white mb-6 text-center md:text-left">
                        Get In Touch
                    </h2>
                    <form className="space-y-4" action='https://formspree.io/f/mzzpzojb' method="POST">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-300 dark:text-gray-400"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 block w-full px-3 py-2 border border-gray-600 dark:border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-300 dark:text-gray-400"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full px-3 py-2 border border-gray-600 dark:border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-300 dark:text-gray-400"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="mt-1 block w-full px-3 py-2 border border-gray-600 dark:border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
