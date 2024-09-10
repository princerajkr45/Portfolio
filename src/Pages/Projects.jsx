import React, { useEffect } from "react";
import Project from "../Components/Projects"; // Ensure this is correctly named
import { projectDetails } from "../Details";
import ProjectImg from '../assets/Project.avif';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useGSAP } from "@gsap/react"
import gsap from "gsap";

function Projects() {
    useEffect(() => {
        AOS.init({
            duration: 3000,
            easing:'ease-in-out'
        });
    }, []);
   
    return (
        <main
            className="relative bg-gray-900 py-10 px-4 min-h-screen"
            style={{
                backgroundImage: `url(${ProjectImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
            
        >
            <section className="text-center mb-16 max-w-4xl mx-auto" data-aos="fade-up">
                <h1 className="text-2xl text-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold mb-6">
                    Projects
                </h1>
                <p className="text-gray-400 md:text-lg">
                    Here are some of the projects I have worked on recently. Click on the project title or image to learn more.
                </p>
            </section>

            <section 
                className="grid grid-cols-1 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto px-4 max-w-7xl"
                // data-aos="fade-down"
                // data-aos-easing="linear"
                // data-aos-duration="1500"
                // data-aos-delay="1000"
            >
                {React.Children.toArray(
                    projectDetails.map(
                        ({ title, image, description, techstack, previewLink, githubLink },index) => (
                            <div 
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <Project
                                    title={title}
                                    image={image}
                                    description={description}
                                    techstack={techstack}
                                    previewLink={previewLink}
                                    githubLink={githubLink}
                                />
                            </div>
                            
                        )
                    )
                )}
            </section>
        </main>
    );
}

export default Projects;
