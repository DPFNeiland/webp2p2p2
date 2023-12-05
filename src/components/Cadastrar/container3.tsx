import logo from '../../assets/logoros.svg'
import styles from './container3.module.css'

export function Container3(){
    return(
        <div className={styles.div}>
            <div className={styles.subdiv}>
                <img 
                    src={logo} 
                    alt="" 
                />
                <span>O.R.O.S</span>
            </div>

        </div>
    );
}