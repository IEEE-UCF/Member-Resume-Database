import { type Experience } from "../interfaces"

import formStyles from "../styles/form.module.css"

interface WorkExperienceComponentProps {
    experiences: Experience[];
}

const WorkExperienceComponent = ({ 
    experiences 
}: WorkExperienceComponentProps) => {
    return (
        <>
            <h3>Work Experience</h3>
            {experiences.length > 0 ? (
                experiences.map((exp, index) => (
                    <div key={index} className={`${formStyles.child}`}>
                        <h3>{exp.name}</h3>
                        <p><strong>Title:</strong> {exp.title}</p>
                        <p>{exp.description}</p>
                    </div>
                ))
            ) : (
                <p>No work experience listed</p>
            )}
        </>
    );
};

export default WorkExperienceComponent;