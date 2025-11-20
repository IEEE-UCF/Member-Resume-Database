import { Dispatch, SetStateAction } from "react";

import { type Form, type Experience, createEmptyExperience } from "../interfaces"

import formStyles from "../styles/form.module.css"

interface WorkExperienceComponentProps {
    workExperiences: Experience[];
    setFormData: Dispatch<SetStateAction<Form>>;
}

const WorkExperienceComponent = ({
    workExperiences,
    setFormData,
}: WorkExperienceComponentProps) => {
    return (
        <>
            <h3>Work Experience</h3>
            {workExperiences.map((experience, index) => (
                <div key={`workExperiences[${index}]`} className={`${formStyles.child} ${formStyles.workExperience}`}>
                    <h4>Experience {index + 1}</h4>
                    <input
                        type="text"
                        name={`workExperiences[${index}].name`}
                        placeholder="Company Name"
                        value={experience.name}
                        onChange={e =>
                            setFormData(prev => {
                                const result = [...prev.workExperiences];
                                result[index].name = e.target.value;
                                return { ...prev, workExperience: result };
                            })
                        }
                    />
                    <input
                        type="text"
                        name={`workExperiences[${index}].title`}
                        placeholder="Job Title"
                        value={experience.title}
                        onChange={e =>
                            setFormData(prev => {
                                const result = [...prev.workExperiences];
                                result[index].title = e.target.value;
                                return { ...prev, workExperiences: result };
                            })
                        }
                    />
                    <textarea
                        name={`workExperiences[${index}].description`}
                        placeholder="Description"
                        value={experience.description}
                        onChange={e =>
                            setFormData(prev => {
                                const result = [...prev.workExperiences];
                                result[index].description = e.target.value;
                                return { ...prev, workExperiences: result };
                            })
                        }
                        rows={3}
                    />
                    <button
                        onClick={e => {
                            e.preventDefault();
                            setFormData(prev => ({
                                ...prev,
                                workExperiences: prev.workExperiences.filter((_, i) => i !== index),
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
                        workExperiences: [...prev.workExperiences, createEmptyExperience()],
                    }))
                }
            />
        </>
    );
};

export default WorkExperienceComponent;

