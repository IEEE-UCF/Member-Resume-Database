import { Dispatch, SetStateAction } from "react";

interface Experience {
    name: string;
    description: string;
    title: string;
    skills: string[];
}

interface Education {
    name: string;
    dates: {
        start: string;
        end: string;
    };
    degree: string;
    gpa: {
        scale: number;
        gpa: number;
    };
    clubs: Experience[];
    skills: string[];
}

interface Project {
    name: string;
    description: string;
    skills: string[];
    link: string;
}
const createEmptyProject = (): Project => {
    return {
        name: "",
        description: "",
        skills: [""],
        link: "",
    };
};

interface Form {
    name: string;
    bio: string;
    resume: any;
    resumeType?: string;
    major: string;
    schoolYear: string;
    graduationYear: number;
    links: string[];
    clubs: Experience[];
    education: Education[];
    workExperience: Experience[];
    picture: any;
    projects: Project[];
    skills: string[];
}

interface ProjectsComponentProps {
    projects: Project[]
    setFormData: Dispatch<SetStateAction<Form>>
}

const ProjectsComponent = ({
    projects,
    setFormData
}: ProjectsComponentProps) => {
    return (
    <>
        <h3>Projects</h3>
        {projects.map((project, index) => (
            <div
                key={`projects[${index}]`}
                className="project"
            >
                <h4>Project {index + 1}</h4>
                <input
                    type="text"
                    name={`projects[${index}].name`}
                    placeholder="Project Name"
                    value={project.name}
                    onChange={(e) =>
                        setFormData((prev) => {
                            const result = [
                                ...prev.projects,
                            ];
                            result[index].name = e.target.value;
                            return {
                                ...prev,
                                projects: result,
                            };
                        })
                    }
                />
                <textarea
                    name={`projects[${index}].description`}
                    placeholder="Project Description"
                    value={project.description}
                    onChange={(e) =>
                        setFormData((prev) => {
                            const result = [
                                ...prev.projects,
                            ];
                            result[index].description =
                                e.target.value;
                            return {
                                ...prev,
                                projects: result,
                            };
                        })
                    }
                    rows={3}
                />
                <div className="input skills">
                    <h5>Skills</h5>

                    {project.skills.map(
                        (skill, skillsIndex) => {
                            return (
                                <input
                                    key={`projects[${index}].skills[${skillsIndex}]`}
                                    type="text"
                                    name={`projects[${index}].skills[${skillsIndex}]`}
                                    value={skill}
                                    onChange={(e) =>
                                        setFormData((prev) => {
                                            const updatedProjects =
                                                [
                                                    ...prev.projects,
                                                ];
                                            const updatedProject =
                                                {
                                                    ...updatedProjects[
                                                        index
                                                    ],
                                                };
                                            const updatedSkills =
                                                [
                                                    ...updatedProject.skills,
                                                ];
                                            updatedSkills[
                                                skillsIndex
                                            ] = e.target.value;
                                            updatedProject.skills =
                                                updatedSkills;
                                            updatedProjects[
                                                index
                                            ] =
                                                updatedProject;

                                            return {
                                                ...prev,
                                                projects:
                                                    updatedProjects,
                                            };
                                        })
                                    }
                                />
                            );
                        }
                    )}

                    <button
                        onClick={(e) => {
                            e.preventDefault()
                            setFormData((prev) => {
                                const updatedProjects = [
                                    ...prev.projects,
                                ];
                                const updatedProject = {
                                    ...updatedProjects[
                                        index
                                    ],
                                };
                                updatedProject.skills = [
                                    ...updatedProject.skills,
                                    "",
                                ];
                                updatedProjects[index] =
                                    updatedProject;
                                return {
                                    ...prev,
                                    projects:
                                        updatedProjects,
                                };
                            })}
                        }
                    />
                </div>
                <input
                    type="text"
                    placeholder="Project Link"
                    value={project.link}
                    onChange={(e) =>
                        setFormData((prev) => {
                            const result = [
                                ...prev.projects,
                            ];
                            result[index].link = e.target.value;
                            return {
                                ...prev,
                                projects: result,
                            };
                        })
                    }
                />
            </div>
        ))}
        <input
            type="button"
            value="Add Project"
            onClick={(e) => {
                e.preventDefault()
                setFormData((prev) => ({
                    ...prev,
                    projects: [
                        ...prev.projects,
                        createEmptyProject(),
                    ],
                }))
            }}
        />    
    </>
    )
}

export default ProjectsComponent