
interface Experience {
    name: string;
    description: string;
    title: string;
    skills: string[];
 }
 
 
 interface WorkExperienceComponentProps {
    experiences: Experience[];
 }
 
 
 const WorkExperienceComponent = ({ experiences }: WorkExperienceComponentProps) => {
    return (
        <>
            {
                experiences.map((exp, index) => (
                    <div key={`${index}`}>
                        <h3>{exp.name}</h3>
                        <p><strong>Title:</strong> {exp.title}</p>
                        <p>{exp.description}</p>
                         {
                            exp.skills.map((skill, skillsIndex) => (
                                <p key={`skill-${skillsIndex}`}>{skill}</p>
                            ))
                        }
                    </div>
                ))
            }
        </>
    );
 };
 
 
 export default WorkExperienceComponent;
 
  