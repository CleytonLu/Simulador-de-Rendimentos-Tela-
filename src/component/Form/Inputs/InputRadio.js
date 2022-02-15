import styles from './radiosRend.module.css'

function InputRadio({type, name, value, text, checked}){
    return(
        <>
            <input className={styles.input} type='radio' name={name} value={value} checked={checked} /> 
            <label className={styles.label} for={name}>  {text} </label>
        </>
    )
}

export default InputRadio