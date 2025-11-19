import React from "react";
import type { Form } from "../interfaces";

type BioComponentProps = {
    bio: string;
    setFormData: React.Dispatch<React.SetStateAction<Form>>;
};

const BioComponent = ({ 
    bio, 
    setFormData, 
}: BioComponentProps) => {
    return (
        <>
            <h3>Bio</h3>
            <textarea
                name="bio"
                value={bio}
                onChange={(e) =>
                    setFormData((prev) => ({ ...prev, bio: e.target.value }))
                }
                rows={5}
            />
        </>
    );
};

export default BioComponent;