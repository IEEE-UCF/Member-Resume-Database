import type { Education } from "../interfaces";

import formStyles from "../styles/form.module.css"

type EducationComponentProps = {
    education: Education[];
};

const EducationComponent = ({ 
    education 
}: EducationComponentProps) => {
    return (
        <>
            <h2>Education</h2>
            {education.map((ed, i) => (
                <div key={i} className={formStyles.child}>
                    <h3>{ed.name}</h3>
                    <p>{ed.degree}</p>
                    <p>GPA: {ed.gpa.gpa}/{ed.gpa.scale}</p>
                    <p>{ed.dates.start} — {ed.dates.end}</p>
                </div>
            ))}
        </>
    );
};

export default EducationComponent;