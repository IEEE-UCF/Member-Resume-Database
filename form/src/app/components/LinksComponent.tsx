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

interface LinksComponentProps {
    links: string[];
    setFormData: Dispatch<SetStateAction<Form>>;
}

const LinksComponent = ({ links, setFormData }: LinksComponentProps) => {
    return (
        <>
            <h3>Links</h3>
            {links.map((link, index) => {
                return (
                    <div key={`links[${index}]`}>
                        <input
                            type="url"
                            name={`links[${index}]`}
                            placeholder="https://example.com"
                            value={link}
                            onChange={(e) =>
                                setFormData((prev) => {
                                    const result = [...prev.links];
                                    result[index] = e.target.value;
                                    return { ...prev, links: result };
                                })
                            }
                        />
                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                setFormData((prev) => ({
                                    ...prev,
                                    links: prev.links.filter((_, i) => i !== index),
                                }))
                            }}
                        >
                            Remove
                        </button>
                    </div>
                );
            })}
            <input
                type="button"
                value="Add Link"
                onClick={(e) => {
                    e.preventDefault()
                    return (
                        setFormData((prev) => ({
                            ...prev,
                            links: [...prev.links, ""],
                        }))
                    )
                }}
            />
        </>
    );
};

export default LinksComponent;