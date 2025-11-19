type MajorComponentProps = {
    major: string;
};

const MajorComponent = ({ 
    major 
}: MajorComponentProps) => {
    return (
        <>
            <h3>Major</h3>
            <p>{major}</p>
        </>
    );
};

export default MajorComponent;