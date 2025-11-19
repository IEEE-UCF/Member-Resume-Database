interface LinksComponentProps {
    links: string[];
}

const LinksComponent = ({ 
    links 
}: LinksComponentProps) => {
    return (
        <>
            <h3>Links</h3>
            {links.map((link, index) => (
                <a key={`link-${index}`} href={link} target="_blank" rel="noopener noreferrer">
                    <p>{link}</p>
                </a>
            ))}
        </>
    );
};

export default LinksComponent;