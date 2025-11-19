import { type Experience } from "../interfaces"

import formStyles from "../styles/form.module.css"

interface ClubsComponentProps {
    clubs: Experience[]
}

const ClubsComponent = ({ 
    clubs 
}: ClubsComponentProps) => {
    return (
        <>
            <h2>Clubs</h2>
            {clubs.map((club, index) => (
                <div key={`${index}`} className={`${formStyles.child}`}>
                    <h3>{club.name}</h3>
                    <p><strong>Title:</strong> {club.title}</p>
                    <p>{club.description}</p>
                </div>
            ))}
        </>
    );
};

export default ClubsComponent;