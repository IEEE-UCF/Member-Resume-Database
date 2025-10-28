interface SkillsComponentProps {
    skills: string[];
}

const SkillsComponent = ({ skills }: SkillsComponentProps) => {
    return (
        <>
            <h3>Skills</h3>
            {
                skills.map((skill, index) => (
                    <p key={`skill-${index}`}>{skill}</p>
                ))
            }
        </>
    );
};

export default SkillsComponent;