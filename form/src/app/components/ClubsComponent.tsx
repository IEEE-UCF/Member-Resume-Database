import { Dispatch, SetStateAction } from "react";

interface Experience {
    name: string;
    description: string;
    title: string;
    skills: string[];
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
    education: any[];
    workExperience: any[];
    picture: any;
    projects: any[];
    skills: string[];
}

interface ClubsComponentProps {
    clubs: Experience[];
    setFormData: Dispatch<SetStateAction<Form>>;
}

const createEmptyClub = (): Experience => ({
    name: "",
    description: "",
    title: "",
    skills: [""],
});

const ClubsComponent = ({ clubs, setFormData }: ClubsComponentProps) => {
    return (
        <>
            <h3>Clubs</h3>
            {clubs.map((club, index) => (
                <div key={`clubs[${index}]`} className="club">
                    <h4>Club {index + 1}</h4>
                    <input
                        type="text"
                        name={`clubs[${index}].name`}
                        placeholder="Club Name"
                        value={club.name}
                        onChange={e =>
                            setFormData(prev => {
                                const updated = [...prev.clubs];
                                updated[index].name = e.target.value;
                                return { ...prev, clubs: updated };
                            })
                        }
                    />
                    <textarea
                        name={`clubs[${index}].description`}
                        placeholder="Description"
                        value={club.description}
                        onChange={e =>
                            setFormData(prev => {
                                const updated = [...prev.clubs];
                                updated[index].description = e.target.value;
                                return { ...prev, clubs: updated };
                            })
                        }
                        rows={3}
                    />
                    <input
                        type="text"
                        name={`clubs[${index}].title`}
                        placeholder="Your Title"
                        value={club.title}
                        onChange={e =>
                            setFormData(prev => {
                                const updated = [...prev.clubs];
                                updated[index].title = e.target.value;
                                return { ...prev, clubs: updated };
                            })
                        }
                    />
                    <div className="input skills">
                        <h5>Skills</h5>
                        {club.skills.map((skill, skillsIndex) => (
                            <input
                                key={`clubs[${index}].skills[${skillsIndex}]`}
                                type="text"
                                name={`clubs[${index}].skills[${skillsIndex}]`}
                                value={skill}
                                onChange={e =>
                                    setFormData(prev => {
                                        const updatedClubs = [...prev.clubs];
                                        const updatedClub = { ...updatedClubs[index] };
                                        const updatedSkills = [...updatedClub.skills];
                                        updatedSkills[skillsIndex] = e.target.value;
                                        updatedClub.skills = updatedSkills;
                                        updatedClubs[index] = updatedClub;
                                        return { ...prev, clubs: updatedClubs };
                                    })
                                }
                            />
                        ))}
                        <button
                            onClick={e => {
                                e.preventDefault();
                                setFormData(prev => {
                                    const updatedClubs = [...prev.clubs];
                                    const updatedClub = { ...updatedClubs[index] };
                                    updatedClub.skills = [...updatedClub.skills, ""];
                                    updatedClubs[index] = updatedClub;
                                    return { ...prev, clubs: updatedClubs };
                                });
                            }}
                        >
                            Add Skill
                        </button>
                    </div>
                    <button
                        onClick={e => {
                            e.preventDefault();
                            setFormData(prev => ({
                                ...prev,
                                clubs: prev.clubs.filter((_, i) => i !== index),
                            }));
                        }}
                    >
                        Remove Club
                    </button>
                </div>
            ))}
            <input
                type="button"
                value="Add Club"
                onClick={e =>
                    setFormData(prev => ({
                        ...prev,
                        clubs: [...prev.clubs, createEmptyClub()],
                    }))
                }
            />
        </>
    );
};

export default ClubsComponent;
