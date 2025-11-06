import type { FC } from "react";

type Props = {
    bio: string;
};

const BioComponent: FC<Props> = ({ bio }) => {
    return (
        <div className="output bio">
            <h2>Bio</h2>
            <p>{bio || "No bio provided."}</p>
        </div>
    );
};

export default BioComponent;