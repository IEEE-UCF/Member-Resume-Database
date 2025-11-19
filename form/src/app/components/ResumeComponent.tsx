import { Dispatch, SetStateAction } from "react";

import { type Form } from "../interfaces"

interface ResumeComponentProps {
    resume: any;
    setFormData: Dispatch<SetStateAction<Form>>;
}

const ResumeComponent = ({ 
    resume, 
    setFormData 
}: ResumeComponentProps) => {
    return (
        <>
            <h3>Resume</h3>
            <input
                type="url"
                name="resume"
                placeholder="https://example.com/resume.pdf"
                value={resume}
                onChange={(e) =>
                    setFormData((prev) => ({
                        ...prev,
                        resume: e.target.value,
                    }))
                }
            />
        </>
    );
};

export default ResumeComponent;