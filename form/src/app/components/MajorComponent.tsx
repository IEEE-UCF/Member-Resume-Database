import React from "react";
import { ucfMajors } from "../data/majors";
import type { Form } from "../interfaces";

type MajorComponentProps = {
    major: string;
    setFormData: React.Dispatch<React.SetStateAction<Form>>;
};

const MajorComponent = ({ 
    major, 
    setFormData 
}: MajorComponentProps) => {
    return (
        <>
            <h3>Major</h3>
            <select
                name="major"
                value={major}
                onChange={(e) =>
                    setFormData((prev) => ({ ...prev, major: e.target.value }))
                }
            >
                <option value="">Select Major</option>
                {ucfMajors.map((m, i) => (
                    <option key={i} value={m}>
                        {m}
                    </option>
                ))}
            </select>
        </>
    );
};

export default MajorComponent;