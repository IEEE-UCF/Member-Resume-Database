import { ChangeEvent, useState } from "react"
import { ucfMajors } from "../data/majors"

interface Experience {
    name: string,
    description: string,
    title: string,
    responsibilities: string
}


interface Education {
    name: string,
    dates: {
        start: Date,
        end: Date
    },
    degree: string,
    gpa: {
        scale: number,
        gpa: number
    },
    clubs: Experience[],
    skills: string[]
}

interface Project {
    name: string,
    description: string,
    skills: string[],
    link: any
}

interface Form {
    name: string,
    bio: string,
    resume: any,
    resumeType?: string,
    major: string,
    schoolYear: string,
    graduationYear: number,
    links: string[],
    clubs: Experience[],
    education: Education[],
    work_experience: Experience[],
    picture: any,
    projects: Project[],
    skills: string[]
}

const Form = () => {
    const [formData, setFormData] = useState<Form>({
        name: "",
        bio: "",
        resume: null,
        resumeType: "file",
        major: "",
        schoolYear: "",
        graduationYear: 0,
        links: [],
        clubs: [],
        education: [],
        work_experience: [],
        picture: null,
        projects: [],
        skills: []
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const name = event.target.name
        const value = event.target.value
        setFormData((prev) => ({...prev, [name]: value}))
    }

    const handleArray = (event: React.FormEvent, array: any[]) => {
        event?.preventDefault()
        console.log(typeof array)
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        // console.log(formData)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                
                <div className="input name">
                    <h3>Name</h3>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="input bio">
                    <h3>Bio</h3>
                    <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
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
                            onChange={(e) => setFormData(prev => ({...prev, resumeType: "file", resume: null}))}
                        />
                        Upload File
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="resumeType"
                            value="link"
                            checked={formData.resumeType === "link"}
                            onChange={(e) => setFormData(prev => ({...prev, resumeType: "link", resume: ""}))}
                        />
                        Provide Link
                    </label>
                    
                    {formData.resumeType === "file" && (
                        <input
                            type="file"
                            accept=".pdf,.docx"
                            onChange={(e) => {
                                const file = e.target.files?.[0]
                                if (file) {
                                    setFormData(prev => ({...prev, resume: file}))
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
                            onChange={handleChange}
                        />
                    )}
                </div>

                <div className="input major">
                    <h3>Major</h3>
                    <select
                        name="major"
                        value={formData.major}
                        onChange={handleChange}
                    >
                        <option value="">Select Major</option>
                        {ucfMajors.map((major, index) => (
                            <option key={index} value={major}>
                                {major}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="input year">
                    <h3>School Year</h3>
                    <label>
                        <input
                            type="radio"
                            name="schoolYear"
                            value="Freshman"
                            checked={formData.schoolYear === "Freshman"}
                            onChange={handleChange}
                        />
                        Freshman
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="schoolYear"
                            value="Sophomore"
                            checked={formData.schoolYear === "Sophomore"}
                            onChange={handleChange}
                        />
                        Sophomore
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="schoolYear"
                            value="Junior"
                            checked={formData.schoolYear === "Junior"}
                            onChange={handleChange}
                        />
                        Junior
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="schoolYear"
                            value="Senior"
                            checked={formData.schoolYear === "Senior"}
                            onChange={handleChange}
                        />
                        Senior
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="schoolYear"
                            value="Graduate"
                            checked={formData.schoolYear === "Graduate"}
                            onChange={handleChange}
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
                        onChange={handleChange}
                        min="2020"
                        max="2035"
                    />
                </div>

                <div className="input picture">
                    <h3>Picture</h3>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files?.[0]
                            if (file) {
                                setFormData(prev => ({...prev, picture: file}))
                            }
                        }}
                    />
                </div>

                <div className="input skills">
                    {/* <h3>Skills</h3>
                    <input
                        type="text"
                        name={`skills.${formData.skills.length}`}
                        value={formData.skills[formData.skills.length]}
                        onChange={handleChange}
                    />
                    <button 
                        onClick={()}
                    /> */}

                    {formData.skills.map((skill, index) => {
                        return(
                            <input
                                type="text"
                                name={`skills.${index}`}
                                value={formData.skills[index]}
                                onChange={handleChange}
                            />
                        )
                    })}
                </div>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Form