import React from 'react'
import { NavLink } from "react-router-dom";
import { logos, socialMediaUrl } from "../Details";
import resumePDF from '../assets/Resume2.pdf'
import { FaGithub, FaLinkedin } from "react-icons/fa";


function Navbar() {

    const { github , linkdein} = socialMediaUrl

    const handleResume = () => {
        window.open(resumePDF, '_blank');
    };

    return (
        <>

            <nav className="container flex mx-auto md:flex justify-between items-center text-xl max-width bg-transparent">

                <div className="flex justify-between items-center py-2 md:py-6">
                    <NavLink to="/">
                        <img className="w-14 rounded-full " src={logos.logo} alt="logo" />
                    </NavLink>
                </div>
                <div>
                    <ul className='flex items-center gap-6 md:gap-8'>
                        <li>
                            <a href={github} target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-4xl text-white hover:scale-110 hover:opacity-50" title="Github" />
                            </a>
                        </li>
                        <li>
                            <a href={linkdein} target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-4xl text-white hover:scale-110 hover:opacity-50" title="Github" />
                            </a>
                        </li>
                        <li>

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
                        </li>
                    </ul>
                </div>

            </nav>
        </>
    )
}

export default Navbar