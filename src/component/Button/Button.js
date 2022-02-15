import './Button.module.css'

function Button({type, text, onChange}){
    return(
        <button type={type} onChange={onChange}>{text}</button>
    )
}

export default Button