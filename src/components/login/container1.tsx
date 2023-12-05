import logo from '../../assets/logoros.svg'
import styles from './container1.module.css'

export function Container1(){
    return(
        <div className={styles.div}>
            <img 
                src={logo} 
                alt="" 
            />

            <h1>O.R.O.S</h1>

            <span>Obter | Rastrear | Ortografar | Submeter</span>
        </div>
    );
}