import type { FC } from "react";

type Props = {
    name: string;
};

const NameComponent: FC<Props> = ({ name }) => {
    return (
        <div className="output name">
            <h2>{name || "Name"}</h2>
        </div>
    );
};

export default NameComponent;