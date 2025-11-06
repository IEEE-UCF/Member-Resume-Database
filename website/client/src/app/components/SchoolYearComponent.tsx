interface SchoolYearComponentProps {
    schoolYear: string;
  }
   const SchoolYearComponent = ({ schoolYear }: SchoolYearComponentProps) => {
    return (
      <>
        <h3>School Year</h3>
        <p>{schoolYear}</p>
      </>
    );
  };
   export default SchoolYearComponent;
 