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

interface GraduationYearComponentProps {
    graduationYear: number;
    setFormData: Dispatch<SetStateAction<Form>>;
}

const GraduationYearComponent = ({
    graduationYear,
    setFormData
}: GraduationYearComponentProps) => {
    return (
        <div>
            <h3>Graduation Year</h3>
            <input
                type="number"
                name="graduationYear"
                min={2020}
                max={2035}
                value={graduationYear}
                onChange={e =>
                    setFormData(prev => ({
                        ...prev,
                        graduationYear: Number(e.target.value)
                    }))
                }
            />
        </div>
    );
};

export default GraduationYearComponent;
