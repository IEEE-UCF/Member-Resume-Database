interface Project {
    name: string;
    description: string;
    skills: string[];
    link: string;
}

interface ProjectsComponentProps {
    projects: Project[];
}

const ProjectsComponent = ({ projects }: ProjectsComponentProps) => {
    return (
        <>
            {
                projects.map((project, index) => (
                    <div key = {`${index}`}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <p>{project.link}</p>
                        {
                            project.skills.map((skill, skillsIndex) => (
                                <p key={`skill-${skillsIndex}`}>{skill}</p>
                            ))
                        }                
                    </div>
                ))
            }        
        </>
    );
};

export default ProjectsComponent;