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

interface PictureComponentProps {
    setFormData: Dispatch<SetStateAction<Form>>;
}

const PictureComponent = ({ setFormData }: PictureComponentProps) => {
    return (
        <>
            <h3>Picture</h3>
            <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                        setFormData((prev) => ({
                            ...prev,
                            picture: file,
                        }));
                    }
                }}
            />
        </>
    );
};

export default PictureComponent;