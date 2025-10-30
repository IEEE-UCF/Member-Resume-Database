interface ResumeComponentProps {
    resume: any;
    resumeType?: string;
}

const ResumeComponent = ({ resume, resumeType }: ResumeComponentProps) => {
    return (
        <>
            <h3>Resume</h3>
            {resumeType === "link" ? (
                <a href={resume} target="_blank" rel="noopener noreferrer">
                    View Resume
                </a>
            ) : resume ? (
                <a href={URL.createObjectURL(resume)} target="_blank" rel="noopener noreferrer">
                    Download Resume
                </a>
            ) : (
                <p>No resume uploaded</p>
            )}
        </>
    );
};

export default ResumeComponent;