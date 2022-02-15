import styles from './Formulario.module.css'

import Button from '../Button/Button'
import InputRadio from './Inputs/InputRadio'
import InputText from './Inputs/InputText'



function Formulario(){

    function handleOnChange(e){
        e.preventDefault()
        console.log(e)
    }

    return(       
            <form className="formContent">
                
                <div className={styles.radiosContent}>
                    <div className={styles.radios}>
                    <InputRadio name='optionsOne' value='bruto' text='Bruto' checked />
                    <InputRadio name='optionsOne' value='liquido' text='Líquido'  />

                </div>

                <div className={styles.radiosTwo}>
                    <InputRadio name='optionsTwo' value='pre' checked text='PRÉ' />
                    <InputRadio name='optionsTwo' value='pos' text='PÓS'  />
                    <InputRadio name='optionsTwo' value='fixado' text='FIXADO'  />

                </div>
                </div>               

                <div className={styles.dataBlockContent}>
                    <div className={styles.dataBlockOne}>

                    <InputText type='text' text='Aport Inicial' />
                    <InputText type='number' text='Prazo em Meses' />
                    <InputText type='number' text='IPCA (ao ano)' />

                </div >                

                <div className={styles.dataBlockTwo}>

                    <InputText type='text' text='Aport Mensal' />
                    <InputText type='number' text='Rentabilidade' />
                    <InputText type='number' text='CDI (ao ano)' />
                </div>
                </div>
                
                <div className={styles.buttonContent}>
                    <Button className={styles.buttonOne} type='reset' text='Limpar Campos' />
                    <Button className={styles.buttonTwo} onChange={handleOnChange} type='submit' text='Simular'  />
                </div>
            </form>
    )
}

export default Formulario
