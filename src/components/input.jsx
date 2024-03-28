const Input = ({namesId, types, placeholder, stylesLabel = ''}) => {
    return (
        <div className={`w-full flex justify-evenly items-center`}>
        <label htmlFor={namesId} className={`capitalize ${stylesLabel}`}>{namesId}</label>
        <div className={`input-main w-[10rem]`}>
            <input
                id={namesId}
                name={namesId}
                type={types}
                autoComplete={namesId}
                required
                className={`input-style w-full`}
                placeholder={placeholder}
            />
            <span className="input-bottom"></span>
            <span className="input-right"></span>
            <span className="input-top"></span>
            <span className="input-left"></span>
        </div>
    </div>
    )
}
export default Input
