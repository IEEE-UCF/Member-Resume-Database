interface PictureComponentProps {
    picture: any;
}

const PictureComponent = ({ 
    picture 
}: PictureComponentProps) => {
    return (
        <>
            <h3>Picture</h3>
            {picture ? (
                <img 
                    src={typeof picture === 'string' ? picture : URL.createObjectURL(picture)} 
                    alt="Profile" 
                    style={{ maxWidth: '200px', maxHeight: '200px' }}
                />
            ) : (
                <p>No picture uploaded</p>
            )}
        </>
    );
};

export default PictureComponent;