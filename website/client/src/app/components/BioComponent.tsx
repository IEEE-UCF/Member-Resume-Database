import type { FC } from "react";

type BioProps = {
    bio: string;
};

const BioComponent = ({ bio }: BioProps) => {
    return (
        <div className="output bio">
            <h2>Bio</h2>
            <p>{bio || "No bio provided."}</p>
        </div>
    );
};

export default BioComponent;