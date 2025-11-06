interface Experience {
    name: string;
    description: string;
    title: string;
    skills: string[];
 }
 
 
 interface ClubsComponentProps {
    clubs: Experience[];
 }
 
 
 const ClubsComponent = ({ clubs }: ClubsComponentProps) => {
    return (
        <>
            {
                clubs.map((club, index) => (
                    <div key={`${index}`}>
                        <h3>{club.name}</h3>
                        <p><strong>Title:</strong> {club.title}</p>
                        <p>{club.description}</p>
                        {
                            club.skills.map((skill, skillsIndex) => (
                                <p key={`skill-${skillsIndex}`}>{skill}</p>
                            ))
                        }
                    </div>
                ))
            }
        </>
    );
 };
 
 
 export default ClubsComponent;
 
 