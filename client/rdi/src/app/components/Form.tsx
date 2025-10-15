const Form = () => {
    const handleSubmit = () => {
        console.log("HI")
    }

    return (
        <>
            <form onSubmit={() => handleSubmit}>
                <button
                    type = "submit"
                />
            </form>
        </>
    )
}

export default Form