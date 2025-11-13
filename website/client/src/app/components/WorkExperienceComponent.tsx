import { type Experience } from "../interfaces" 
 
interface WorkExperienceComponentProps {
    workExperience: Experience[];
}


const WorkExperienceComponent = ({ workExperience }: WorkExperienceComponentProps) => {
    return (
        <>
            {
                workExperience.map((exp, index) => (
                    <div key={`${index}`}>
                        <h3>{exp.name}</h3>
                        <p><strong>Title:</strong> {exp.title}</p>
                        <p>{exp.description}</p>
                    </div>
                ))
            }
        </>
    );
};


export default WorkExperienceComponent;
 
  