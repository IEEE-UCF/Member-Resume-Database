import { ChangeEvent, useState } from "react";

interface Experience {
    name: string;
    description: string;
    title: string;
    responsibilities: string;
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
    link: any;
}

interface Form {
    name: string;
    bio: string;
    resume: any;
    major: string;
    year: number;
    links: string[];
    clubs: Experience[];
    education: Education[];
    work_experience: Experience[];
    picture: any;
    projects: Project[];
    skills: string[];
}

function updateNestedField(obj: any, path: string, value: any) {
    const keys = path.split(".");
    const newObj = Array.isArray(obj) ? [...obj] : { ...obj };
    let current = newObj;

    for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        const nextKey = keys[i + 1];

        const index = Number(nextKey);
        const isArrayIndex = !isNaN(index);

        if (Array.isArray(current[key])) {
            current[key] = [...current[key]];
        } else {
            current[key] = { ...current[key] };
        }

        current = current[key];
    }

    const lastKey = keys[keys.length - 1];
    current[lastKey] = value;

    return newObj;
}

const Form = () => {
    const [formData, setFormData] = useState<Form>({
        name: "",
        bio: "",
        resume: null,
        major: "",
        year: 0,
        links: [""],
        clubs: [
            {
                name: "",
                description: "",
                title: "",
                responsibilities: "",
            },
        ],
        education: [
            {
                name: "",
                dates: {
                    start: "1970-01-01",
                    end: "2070-01-01",
                },
                degree: "",
                gpa: {
                    scale: 0,
                    gpa: 0,
                },
                clubs: [
                    {
                        name: "",
                        description: "",
                        title: "",
                        responsibilities: "",
                    },
                ],
                skills: [""],
            },
        ],
        work_experience: [
            {
                name: "",
                description: "",
                title: "",
                responsibilities: "",
            },
        ],
        picture: null,
        projects: [],
        skills: [""],
    });

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(formData);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => updateNestedField(prev, name, value));
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
                        onChange={handleChange}
                    />
                </div>

                <div className="input bio">
                    <h3>Bio</h3>
                    <input
                        type="text"
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                    />
                </div>

                <div className="input resume"></div>

                <div className="input major"></div>

                <div className="input year"></div>

                <div className="input links"></div>

                <div className="input clubs"></div>

                <div className="input educations">
                    <h3>Education</h3>
                    <input
                        type="text"
                        name="education.0.name"
                        value={formData.education[0].name}
                        onChange={handleChange}
                        placeholder="Name"
                    />
                    <input
                        type="text"
                        name="education.0.degree"
                        value={formData.education[0].degree}
                        onChange={handleChange}
                        placeholder="Degree"
                    />
                    
                    <div>
                        <h4>GPA</h4>
                        <label>GPA Scale</label>
                        <input
                            type="number"
                            name="education.0.gpa.scale"
                            value={formData.education[0].gpa.scale}
                            onChange={handleChange}
                            placeholder="4"
                        /><br/>
                        <label>GPA</label>
                        <input
                            type="number"
                            name="education.0.gpa.gpa"
                            value={formData.education[0].gpa.gpa}
                            onChange={handleChange}
                            placeholder="4.0"
                        />
                    </div>

                    <div>
                        <h4>Dates</h4>
                        <label>Start Date</label>
                        <input
                            type="date"
                            name="education.0.dates.start"
                            value={formData.education[0].dates.start}
                            onChange={handleChange}
                            placeholder="1970-01-01"
                        />
                        <br />
                        <label>End Date</label>
                        <input
                            type="date"
                            name="education.0.dates.end"
                            value={formData.education[0].dates.end}
                            onChange={handleChange}
                            placeholder="2070-01-01"
                        />
                    </div>
                </div>

                <div className="input work experiences"></div>

                <div className="input picture"></div>

                <div className="input projects"></div>

                <div className="input projects"></div>

                <div className="input skills"></div>

                <button type="submit" />
            </form>
        </>
    );
};

export default Form;
