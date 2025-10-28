interface Project {
    name: string;
    description: string;
    skills: string[];
    link: string;
}

interface ProjectComponentProps {
    project: Project
}

const ProjectComponent = ({
    project
}: ProjectComponentProps) => {
    return (
        <>
            <h3>{project.name}</h3>

            <p>{project.description}</p>
            <p>{project.link}</p>

            {
                project.skills.map((skill) => {
                    <p>{skill}</p>
                })
            }
        </>
    )
}

export default ProjectComponent