import { ChangeEvent, useState } from "react";
import { ucfMajors } from "../data/majors";

interface Experience {
    name: string;
    description: string;
    title: string;
    responsibilities: string;
}
const createEmptyExperience = () => {
    return {
        name: "",
        description: "",
        title: "",
        responsibilities: "",
    };
};

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
const createEmptyEducation = (): Education => {
    return {
        name: "",
        dates: {
            start: "",
            end: "",
        },
        degree: "",
        gpa: {
            scale: 0,
            gpa: 0,
        },
        clubs: [createEmptyExperience()],
        skills: [""],
    };
};

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
const createEmptyForm = (): Form => {
    return {
        name: "",
        bio: "",
        resume: null,
        resumeType: "file",
        major: "",
        schoolYear: "",
        graduationYear: 0,
        links: [""],
        clubs: [createEmptyExperience()],
        education: [createEmptyEducation()],
        workExperience: [createEmptyExperience()],
        picture: null,
        projects: [createEmptyProject()],
        skills: [""],
    };
};

const Form = () => {
    const [formData, setFormData] = useState<Form>(createEmptyForm());

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(formData);
    };

    const handleArray = (event: React.FormEvent, array: any[], input: any) => {
        event.preventDefault();
        array.push(input);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="input name">
                    <h3>Name</h3>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) =>
                            setFormData((prev) => ({
                                ...prev,
                                name: e.target.value,
                            }))
                        }
                    />
                </div>

                <div className="input bio">
                    <h3>Bio</h3>
                    <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={(e) =>
                            setFormData((prev) => ({
                                ...prev,
                                bio: e.target.value,
                            }))
                        }
                        rows={5}
                    />
                </div>

                <div className="input resume">
                    <h3>Resume</h3>
                    <label>
                        <input
                            type="radio"
                            name="resumeType"
                            value="file"
                            checked={formData.resumeType === "file"}
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
                            checked={formData.resumeType === "link"}
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

                    {formData.resumeType === "file" && (
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

                    {formData.resumeType === "link" && (
                        <input
                            type="url"
                            name="resume"
                            placeholder="https://example.com/resume.pdf"
                            value={formData.resume || ""}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    resume: e.target.value,
                                }))
                            }
                        />
                    )}
                </div>

                <div className="input major">
                    <h3>Major</h3>
                    <select
                        name="major"
                        value={formData.major}
                        onChange={(e) =>
                            setFormData((prev) => ({
                                ...prev,
                                major: e.target.value,
                            }))
                        }
                    >
                        <option value="">Select Major</option>
                        {ucfMajors.map((major, index) => (
                            <option key={index} value={major}>
                                {major}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="input school-year">
                    <h3>School Year</h3>
                    <label>
                        <input
                            type="radio"
                            name="schoolYear"
                            value="Freshman"
                            checked={formData.schoolYear === "Freshman"}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    schoolYear: e.target.value,
                                }))
                            }
                        />
                        Freshman
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="schoolYear"
                            value="Sophomore"
                            checked={formData.schoolYear === "Sophomore"}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    schoolYear: e.target.value,
                                }))
                            }
                        />
                        Sophomore
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="schoolYear"
                            value="Junior"
                            checked={formData.schoolYear === "Junior"}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    schoolYear: e.target.value,
                                }))
                            }
                        />
                        Junior
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="schoolYear"
                            value="Senior"
                            checked={formData.schoolYear === "Senior"}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    schoolYear: e.target.value,
                                }))
                            }
                        />
                        Senior
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="schoolYear"
                            value="Graduate"
                            checked={formData.schoolYear === "Graduate"}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    schoolYear: e.target.value,
                                }))
                            }
                        />
                        Graduate
                    </label>
                </div>

                <div className="input graduation-year">
                    <h3>Graduation Year</h3>
                    <input
                        type="number"
                        name="graduationYear"
                        value={formData.graduationYear || ""}
                        onChange={(e) =>
                            setFormData((prev) => ({
                                ...prev,
                                graduationYear: Number(e.target.value),
                            }))
                        }
                        min="2020"
                        max="2035"
                    />
                </div>

                <div className="input links"></div>

                <div className="input clubs"></div>

                <div className="input education"></div>

                <div className="input work-experience"></div>

                <div className="input picture">
                    <h3>Picture</h3>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                                setFormData((prev) => ({
                                    ...prev,
                                    picture: file,
                                }));
                            }
                        }}
                    />
                </div>

                <div className="input projects"></div>

                <div className="input skills">
                    <h3>Skills</h3>

                    {formData.skills.map((skill, index) => {
                        return (
                            <input
                                key={`skills[${index}]`}
                                type="text"
                                name={`skills[${index}]`}
                                value={skill}
                                onChange={(e) => 
                                    setFormData((prev) => {
                                        const result = [...prev.skills]
                                        result[index] = e.target.value
                                        return {...prev, skills: result}
                                    })
                                }
                            />
                        )
                    })}

                    <button
                        onClick={(e) => setFormData((prev) => ({
                            ...prev,
                            skills: [...prev.skills, ""]
                        }))}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default Form;
