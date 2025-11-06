import { useState } from "react";
import { ucfMajors } from "../data/majors";

import ProjectsComponent from "./ProjectsComponent"
import LinksComponent from "./LinksComponent"
import SkillsComponent from "./SkillsComponent"
import PictureComponent from "./PictureComponent" 
import ResumeComponent from "./ResumeComponent"
import SchoolYearComponent from "./SchoolYearComponent";
import GraduationYearComponent from "./GraduationYearComponent";
import ClubsComponent from "./ClubsComponent";
import WorkExperienceComponent from "./WorkExperienceComponent";




import { type Form, createEmptyForm, createEmptyExperience, createEmptyEducation } from "../interfaces"

import ProjectsComponent from "./ProjectsComponent";
import LinksComponent from "./LinksComponent";
import SkillsComponent from "./SkillsComponent";
import PictureComponent from "./PictureComponent";
import ResumeComponent from "./ResumeComponent";
import NameComponent from "./NameComponent";
import BioComponent from "./BioComponent";
import MajorComponent from "./MajorComponent";
import EducationComponent from "./EducationComponent";


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
                
                <NameComponent name={formData.name} setFormData={setFormData} />

                <BioComponent bio={formData.bio} setFormData={setFormData} />


                <div className="input resume">
                    <ResumeComponent
                        resume={formData.resume}
                        resumeType={formData.resumeType}
                        setFormData={setFormData}
                    />
                </div>

                <MajorComponent major={formData.major} setFormData={setFormData} />

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
                        links={formData.links}
                        setFormData={setFormData}
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
                    <WorkExperienceComponent
                        workExperience={formData.workExperience}
                        setFormData={setFormData}
                    />
                </div>


                <div className="input clubs">
                    <ClubsComponent clubs={formData.clubs} setFormData={setFormData} />
                </div>


                <div className="input graduation-year">
                    <GraduationYearComponent
                        graduationYear={formData.graduationYear}
                        setFormData={setFormData}
                    />
                </div>


                <div className="input school-year">
                    <SchoolYearComponent
                        schoolYear={formData.schoolYear}
                        setFormData={setFormData}

                <EducationComponent value={formData.education} onChange={(next) => setFormData(prev => ({ ...prev, education: next }))} />

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
                            </div>
                        );
                    })}
                    <input
                        type="button"
                        value="Add Experience"
                        onClick={(e) => {
                            e.preventDefault();
                            setFormData((prev) => ({
                                ...prev,
                                workExperience: [
                                    ...prev.workExperience,
                                    createEmptyExperience(),
                                ],
                            }));
                        }}
                    />
                </div>

                <div className="input picture">
                    <PictureComponent setFormData={setFormData} />
                </div>

                <div className="input projects">
                    <ProjectsComponent
                        projects={formData.projects}
                        setFormData={setFormData}
                    />
                </div>

                <div className="input skills">
                    <SkillsComponent
                        skills={formData.skills}
                        setFormData={setFormData}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default Form;
