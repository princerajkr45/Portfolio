// Enter all your detials in this file
// Logo images
import logo from "./assets/Logo.jpg";
// Profile Image
import profile from "./assets/my pc.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.webp";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import express from "./assets/techstack/express.png"
import mongodb from "./assets/techstack/mongodb.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.png";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.png";
import projectImage4 from "./assets/projects/project4.png";
import projectImage5 from "./assets/projects/project5.png";

// Logos
export const logos = {

    logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
    name: "Prince Kumar",
    tagline: "I build things for web",
    img: profile,
    about: `Hi, I’m Prince Kumar, a Frontend Developer with a passion for creating dynamic, user-friendly web applications. With a Master’s in Computer Applications and expertise in technologies like i mentioned below , I craft elegant and responsive designs that enhance user experience. I’m dedicated to staying ahead of industry trends and continuously improving my skills. Explore my portfolio and feel free to reach out if you’d like to collaborate!`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
    linkdein: "https://www.linkedin.com/",
    github: "https://github.com/princerajkr45/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
// export const workDetails = [
//     {
//         Position: "Frontend Web Developer",
//         Company: `Company Name here`,
//         Location: "Bengaluru",
//         Type: "Full Time",
//         Duration: "Sep 2021 - Dec 2021",
//     },
//     {
//         Position: "Internship",
//         Company: `Company Name here`,
//         Location: "Bengaluru",
//         Type: "Internship",
//         Duration: "Sep 2021 - Dec 2021",
//     },
//     {
//         Position: "Internship",
//         Company: `Company Name here`,
//         Location: "Bengaluru",
//         Type: "Internship",
//         Duration: "Sep 2021 - Dec 2021",
//     },
// ];

// Enter your Education Details here
export const eduDetails = [
    {
        Position: "Master in computer application",
        Company: "Amity University",
        Location: "Patna",
        Duration: "Sept 2023 - Present",
    },
    {
        Position: "Bachelor of Science in Information Technology",
        Company: `A.N. College`,
        Location: "Patna",
        Duration: "June 2020 - July 2023",
    },
];

// Tech Stack and Tools
export const techStackDetails = {
    html: html,
    css: css,
    js: js,
    react: react,
    redux: redux,
    express:express,
    mongodb:mongodb,
    tailwind: tailwind,
    bootstrap: bootstrap,
    vscode: vscode,
    postman: postman,
    npm: npm,
    git: git,
    github: github,
    figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
    {
        title: "Weather App",
        image: projectImage1,
        description: `This is weather app to find weather like temperature,humidity,windspeed and wheather is  sunny day or rainy day`,
        techstack: "HTML/CSS, JavaScript",
        previewLink: "https://findcityweatherprince.netlify.app/",
        githubLink: "https://github.com/princerajkr45/WeatherApp.git",
    },
    {
        title: "Tic Tac Toe",
        image: projectImage2,
        description: `This is a game of Tic-Tac-Toe with a simple interface. Play against friends, Mark your Xs and Os on the grid and aim to get same in any direction`,
        techstack: "HTML/CSS, JavaScript",
        previewLink: "https://tic-tac-toe-game-prince.netlify.app/",
        githubLink: "https://github.com/princerajkr45/Tic-Tac-Toe-Game.git",
    },
    {
        title: "Random Joke Generator",
        image: projectImage3,
        description: `Get a laugh with our Random Joke Generator! Simply press a button to receive a new, hilarious joke every time. Perfect for lightening the mood and sharing a smile with friends.`,
        techstack: "HTML/CSS, JavaScript",
        previewLink: "https://joke-generator-byprince.netlify.app/",
        githubLink: "https://github.com/princerajkr45/Random-joke-generate.git",
    },
    {
        title: "Rock Paper Scissors",
        image: projectImage4,
        description: `This is  Rock, Paper, Scissors game. Choose between rock, paper, or scissors and see if you can outsmart your opponent to win the round!`,
        techstack: "HTML/CSS, JavaScript",
        previewLink: "https://rock-paper-scissors-game-byprince.netlify.app/",
        githubLink: "https://github.com/princerajkr45/Rock-Paper-Scissors.git",
    },
    {
        title: "Kider Kids School ",
        image: projectImage5,
        description: `This is sample project of a school. We see the details of the school and know about teachers and contact them`,
        techstack: "HTML/CSS, ReactJs, Tailwind",
        previewLink: "https://kiderkids.netlify.app/",
        githubLink: "https://github.com/princerajkr45/CeptaKider.git",
    },
];

// Enter your Contact Details here
export const contactDetails = {
    email: "priyance5204@gmail.com",
    phone: "+91 12345 67890",
};
