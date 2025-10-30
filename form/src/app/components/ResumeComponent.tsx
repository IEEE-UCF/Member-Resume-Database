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

interface ResumeComponentProps {
    resume: any;
    resumeType?: string;
    setFormData: Dispatch<SetStateAction<Form>>;
}

const ResumeComponent = ({ resume, resumeType, setFormData }: ResumeComponentProps) => {
    return (
        <>
            <h3>Resume</h3>
            <label>
                <input
                    type="radio"
                    name="resumeType"
                    value="file"
                    checked={resumeType === "file"}
                    onChange={(e) =>
                        setFormData((prev) => ({
                            ...prev,
                            resumeType: "file",
                            resume: null,
                        }))
                    }
                />
                Upload File
            </label>
            <label>
                <input
                    type="radio"
                    name="resumeType"
                    value="link"
                    checked={resumeType === "link"}
                    onChange={(e) =>
                        setFormData((prev) => ({
                            ...prev,
                            resumeType: "link",
                            resume: "",
                        }))
                    }
                />
                Provide Link
            </label>
            {resumeType === "file" && (
                <input
                    type="file"
                    accept=".pdf,.docx"
                    onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                            setFormData((prev) => ({
                                ...prev,
                                resume: file,
                            }));
                        }
                    }}
                />
            )}
            {resumeType === "link" && (
                <input
                    type="url"
                    name="resume"
                    placeholder="https://example.com/resume.pdf"
                    value={resume || ""}
                    onChange={(e) =>
                        setFormData((prev) => ({
                            ...prev,
                            resume: e.target.value,
                        }))
                    }
                />
            )}
        </>
    );
};

export default ResumeComponent;