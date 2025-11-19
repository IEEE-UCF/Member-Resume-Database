type BioComponentProps = {
    bio: string;
};

const BioComponent = ({ 
    bio 
}: BioComponentProps) => {
    return (
        <>
            <h2>Bio</h2>
            <p>{bio}</p>
        </>
    );
};

export default BioComponent;