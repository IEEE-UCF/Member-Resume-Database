import type { FC } from "react";

type NameComponentProps = {
    name: string;
};

const NameComponent = ({ 
    name 
}: NameComponentProps) => {
    return (
        <>
            <h1>{name}</h1>
        </>
    );
};

export default NameComponent;