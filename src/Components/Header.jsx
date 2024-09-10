import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { logos, socialMediaUrl } from "../Details";
import HomeImg from '../assets/Home.png'
import Toggle from "./Toggle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import resumePDF from '../assets/Resume2.pdf'


function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { linkdein, github, twitter } = socialMediaUrl;

    const menuRef = useRef([])

    useGSAP(() => {
        if (isOpen) {
            gsap.from(menuRef.current, {
                y: -40,
                opacity: 0,
                duration: 1,
                stagger: 0.2, // Staggers the start time of each animation by 0.2 seconds
            });
        }
    }, [isOpen]);
    const toggleClass = () => {
        setIsOpen(!isOpen);
    };

    const handleResume = () => {
        window.open(resumePDF, '_blank');
    };

    return (
        <>
            <header className="container mx-auto md:flex justify-between text-xl max-width bg-transparent relative"
                // style={{
                //     backgroundImage: `url(${HomeImg})`,
                //     backgroundSize: 'cover',
                //     // minHeight: '100vh',
                //     // backgroundAttachment: 'fixed'
                // }}
            >
                <div className="flex justify-between items-center py-2 md:py-6">
                    <NavLink to="/">
                        <img className="w-14 rounded-full " src={logos.logo} alt="logo" />
                    </NavLink>
                    <div onClick={toggleClass} className="cursor-pointer">
                        <svg
                            className="stroke-dark-heading dark:stroke-white md:hidden"
                            width="25"
                            height="20"
                            viewBox="0 0 16 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
                                strokeWidth="1.875"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
                <nav className={`${!isOpen ? "hidden" : ""} text-center pb-8 md:flex justify-between`}>
                <ul ref={menuRef} className="text-gray-100  font-medium md:flex items-center md:gap-2 md:space-x-2 md:mr-10 text-sm">
                    <li className="pb-1 md:pb-0">
                        <NavLink
                            to="/"
                            onClick={toggleClass}
                            className="uppercase no-underline tracking-wide inline-block py-3.5 px-5 relative after:content-[''] after:block after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-gray-100 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="pb-1 md:pb-0">
                        <NavLink
                            to="/about"
                            onClick={toggleClass}
                            className="uppercase no-underline tracking-wide inline-block py-3.5 px-5 relative after:content-[''] after:block after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-gray-100 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
                        >
                            About
                        </NavLink>
                    </li>
                    <li className="pb-1 md:pb-0">
                        <NavLink
                            to="/technologies"
                            onClick={toggleClass}
                            className="uppercase no-underline tracking-wide inline-block py-3.5 px-5 relative after:content-[''] after:block after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-gray-100 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
                        >
                            Technologies
                        </NavLink>
                    </li>
                    <li className="pb-1 md:pb-0">
                        <NavLink
                            to="/projects"
                            onClick={toggleClass}
                            className="uppercase no-underline tracking-wide inline-block py-3.5 px-5 relative after:content-[''] after:block after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-gray-100 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li className="pb-1 md:pb-0">
                        <NavLink
                            to="/contact"
                            onClick={toggleClass}
                            className="uppercase no-underline tracking-wide inline-block py-3.5 px-5 relative after:content-[''] after:block after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-gray-100 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
                        >
                            Contact
                        </NavLink>
                    </li>
                        <button className="text-gray-100 bg-red-500 px-4 py-2 hover:font-bold"
                            style={{
                                backgroundColor: '#DC3545',
                                color: 'white',
                                padding: '10px 20px',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}
                            onClick={handleResume}>Resume</button>
                    <li>
                        {/* <Toggle /> */}
                    </li>
                </ul>
            </nav>


            </header>
        </>


    );

}

export default Header;
