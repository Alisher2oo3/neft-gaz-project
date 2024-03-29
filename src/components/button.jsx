const Button = ({name, onClick}) => {
    return <button onClick={onClick} className={`button-style`}>{name}</button>
}
export default Button
