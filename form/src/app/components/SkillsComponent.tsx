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

interface SkillsComponentProps {
    skills: string[];
    setFormData: Dispatch<SetStateAction<Form>>;
}

const SkillsComponent = ({ skills, setFormData }: SkillsComponentProps) => {
    return (
        <>
            <h3>Skills</h3>
            {skills.map((skill, index) => {
                return (
                    <input
                        key={`skills[${index}]`}
                        type="text"
                        name={`skills[${index}]`}
                        value={skill}
                        onChange={(e) =>
                            setFormData((prev) => {
                                const result = [...prev.skills];
                                result[index] = e.target.value;
                                return { ...prev, skills: result };
                            })
                        }
                    />
                );
            })}
            <button
                onClick={(e) => {
                    e.preventDefault()
                    setFormData((prev) => ({
                        ...prev,
                        skills: [...prev.skills, ""],
                    }))
                }}
            >
                Add Skill
            </button>
        </>
    );
};

export default SkillsComponent;