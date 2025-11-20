import { Dispatch, SetStateAction } from "react";

import {
    type Experience,
    type Form,
    createEmptyExperience,
} from "../interfaces";

interface ClubsComponentProps {
    clubs: Experience[];
    setFormData: Dispatch<SetStateAction<Form>>;
}

const ClubsComponent = ({ 
    clubs, 
    setFormData 
}: ClubsComponentProps) => {
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
                        onChange={(e) =>
                            setFormData((prev) => {
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
                        onChange={(e) =>
                            setFormData((prev) => {
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
                        onChange={(e) =>
                            setFormData((prev) => {
                                const updated = [...prev.clubs];
                                updated[index].title = e.target.value;
                                return { ...prev, clubs: updated };
                            })
                        }
                    />
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setFormData((prev) => ({
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
                onClick={(e) =>{
                    e.preventDefault()                    
                    setFormData((prev) => ({
                        ...prev,
                        clubs: [...prev.clubs, createEmptyExperience()],
                    }))
                }}
            />
        </>
    );
};

export default ClubsComponent;
