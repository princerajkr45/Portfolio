import React from "react";
import { techStackDetails } from "../Details";

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
        <main className="container mx-auto max-width pt-10 pb-20 ">
            <section>
                <h1 className="text-2xl text-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
                    Tech Stack
                </h1>
                <p className="text-gray-400 py-2 lg:max-w-3xl">
                    Technologies I've been working with recently
                </p>
            </section>
            <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src={html} title="html" alt="" /></a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src={css} title="CSS" alt="" /></a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src={js} title="JavaScript" alt="" /></a>
                <a href="https://react.dev/"><img src={react} title="React" alt="" /></a>
                <a href="https://react-redux.js.org/"><img src={redux} title="Redux" alt="" /></a>
                <a href="https://expressjs.com/"><img src={express} title="Express" alt="" /></a>
                <a href="https://www.mongodb.com/"><img src={mongodb} title="MongoDB" alt="" className="rounded-[50%]" /></a>
                <a href="https://tailwindcss.com/"><img src={tailwind} title="Tailwind CSS" alt="" /></a>
                <a href="https://getbootstrap.com/docs/4.1/getting-started/introduction/"><img src={bootstrap} title="Bootstrap" alt="" /></a>
                            
            </section>
            <section>
                <h1 className="text-2xl pt-10 text-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
                    Tools
                </h1>
            </section>
            <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
                <a href="https://code.visualstudio.com/"><img src={vscode} title="Visual Studio Code" alt="" /></a>
                <a href="https://git-scm.com/"><img src={git} title="Git" alt="Git" /></a>
                <a href="https://github.com/"><img src={github} title="Github" alt="Github" /></a>
                <a href="https://www.figma.com/"><img src={figma} title="Figma" alt="Figma" /></a>
                <a href="https://www.npmjs.com/"><img src={npm} title="NPM" alt="NPM" /></a>
                <a href="https://www.postman.com/"><img src={postman} title="Postman" alt="Postman" /></a>
            </section>
        </main>
    );
}

export default Technologies;
