import { ChangeEvent, useState } from "react"

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
    major: string,
    year: number,
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
        major: "",
        year: 0,
        links: [],
        clubs: [],
        education: [],
        work_experience: [],
        picture: null,
        projects: [],
        skills: []
    })

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        console.log(formData)
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(formData)
        const name = event.target.name
        const value = event.target.value
        setFormData((prev) => ({...prev, [name]: value}))
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <div className = "input name">
                    <h3>Name</h3>
                    <input
                        type = "text"
                        name = "name"
                        value = { formData.name }
                        onChange= { handleChange }
                    />
                </div>

                <div className = "input bio">

                </div>
                
                <div className = "input resume">

                </div>

                <div className = "input major">

                </div>

                <div className = "input year">

                </div>

                <div className = "input links">

                </div>

                <div className = "input clubs">

                </div>

                <div className = "input educations">

                </div>

                <div className = "input work experiences">

                </div>

                <div className = "input picture">

                </div>

                <div className = "input projects">

                </div>

                <div className = "input projects">

                </div>

                <div className = "input skills">
                    
                </div>

                <button
                    type = "submit"
                />
            </form>
        </>
    )
}

export default Form