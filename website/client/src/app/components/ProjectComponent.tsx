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

        </>
    )
}

export default ProjectComponent