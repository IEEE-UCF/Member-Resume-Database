import type { FC } from "react";
import type { Education } from "../interfaces";

type Props = {
    education: Education[];
};

const EducationComponent: FC<Props> = ({ education }) => {
    return (
        <div className="output education">
            <h2>Education</h2>
            {education && education.length > 0 ? (
                education.map((ed, i) => (
                    <div key={i} className="education-entry">
                        <h3>{ed.name}</h3>
                        <div className="degree">{ed.degree}</div>
                        <div className="gpa">
                            GPA: {ed.gpa.gpa}/{ed.gpa.scale || 4}
                        </div>
                        <div className="dates">
                            {ed.dates.start || "Start"} — {ed.dates.end || "End"}
                        </div>
                        {ed.clubs && ed.clubs.length > 0 && (
                            <div className="education-clubs">
                                <h4>Clubs</h4>
                                {ed.clubs.map((club, ci) => (
                                    <div key={ci} className="club">
                                        <div className="club-name">{club.name}</div>
                                        <div className="club-title">{club.title}</div>
                                        {club.description && (
                                            <div className="club-description">
                                                {club.description}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <div>No education entries</div>
            )}
        </div>
    );
};

export default EducationComponent;