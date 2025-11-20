interface SkillsComponentProps {
    skills: string[];
}

const SkillsComponent = ({ 
    skills 
}: SkillsComponentProps) => {
    return (
        <>
            <h3>Skills</h3>
            <p>{skills.join('  |  ')}</p>
        </>
    );
};

export default SkillsComponent;
