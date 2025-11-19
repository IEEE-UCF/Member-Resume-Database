interface ResumeComponentProps {
    resume: string;
}

const ResumeComponent = ({ 
    resume 
}: ResumeComponentProps) => {
    return (
        <>
            <h3>Resume</h3>
            <a href={resume} target="_blank" rel="noopener noreferrer">
                View Resume
            </a>
        </>
    );
};

export default ResumeComponent;