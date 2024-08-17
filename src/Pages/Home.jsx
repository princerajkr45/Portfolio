import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";
import About from "../Pages/About";

function Home() {
    const { name, tagline, img } = personalDetails;
   

    return (
       <>
            <main className="container mx-auto max-width pb-20  md:flex justify-between items-center  md:h-screen">
                <div className="w-full text-center">
                    <h1

                        className="text-2xl text-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
                    >
                        Hi,👋<br></br>My Name is<br></br>
                    </h1>
                    <h1

                        className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
                    >
                        {name}
                    </h1>
                    <h2

                        className="text-2xl text-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
                    >
                        {tagline}
                    </h2>
                </div>
                {/* <div className="mt-5 md:mt-0">
                    <img className="w-1/2 md:ml-auto" src={img} alt="Pavan MG" />
                </div> */}
            </main>

            
       </>

        
    );
    
}

export default Home;
