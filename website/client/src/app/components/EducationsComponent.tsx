import type { Education } from "../interfaces";

import formStyles from "../styles/form.module.css"

type EducationsComponentProps = {
    educations: Education[];
};

const EducationsComponent = ({ 
    educations 
}: EducationsComponentProps) => {
    return (
        <>
            <h2>Education</h2>
            {educations.map((ed, i) => (
                <div key={i} className={`${formStyles.child} ${formStyles.education}`}>
                    <h3>{ed.name}</h3>
                    <p>{ed.degree}</p>
                    <p>GPA: {ed.gpa.gpa}/{ed.gpa.scale}</p>
                    <p>{ed.dates.start} — {ed.dates.end}</p>
                </div>
            ))}
        </>
    );
};

export default EducationsComponent;