export const Input = ({
    name = "",
    value = "",
    label = "",
    placeholder = "",
    helper = "",
    inputId = "",
    helperId = "",
    type = "text",
    className = {
        groupClass: "",
        labelClass: "",
        inputClass: "",
        helperClass: ""
    },
    style = {
        groupStyle: {},
        labelStyle: {},
        inputStyle: {},
        helperStyle: {}
    },
    onChange = () => { },
}) => {

    const changeHandler = (e) => onChange(e)

    return <div className={`form-group ${className?.groupClass}`} style={style?.groupStyle} >
        <label htmlFor={inputId} className={`user-select-none ${className?.labelClass}`} style={style?.labelStyle}>{label}</label>
        <input
            name={name}
            value={value}
            type={type}
            className={`form-control ${className?.inputClass}`}
            style={style?.inputStyle}
            id={inputId}
            aria-describedby={helperId}
            placeholder={placeholder}
            onChange={changeHandler}
        />
        <small id={helperId}
            className={`form-text text-muted ${className?.helperClass}`}
            style={style?.labelStyle}
        >{helper}</small>
    </div>
}