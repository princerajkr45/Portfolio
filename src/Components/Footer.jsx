import React from "react";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
function Footer() {

    const phoneNumber = 8544125204;
    const emailAddress = "priyance5204@gmail.com";

    return (

        // <footer className="py-6 bg-gray-800 text-white">
        //     <div className="container mx-auto text-center">
        //         <p className="text-sm sm:text-base">
        //             &copy; 2020 All Rights Reserved. Design by
        //             <a href="https://html.design/" className="text-blue-400 hover:text-blue-600 ml-1">
        //                 Prince kumar
        //             </a>
        //         </p>
        //     </div>
        // </footer>

        <footer className="flex flex-col gap-12 bg-gray-800 text-gray-400 rounded p-10">
            <nav className="flex justify-center gap-20">
                <Link to='/about' className="link link-hover">About us</Link>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Projects</a>
                <a className="link link-hover">Technologies</a>
            </nav>
            <nav>
                <div className="flex justify-center gap-8">
                    <a href={`mailto:${emailAddress}`}>
                        <CiMail className="text-4xl" title="Gmail"/>
                    </a>
                    <a href={`tel:${phoneNumber}`}>
                        <IoIosCall className="text-4xl" title="Call"/>
                    </a>
                    <a href="https://github.com/princerajkr45/">
                        <FaGithub className="text-4xl" title="Github"/>
                    </a>
                </div>
            </nav>
            <aside>
                <div className="container mx-auto text-center">
                         <p className="text-sm sm:text-base">
                    
                        &copy; 2020 All Rights Reserved. Design by
                             <a href="https://html.design/" className="text-blue-400 hover:text-blue-600 ml-1">
                                 Prince kumar
                            
                             </a>
                         </p>
                     </div>
            </aside>
        </footer>
    );
}
export default Footer;
