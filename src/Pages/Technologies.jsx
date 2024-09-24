import React from "react";
import { techStackDetails } from "../Details";
import TechImg from '../assets/Tech.avif';

function Technologies() {
    const {
        html,
        css,
        js,
        react,
        redux,
        express,
        mongodb,
        tailwind,
        bootstrap,
        vscode,
        git,
        github,
        npm,
        postman,
        figma,
    } = techStackDetails;

    return (
        <main className="relative bg-gray-900 py-10 md:py-20">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${TechImg})`,
                    minHeight: '100vh',
                }}
            />
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <section className="text-center">
                    <h1 className="text-2xl text-heading dark:text-light-heading md:text-4xl xl:text-5xl font-bold">
                        Tech Stack
                    </h1>
                    <p className="text-gray-400 py-2 mx-auto lg:max-w-3xl">
                        Technologies I've been working with recently
                    </p>
                </section>
                <section className="grid grid-cols-3 justify-center sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-8 md:gap-10 pt-6 px-8">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
                        <img src={html} title="HTML" alt="HTML" className=' w-16 h-16 md:w-20 md:h-20' />
                    </a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                        <img src={css} title="CSS" alt="CSS" className='w-16 h-16 md:w-20 md:h-20' />
                    </a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                        <img src={js} title="JavaScript" alt="JavaScript" className='w-20 h-20 md:w-24 md:h-24' />
                    </a>
                    <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                        <img src={react} title="React" alt="React" className='w-20 h-20 md:w-24 md:h-24' />
                    </a>
                    <a href="https://react-redux.js.org/" target="_blank" rel="noopener noreferrer">
                        <img src={redux} title="Redux" alt="Redux" className='w-20 h-20 md:w-24 md:h-24' />
                    </a>
                    <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                        <img src={tailwind} title="Tailwind CSS" alt="Tailwind CSS" className='w-20 h-20 md:w-24 md:h-24' />
                    </a>
                    <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
                        <img src={express} title="Express" alt="Express" className='w-20 h-20 md:w-24 md:h-24' />
                    </a>
                    <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
                        <img src={mongodb} title="MongoDB" alt="MongoDB" className='rounded-full w-20 h-20 md:w-24 md:h-24' />
                    </a>
                    <a href="https://getbootstrap.com/docs/4.1/getting-started/introduction/" target="_blank" rel="noopener noreferrer">
                        <img src={bootstrap} title="Bootstrap" alt="Bootstrap" className='w-20 h-20 md:w-24 md:h-24' />
                    </a>
                </section>
                <section className="text-center py-10">
                    <h1 className="text-2xl text-heading dark:text-light-heading md:text-4xl xl:text-5xl font-bold">
                        Tools
                    </h1>
                </section>
                <section className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 md:gap-10 pt-6 px-8">
                    <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
                        <img src={vscode} title="Visual Studio Code" alt="Visual Studio Code" className='w-20 h-20 md:w-24 md:h-24' />
                    </a>
                    <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
                        <img src={git} title="Git" alt="Git" className='w-20 h-20 md:w-24 md:h-24' />
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                        <img src={github} title="Github" alt="Github" className='w-20 h-20 md:w-24 md:h-24' />
                    </a>
                    <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
                        <img src={figma} title="Figma" alt="Figma" className='w-20 h-20 md:w-24 md:h-24' />
                    </a>
                    <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">
                        <img src={npm} title="NPM" alt="NPM" className='w-20 h-20 md:w-24 md:h-24' />
                    </a>
                    <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer">
                        <img src={postman} title="Postman" alt="Postman" className='w-20 h-20 md:w-24 md:h-24' />
                    </a>
                </section>
            </div>
        </main>
    );
}

export default Technologies;
