export interface Experience {
    name: string;
    description: string;
    title: string;
}

export interface Education {
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
}

export interface Project {
    name: string;
    description: string;
    link: string;
}

export interface Form {
    name: string;
    bio: string;
    resume: any;
    major: string;
    schoolYear: string;
    graduationYear: number;
    links: string[];
    educations: Education[];
    clubs: Experience[];
    workExperiences: Experience[];
    picture: any;
    projects: Project[];
    skills: string[];
}