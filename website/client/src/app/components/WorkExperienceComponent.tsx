import { type Experience } from "../interfaces"

interface WorkExperienceComponentProps {
    experiences: Experience[];
}

const WorkExperienceComponent = ({ 
    experiences 
}: WorkExperienceComponentProps) => {
    return (
        <>
            {experiences.map((exp, index) => (
                <div key={index}>
                    <h3>{exp.name}</h3>
                    <p><strong>Title:</strong> {exp.title}</p>
                    <p>{exp.description}</p>
                </div>
            ))}
        </>
    );
};

export default WorkExperienceComponent;
