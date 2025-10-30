import { useState } from "react";
import { ucfMajors } from "../data/majors";

import ProjectsComponent from "./ProjectsComponent"
import LinksComponent from "./LinksComponent"
import SkillsComponent from "./SkillsComponent"
import PictureComponent from "./PictureComponent" 
import ResumeComponent from "./ResumeComponent"

interface Experience {
    name: string;
    description: string;
    title: string;
    skills: string[];
}
const createEmptyExperience = () => {
    return {
        name: "",
        description: "",
        title: "",
        skills: [""],
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
    clubs: Experience[]
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

    const handleSubmit = async (event: React.FormEvent) => {
        // event.preventDefault();
        // try {
        //     const response = await fetch("http://localhost:3001", {
        //         method: "POST",
        //         headers: { "Content-Type": "application/json" },
        //         body: JSON.stringify(formData),
        //     });

        //     const data = await response.json();
        //     console.log(data);
        //     console.log(formData)
        // } catch (error) {
        //     console.error("Error: ", error);
        // }
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
                    <ResumeComponent 
                        resume={formData.resume} 
                        resumeType={formData.resumeType} 
                        setFormData={setFormData} 
                    />
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

                <div className="input links">
                    <LinksComponent
                        links = {formData.links}
                        setFormData = {setFormData} 
                    />
                </div>

                <div className="input clubs">
                    <h3>Clubs</h3>
                    {formData.clubs.map((club, index) => {
                        return (
                            <div key={`clubs[${index}]`} className="club">
                                <h4>Club {index + 1}</h4>
                                <input
                                    type="text"
                                    name={`clubs[${index}].name`}
                                    placeholder="Club Name"
                                    value={club.name}
                                    onChange={(e) =>
                                        setFormData((prev) => {
                                            const result = [...prev.clubs];
                                            result[index].name = e.target.value;
                                            return { ...prev, clubs: result };
                                        })
                                    }
                                />
                                <textarea
                                    name={`clubs[${index}].description`}
                                    placeholder="Description"
                                    value={club.description}
                                    onChange={(e) =>
                                        setFormData((prev) => {
                                            const result = [...prev.clubs];
                                            result[index].description =
                                                e.target.value;
                                            return { ...prev, clubs: result };
                                        })
                                    }
                                    rows={3}
                                />
                                <input
                                    type="text"
                                    name={`clubs[${index}].title`}
                                    placeholder="Your Title"
                                    value={club.title}
                                    onChange={(e) =>
                                        setFormData((prev) => {
                                            const result = [...prev.clubs];
                                            result[index].title =
                                                e.target.value;
                                            return { ...prev, clubs: result };
                                        })
                                    }
                                />
                                <div className="input skills">
                                    <h5>Skills</h5>
                                    {club.skills.map((skill, skillsIndex) => {
                                        return (
                                            <input
                                                key={`clubs[${index}].skills[${skillsIndex}]`}
                                                type="text"
                                                placeholder="Skill"
                                                name={`clubs[${index}].skills[${skillsIndex}]`}
                                                value={skill}
                                                onChange={(e) =>
                                                    setFormData((prev) => {
                                                        const updatedClubs = [
                                                            ...prev.clubs,
                                                        ];
                                                        const updatedClub = {
                                                            ...updatedClubs[
                                                                index
                                                            ],
                                                        };
                                                        const updatedSkills = [
                                                            ...updatedClub.skills,
                                                        ];
                                                        updatedSkills[
                                                            skillsIndex
                                                        ] = e.target.value;
                                                        updatedClub.skills =
                                                            updatedSkills;
                                                        updatedClubs[index] =
                                                            updatedClub;

                                                        return {
                                                            ...prev,
                                                            clubs: updatedClubs,
                                                        };
                                                    })
                                                }
                                            />
                                        );
                                    })}

                                    <button
                                        onClick={(e) =>
                                            {
                                                e.preventDefault()
                                                setFormData((prev) => {
                                                    const updatedClubs = [
                                                        ...prev.clubs,
                                                    ];
                                                    const updatedClub = {
                                                        ...updatedClubs[index],
                                                    };
                                                    updatedClub.skills = [
                                                        ...updatedClub.skills,
                                                        "",
                                                    ];
                                                    updatedClubs[index] =
                                                        updatedClub;
                                                    return {
                                                        ...prev,
                                                        clubs: updatedClubs,
                                                    };
                                                })
                                            }
                                        }
                                    >Add Skill</button>
                                </div>
                            </div>
                        );
                    })}
                    <input
                        type="button"
                        value="Add Club"
                        onClick={(e) => {
                            setFormData((prev) => ({
                                ...prev,
                                clubs: [...prev.clubs, createEmptyExperience()],
                            }))
                        }}
                    />
                </div>

                <div className="input education">
                    <h3>Education</h3>
                    {formData.education.map((education, index) => {
                        return (
                            <div
                                key={`education[${index}]`}
                                className="education-entry"
                            >
                                <h4>Education {index + 1}</h4>
                                <input
                                    type="text"
                                    name={`education[${index}].name`}
                                    placeholder="School Name"
                                    value={education.name}
                                    onChange={(e) =>
                                        setFormData((prev) => {
                                            const result = [...prev.education];
                                            result[index].name = e.target.value;
                                            return {
                                                ...prev,
                                                education: result,
                                            };
                                        })
                                    }
                                />
                                <input
                                    type="text"
                                    name={`education[${index}].degree`}
                                    placeholder="Degree"
                                    value={education.degree}
                                    onChange={(e) =>
                                        setFormData((prev) => {
                                            const result = [...prev.education];
                                            result[index].degree =
                                                e.target.value;
                                            return {
                                                ...prev,
                                                education: result,
                                            };
                                        })
                                    }
                                />
                                <input
                                    type="number"
                                    name={`education[${index}].gpa.gpa`}
                                    placeholder="GPA"
                                    value={education.gpa.gpa || ""}
                                    onChange={(e) =>
                                        setFormData((prev) => {
                                            const result = [...prev.education];
                                            result[index].gpa.gpa = Number(
                                                e.target.value
                                            );
                                            return {
                                                ...prev,
                                                education: result,
                                            };
                                        })
                                    }
                                    step="0.01"
                                    min="0"
                                    max={education.gpa.scale || 4}
                                />
                                <input
                                    type="number"
                                    name={`education[${index}].gpa.scale`}
                                    placeholder="GPA Scale"
                                    value={education.gpa.scale || ""}
                                    onChange={(e) =>
                                        setFormData((prev) => {
                                            const result = [...prev.education];
                                            result[index].gpa.scale = Number(
                                                e.target.value
                                            );
                                            return {
                                                ...prev,
                                                education: result,
                                            };
                                        })
                                    }
                                    step="0.01"
                                    min="0"
                                />
                                <div className="dates">
                                    <input
                                        type="month"
                                        name={`education[${index}].dates.start`}
                                        placeholder="Start Date"
                                        value={education.dates.start}
                                        onChange={(e) =>
                                            setFormData((prev) => {
                                                if (e.target.value > education.dates.end && education.dates.end !== "") {
                                                    alert("Start date cannot be after end date.");
                                                    document.getElementsByName(`education[${index}].dates.start`)[0].value ="";
                                                    return prev;
                                                }

                                                const result = [...prev.education]; 
                                                result[index].dates.start = e.target.value;
                                                return { ...prev, education: result };
                                            })
                                        }
                                    />
                                    <input
                                        type="month"
                                        name={`education[${index}].dates.end`}
                                        placeholder="End Date"
                                        value={education.dates.end}
                                        onChange={(e) =>
                                            setFormData((prev) => {
                                                if (e.target.value < education.dates.start && education.dates.start !== "") {
                                                    alert("Start date cannot be after end date.");
                                                    document.getElementsByName(`education[${index}].dates.end`)[0].value ="";
                                                    return prev;
                                                }
                                                const result = [...prev.education];
                                                result[index].dates.end = e.target.value;
                                                return { ...prev, education: result };
                                            })
                                        }
                                    />
                                </div>
                                <div className="education-clubs">
                                    <h5>Clubs</h5>
                                    {education.clubs.map((club, clubIndex) => {
                                        return (
                                            <div
                                                key={`education[${index}].clubs[${clubIndex}]`}
                                                className="club"
                                            >
                                                <input
                                                    type="text"
                                                    name={`education[${index}].clubs[${clubIndex}].name`}
                                                    placeholder="Club Name"
                                                    value={club.name}
                                                    onChange={(e) =>
                                                        setFormData((prev) => {
                                                            const result = [...prev.education];
                                                            result[index].clubs[clubIndex].name =
                                                                e.target.value;
                                                            return { ...prev, education: result };
                                                        })
                                                    }
                                                />
                                                <input
                                                    type="text"
                                                    name={`education[${index}].clubs[${clubIndex}].title`}
                                                    placeholder="Your Title"
                                                    value={club.title}
                                                    onChange={(e) =>
                                                        setFormData((prev) => {
                                                            const result = [...prev.education];
                                                            result[index].clubs[clubIndex].title =
                                                                e.target.value;
                                                            return { ...prev, education: result };
                                                        })
                                                    }
                                                />
                                                <div className="input skills">
                                                    <h5>Skills</h5>

                                                    {education.clubs[clubIndex].skills.map((skill, skillsIndex) => {
                                                        return (
                                                            <input
                                                                key={`education[${index}].clubs[${clubIndex}].skills[${skillsIndex}]`}
                                                                type="text"
                                                                name={`education[${index}].clubs[${clubIndex}].skills[${skillsIndex}]`}
                                                                value={skill}
                                                                onChange={(e) =>
                                                                    setFormData((prev) => {
                                                                        const updatedEducation = [
                                                                            ...prev.education,
                                                                        ];
                                                                        const updatedSingleEducation = {
                                                                            ...updatedEducation[
                                                                                index
                                                                            ],
                                                                        };
                                                                        const updatedClubs = {
                                                                            ...updatedSingleEducation.clubs
                                                                        }
                                                                        const updatedSkills = [
                                                                            ...updatedClubs[clubIndex].skills
                                                                        ]
                                                                        updatedSkills[skillsIndex] = e.target.value
                                                                        updatedClubs[clubIndex].skills = updatedSkills
                                                                        updatedSingleEducation.clubs = updatedClubs
                                                                        updatedEducation[index] = updatedSingleEducation

                                                                        return {
                                                                            ...prev,
                                                                            education: updatedEducation,
                                                                        };
                                                                    })
                                                                }
                                                            />
                                                        );
                                                    })}

                                                    <button
                                                        type="button"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setFormData((prev) => {
                                                                const updatedEducation = [...prev.education];
                                                                const updatedSingleEducation = { ...updatedEducation[index] };
                                                                const updatedClubs = [...updatedSingleEducation.clubs];
                                                                const updatedClub = { ...updatedClubs[clubIndex] };

                                                                updatedClub.skills = [...updatedClub.skills, ""];
                                                                updatedClubs[clubIndex] = updatedClub;
                                                                updatedSingleEducation.clubs = updatedClubs;
                                                                updatedEducation[index] = updatedSingleEducation;

                                                                return { ...prev, education: updatedEducation };
                                                            });
                                                        }}
                                                    >
                                                        Add Skill
                                                    </button>
                                                </div>                                                
                                            </div>
                                        );
                                    })}
                                    <input
                                        type="button"
                                        value="Add Education"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setFormData((prev) => {
                                                const result = [...prev.education];
                                                result.push(createEmptyEducation());
                                                return { ...prev, education: result };
                                            })}
                                        }
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="input work-experience">
                    <h3>Work Experience</h3>
                    {formData.workExperience.map((experience, index) => {
                        return (
                            <div
                                key={`workExperience[${index}]`}
                                className="experience"
                            >
                                <h4>Experience {index + 1}</h4>
                                <input
                                    type="text"
                                    name={`workExperience[${index}].name`}
                                    placeholder="Company Name"
                                    value={experience.name}
                                    onChange={(e) =>
                                        setFormData((prev) => {
                                            const result = [
                                                ...prev.workExperience,
                                            ];
                                            result[index].name = e.target.value;
                                            return {
                                                ...prev,
                                                workExperience: result,
                                            };
                                        })
                                    }
                                />
                                <input
                                    type="text"
                                    name={`workExperience[${index}].title`}
                                    placeholder="Job Title"
                                    value={experience.title}
                                    onChange={(e) =>
                                        setFormData((prev) => {
                                            const result = [
                                                ...prev.workExperience,
                                            ];
                                            result[index].title =
                                                e.target.value;
                                            return {
                                                ...prev,
                                                workExperience: result,
                                            };
                                        })
                                    }
                                />
                                <textarea
                                    name={`workExperience[${index}].description`}
                                    placeholder="Description"
                                    value={experience.description}
                                    onChange={(e) =>
                                        setFormData((prev) => {
                                            const result = [
                                                ...prev.workExperience,
                                            ];
                                            result[index].description =
                                                e.target.value;
                                            return {
                                                ...prev,
                                                workExperience: result,
                                            };
                                        })
                                    }
                                    rows={3}
                                />
                                <div className="input skills">
                                    <h3>Skills</h3>

                                    {experience.skills.map(
                                        (skill, skillsIndex) => {
                                            return (
                                                <input
                                                    key={`workExperience[${index}].skills[${skillsIndex}]`}
                                                    type="text"
                                                    name={`workExperience[${index}].skills[${skillsIndex}]`}
                                                    value={skill}
                                                    onChange={(e) =>
                                                        setFormData((prev) => {
                                                            const updatedWorkExperiences =
                                                                [
                                                                    ...prev.workExperience,
                                                                ];
                                                            const updatedWorkExperience =
                                                                {
                                                                    ...updatedWorkExperiences[
                                                                        index
                                                                    ],
                                                                };
                                                            const updatedSkills =
                                                                [
                                                                    ...updatedWorkExperience.skills,
                                                                ];
                                                            updatedSkills[
                                                                skillsIndex
                                                            ] = e.target.value;
                                                            updatedWorkExperience.skills =
                                                                updatedSkills;
                                                            updatedWorkExperiences[
                                                                index
                                                            ] =
                                                                updatedWorkExperience;

                                                            return {
                                                                ...prev,
                                                                workExperience:
                                                                    updatedWorkExperiences,
                                                            };
                                                        })
                                                    }
                                                />
                                            );
                                        }
                                    )}

                                    <button
                                        onClick={(e) => {
                                            setFormData((prev) => {
                                                e.preventDefault()
                                                const updatedWorkExperiences = [
                                                    ...prev.workExperience,
                                                ];
                                                const updatedWorkExperience = {
                                                    ...updatedWorkExperiences[
                                                        index
                                                    ],
                                                };
                                                updatedWorkExperience.skills = [
                                                    ...updatedWorkExperience.skills,
                                                    "",
                                                ];
                                                updatedWorkExperiences[index] =
                                                    updatedWorkExperience;
                                                return {
                                                    ...prev,
                                                    workExperience:
                                                        updatedWorkExperiences,
                                                };
                                            })
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                    <input
                        type="button"
                        value="Add Experience"
                        onClick={(e) => {
                            e.preventDefault()
                            setFormData((prev) => ({
                                ...prev,
                                workExperience: [
                                    ...prev.workExperience,
                                    createEmptyExperience(),
                                ],
                            }))
                        }}
                    />
                </div>

                <div className="input picture">
                    <PictureComponent setFormData={setFormData} />
                </div>

                <div className="input projects">
                    <ProjectsComponent
                        projects = {formData.projects}
                        setFormData = {setFormData}
                    />
                </div>

                <div className="input skills">
                    <SkillsComponent
                        skills = {formData.skills}
                        setFormData = {setFormData}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default Form;
