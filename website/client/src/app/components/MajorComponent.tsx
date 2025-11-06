import type { FC } from "react";

type Props = {
    major: string;
};

const MajorComponent: FC<Props> = ({ major }) => {
    return (
        <div className="output major">
            <h3>Major</h3>
            <p>{major || "Undeclared"}</p>
        </div>
    );
};

export default MajorComponent;