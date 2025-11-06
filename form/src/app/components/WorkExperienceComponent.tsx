import { Dispatch, SetStateAction } from "react";

// Local interface for a single work experience entry
interface Experience {
    name: string;
    description: string;
    title: string;
    skills: string[];
}

// Local interface for the form state
interface Form {
    name: string;
    bio: string;
    resume: any;
    resumeType?: string;
    major: string;
    schoolYear: string;
    graduationYear: number;
    links: string[];
    clubs: any[];
    education: any[];
    workExperience: Experience[];
    picture: any;
    projects: any[];
    skills: string[];
}

interface WorkExperienceComponentProps {
    workExperience: Experience[];
    setFormData: Dispatch<SetStateAction<Form>>;
}

const createEmptyExperience = (): Experience => ({
    name: "",
    description: "",
    title: "",
    skills: [""],
});

const WorkExperienceComponent = ({
    workExperience,
    setFormData,
}: WorkExperienceComponentProps) => {
    return (
        <>
            <h3>Work Experience</h3>
            {workExperience.map((experience, index) => (
                <div key={`workExperience[${index}]`} className="experience">
                    <h4>Experience {index + 1}</h4>
                    <input
                        type="text"
                        name={`workExperience[${index}].name`}
                        placeholder="Company Name"
                        value={experience.name}
                        onChange={e =>
                            setFormData(prev => {
                                const result = [...prev.workExperience];
                                result[index].name = e.target.value;
                                return { ...prev, workExperience: result };
                            })
                        }
                    />
                    <input
                        type="text"
                        name={`workExperience[${index}].title`}
                        placeholder="Job Title"
                        value={experience.title}
                        onChange={e =>
                            setFormData(prev => {
                                const result = [...prev.workExperience];
                                result[index].title = e.target.value;
                                return { ...prev, workExperience: result };
                            })
                        }
                    />
                    <textarea
                        name={`workExperience[${index}].description`}
                        placeholder="Description"
                        value={experience.description}
                        onChange={e =>
                            setFormData(prev => {
                                const result = [...prev.workExperience];
                                result[index].description = e.target.value;
                                return { ...prev, workExperience: result };
                            })
                        }
                        rows={3}
                    />
                    <div className="input skills">
                        <h5>Skills</h5>
                        {experience.skills.map((skill, skillsIndex) => (
                            <input
                                key={`workExperience[${index}].skills[${skillsIndex}]`}
                                type="text"
                                name={`workExperience[${index}].skills[${skillsIndex}]`}
                                value={skill}
                                onChange={e =>
                                    setFormData(prev => {
                                        const updatedWorkExperiences = [...prev.workExperience];
                                        const updatedWorkExperience = {
                                            ...updatedWorkExperiences[index],
                                        };
                                        const updatedSkills = [...updatedWorkExperience.skills];
                                        updatedSkills[skillsIndex] = e.target.value;
                                        updatedWorkExperience.skills = updatedSkills;
                                        updatedWorkExperiences[index] = updatedWorkExperience;
                                        return { ...prev, workExperience: updatedWorkExperiences };
                                    })
                                }
                            />
                        ))}
                        <button
                            onClick={e => {
                                e.preventDefault();
                                setFormData(prev => {
                                    const updatedWorkExperiences = [...prev.workExperience];
                                    const updatedWorkExperience = {
                                        ...updatedWorkExperiences[index],
                                    };
                                    updatedWorkExperience.skills = [
                                        ...updatedWorkExperience.skills,
                                        "",
                                    ];
                                    updatedWorkExperiences[index] = updatedWorkExperience;
                                    return { ...prev, workExperience: updatedWorkExperiences };
                                });
                            }}
                        >
                            Add Skill
                        </button>
                    </div>
                    <button
                        onClick={e => {
                            e.preventDefault();
                            setFormData(prev => ({
                                ...prev,
                                workExperience: prev.workExperience.filter((_, i) => i !== index),
                            }));
                        }}
                    >
                        Remove Experience
                    </button>
                </div>
            ))}
            <input
                type="button"
                value="Add Experience"
                onClick={e =>
                    setFormData(prev => ({
                        ...prev,
                        workExperience: [...prev.workExperience, createEmptyExperience()],
                    }))
                }
            />
        </>
    );
};

export default WorkExperienceComponent;

