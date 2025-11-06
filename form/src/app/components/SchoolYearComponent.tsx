import { Dispatch, SetStateAction } from "react";

interface Form {
    name: string;
    bio: string;
    resume: any;
    resumeType?: string;
    major: string;
    schoolYear: string;
    graduationYear: number;
    links: string[];
    clubs: any[];
    education: any[];
    workExperience: any[];
    picture: any;
    projects: any[];
    skills: string[];
}

interface SchoolYearComponentProps {
    schoolYear: string;
    setFormData: Dispatch<SetStateAction<Form>>;
}

const schoolYearOptions = [
    "Freshman",
    "Sophomore",
    "Junior",
    "Senior",
    "Graduate"
];

const SchoolYearComponent = ({ schoolYear, setFormData }: SchoolYearComponentProps) => {
    return (
        <div>
            <h3>School Year</h3>
            {schoolYearOptions.map(option => (
                <label key={option} style={{ marginRight: 16 }}>
                    <input
                        type="radio"
                        name="schoolYear"
                        value={option}
                        checked={schoolYear === option}
                        onChange={e =>
                            setFormData(prev => ({
                                ...prev,
                                schoolYear: e.target.value
                            }))
                        }
                    />
                    {option}
                </label>
            ))}
        </div>
    );
};

export default SchoolYearComponent;
