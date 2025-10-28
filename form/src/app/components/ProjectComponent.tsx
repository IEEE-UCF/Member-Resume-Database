import { Dispatch, SetStateAction } from "react";

interface Experience {
    name: string;
    description: string;
    title: string;
    skills: string[];
}

interface Education {
    name: string;
    dates: {
        start: string;
        end: string;
    };
    degree: string;
    gpa: {
        scale: number;
        gpa: number;
    };
    clubs: Experience[];
    skills: string[];
}

interface Project {
    name: string;
    description: string;
    skills: string[];
    link: string;
}

interface Form {
    name: string;
    bio: string;
    resume: any;
    resumeType?: string;
    major: string;
    schoolYear: string;
    graduationYear: number;
    links: string[];
    clubs: Experience[];
    education: Education[];
    workExperience: Experience[];
    picture: any;
    projects: Project[];
    skills: string[];
}

interface ProjectComponentProps {
    project: Project
    index: number

    setFormData: Dispatch<SetStateAction<Form>>
}

const ProjectComponent = ({
    project,
    index,

    setFormData
}: ProjectComponentProps) => {
    return (
    <>
    
    </>
    )
}

export default ProjectComponent