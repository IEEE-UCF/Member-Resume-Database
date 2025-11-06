import { useState } from "react";
import { ucfMajors } from "../data/majors";

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
