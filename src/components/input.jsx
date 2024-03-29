const Input = ({namesId, types, placeholder, labels, stylesLabel = '', setValue}) => {

    const handleInputChange = (event) => {
        setValue(prevState => ({
            ...prevState,
            [namesId]: event.target.value
        }));
    };
    return (
        <div className={`w-full flex justify-start items-center`}>
            <div className={`w-[60%] my-3`}>
                <label htmlFor={namesId} className={`capitalize ${stylesLabel}`}>{labels}</label>
            </div>
            <div className={`w-[40%] my-3`}>
                <div className={`input-main w-[14rem]`}>
                    <input
                        id={namesId}
                        name={namesId}
                        type={types}
                        autoComplete={namesId}
                        required
                        className={`input-style w-full`}
                        placeholder={placeholder}
                        onChange={handleInputChange}
                    />
                    <span className="input-bottom"></span>
                    <span className="input-right"></span>
                    <span className="input-top"></span>
                    <span className="input-left"></span>
                </div>
            </div>
        </div>
    )
}
export default Input
