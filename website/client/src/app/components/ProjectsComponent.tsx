import { type Project } from "../interfaces"

import formStyles from "../styles/form.module.css"

interface ProjectsComponentProps {
    projects: Project[];
}

const ProjectsComponent = ({ 
    projects 
}: ProjectsComponentProps) => {
    return (
        <>
            <h3>Projects</h3>
            {projects.map((project, index) => (
                <div key = {`${index}`} className={`${formStyles.child}`}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <p>{project.link}</p>            
                </div>
            ))}        
        </>
    );
};

export default ProjectsComponent;