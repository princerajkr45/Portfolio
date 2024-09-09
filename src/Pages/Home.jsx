import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { personalDetails } from "../Details";
import About from "../Pages/About";
import Technologies from "../Pages/Technologies";
import Projects from "../Pages/Projects";
import Contact from "./Contact";
import HomeImg from '../assets/Home.png'
import Header from "../Components/Header";


function Home() {
    const { name, tagline, img } = personalDetails;

    const headingRef = useRef()
    const nameRef = useRef()
    const taglineRef = useRef()

    // useGSAP(() => {
    //     gsap.from(headingRef.current, {
    //         y: -500,
    //         duration: 1.8,
    //         delay: 0.8,
    //         rotate:1100,
    //     })

    //     gsap.from(nameRef.current, {
    //         x: -1550,
    //         y: -600,
    //         duration: 1.8,
    //         delay: 1.2,
    //         rotate:980,
    //     })

    //     gsap.from(taglineRef.current, {
    //         // x: -1550,
    //         y: 3400,
    //         duration: 1.8,
    //         delay: 1.6
    //     })

    // }, [])

   

    return (
        <>
            <main
                className="container mx-auto max-w-full md:z-0"
                style={{
                    backgroundImage: `url(${HomeImg})`,
                    backgroundSize: 'cover',
                    minHeight: '100vh',
                }}
                
            >
                <Header />

                <div className="flex flex-col md:flex-row justify-center items-center min-h-screen text-center">
                    <div className="text-center md:w-1/2">
                        <h1
                            ref={headingRef}
                            className="text-2xl md:text-4xl xl:text-5xl xl:leading-tight font-bold text-heading dark:text-light-heading"
                        >
                            Hi,👋<br />My Name is<br />
                        </h1>
                        <h1
                            ref={nameRef}
                            className="text text-gray-800 text-5xl font-bold font-mono tracking-wider uppercase relative cursor-pointer shine"
                        >
                            {name}
                        </h1>
                        <h2
                            ref={taglineRef}
                            className="text-2xl md:text-4xl xl:text-5xl xl:leading-tight font-bold text-heading dark:text-light-heading"
                        >
                            {tagline}
                        </h2>
                    </div>
                    {/* Uncomment and adjust image size and placement as needed */}
                    {/* <div className="mt-5 md:mt-0 md:w-1/2">
            <img className="w-1/2 md:ml-auto" src={img} alt="Profile Image" />
        </div> */}
                </div>
            </main>

            <About />
            <Technologies />
            <Projects />
            <Contact />


        </>


    );

}

export default Home;
