interface GraduationYearComponentProps {
    graduationYear: number;
}
const GraduationYearComponent = ({
    graduationYear,
}: GraduationYearComponentProps) => {
    return (
        <>
            <h3>Graduation Year</h3>
            <p>{graduationYear}</p>
        </>
    );
};
export default GraduationYearComponent;
