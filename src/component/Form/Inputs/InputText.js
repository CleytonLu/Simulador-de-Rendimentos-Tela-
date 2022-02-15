import styles from './InputText.module.css'

function InputText({text, type}){
    return(
        <div className={styles.dataBlockContent}>
            <label>{text}</label>
            <input type={type} />
        
        </div>
    )
}

export default InputText