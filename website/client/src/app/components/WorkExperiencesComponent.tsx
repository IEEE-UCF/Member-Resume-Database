import { type Experience } from "../interfaces"

import formStyles from "../styles/form.module.css"

interface WorkExperiencesComponentProps {
    experiences: Experience[];
}

const WorkExperiencesComponent = ({ 
    experiences 
}: WorkExperiencesComponentProps) => {
    return (
        <>
            <h3>Work Experience</h3>
            {experiences.length > 0 ? (
                experiences.map((exp, index) => (
                    <div key={index} className={`${formStyles.child} ${formStyles.experience}`}>
                        <h3>{exp.name}</h3>
                        <p><strong>Title:</strong> {exp.title}</p>
                        <p>{exp.description}</p>
                    </div>
                ))
            ) : (
                <p>No work experiences listed</p>
            )}
        </>
    );
};

export default WorkExperiencesComponent;