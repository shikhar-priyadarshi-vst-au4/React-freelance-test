export const Button = ({
    type = "button",
    className = "btn btn-primary",
    buttonStyle = {},
    onClick = () => { },
    children = <>Submit</>
}) => {
    return <button type={type} className={`user-select-none ${className}`} onClick={onClick} style={buttonStyle}>{children}</button>
}