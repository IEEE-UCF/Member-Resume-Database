import { type Project } from "../interfaces"

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
                    </div>
                ))
            }        
        </>
    );
};

export default ProjectsComponent;