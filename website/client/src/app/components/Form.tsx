import { useEffect, useState } from "react";

import { type Form, createEmptyExperience } from "../interfaces"

import LinksComponent from "./LinksComponent"
import ProjectsComponent from "./ProjectsComponent"
import SkillsComponent from "./SkillsComponent" 
import PictureComponent from "./PictureComponent"
import ResumeComponent from "./ResumeComponent"
import NameComponent from "./NameComponent"
import BioComponent from "./BioComponent"
import MajorComponent from "./MajorComponent"
import EducationComponent from "./EducationComponent"

const dummyData = {
    name: "Tal Avital",
    bio: "Seeking internships related to software engineering and fullstack development.",
    resume: "https://drive.google.com/file/d/1eRiUElX2eneLKoPhEvQvHEzAJWopu1Bu/view?usp=sharing",
    resumeType: "link",
    major: "Computer Science",
    schoolYear: "Senior",
    graduationYear: "2027",
    links: [
        "https://www.linkedin.com/in/tal-avital-profile/",
        "https://github.com/TAvital04",
    ],
    education: [
        {
            name: "University of Central Florida",
            dates: {
                start: "08/21/2024",
                end: "05/08/2027"
            },
            degree: "Computer Science",
            gpa: {
                scale: 4.2,
                gpa: 3.4
            },
            clubs: [
                {
                    name: "Knights Experimental Rocketry",
                    description: 
                    `
                        I have some experience working at a software engineering position following \
                        my time with the Launch and Test Infrastructure (LTI) team at Knights Experimental Rocketry (KXR). \
                        There, I worked on software architecture to gather and assemble sensor data inside a rocket\ 
                        to a front end that displays the data and enables queries and mid-flight corrections. A significant \
                        responsibility of LTI is to be the backbone of sensitive launches. For the software team to ensure \
                        that the data captured was accurate, we had to create test cases for the embedded software. To ensure \
                        safety, we created a redundancy in our data storage, sending time series data from two different \
                        end points across a wireless network. To make sure the data was carried out quickly, we considered \
                        the run times for multiple implementations. In following these tasks, I had to participate in all \
                        phases of the software development life cycle, including code and architecture design and analysis, \
                        implementation, integration, maintenance, and testing. The work environment at LTI was Agile, although \
                        slightly less centralized. There is a lot more for me to say about my time at Knights Experimental \
                        Rocketry, and I am eager to discuss my experience with you further.
                    `,
                    title: "developer"
                },
                {
                    name: "Institude of Electrical and Electronics Engineers",
                    description:
                    `
                        A project that I am incredibly excited about is with the Institute of Electrical and Electronics Engineers \
                        (IEEE), where I am the project manager for a resume database system and web app that IEEE will use to \
                        connect recruiters with active members, called Resume Database Integration (RDI). My role in RDI is to \
                        develop bi-weekly meetings where I discuss progress, expectations, and updates so that I can provide clarity \
                        and direction for my team. I also relay current progress with the Software Committee Chair, and manage overhead, \
                        like integration with deployment tools, testing, and documentation. Essentially, I make it easier for the \
                        programmers to get their work done quickly, efficiently, and with clear direction.
                    `,
                    title: "Project Manager"
                }
            ]
        }
    ],
    workExperience: [createEmptyExperience()],
    picture: null,
    projects: [
        {
            name: "Five Nights at Freddy's",
            description: 
            `\
                Written in React.js and Express.js. Implemented user sessions and login functionality to a video game with \
                animations, UI, and NPCs.\
            `,
            link: "https://github.com/TAvital04/Five-Nights-at-Freddy-s"
        },
        {
            name: "Pseudo-Assembly Interpreter",
            description:
            `\
                Created an interpreter in C, running pseudo-assembly code line-by-line. Reduced latency by 5x by avoiding dynamic \
                memory allocation and helper functions.\
            `,
            link: "https://github.com/TAvital04/Psudo-Assembly-Interpreter"
        }
    ],
    skills: [
        "c", "python", "embedded systems", "databases", "agile work environment", "js fullstack", "team building", 
        "technical writing", "networking", "data structures"
    ]
};

const Form = () => {
    const [formData, setFormData] = useState(dummyData);

    useEffect(() => {
        // const parseFormData = (data: any): any => {
        //     return data;
        // };

        // const fetchData = async () => {
        //     const res = await fetch("http://localhost:3001");
        //     const rawData = await res.json();

        //     const data = parseFormData(rawData);

        //     setFormData(data);
        // };

        // fetchData();
    }, []);

    return (
        <>
            <div className="output name">
                <NameComponent name={formData.name} />
            </div>

            <div className="output bio">
                <BioComponent bio={formData.bio} />
            </div>

            <div className="output resume"></div>
                <ResumeComponent resume={formData.resume} resumeType={formData.resumeType} />
            
            <div className="output major">
                <MajorComponent major={formData.major} />
            </div>

            <div className="output school-year"></div>

            <div className="output graduation-year"></div>

            <div className="output links"></div>
                <LinksComponent links={formData.links} />
            <div className="output clubs"></div>

            <div className="output education">
                <EducationComponent education={formData.education} />
            </div>

            <div className="output work-experience"></div>

            <div className="output picture"></div>
                <PictureComponent picture={formData.picture} />
            <div className="output projects">
                <h2>Projects</h2>
                <ProjectsComponent projects = {formData.projects}/>
            </div>

            <div className="output skills">
                <SkillsComponent skills={formData.skills} />
            </div>
        </>
    );
};

export default Form;
