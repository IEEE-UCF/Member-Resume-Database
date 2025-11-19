import React from "react";
import type { Form } from "../interfaces";

type NameComponentProps = {
    name: string;
    setFormData: React.Dispatch<React.SetStateAction<Form>>;
};

const NameComponent = ({ 
    name, 
    setFormData 
}: NameComponentProps) => {
    return (
        <>
            <h3>Name</h3>
            <input
                type="text"
                name="name"
                value={name}
                onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
            />
        </>
    );
};

export default NameComponent;