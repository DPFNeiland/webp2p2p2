import styles from './Header3.module.css'
import img from '../../assets/Menu.svg'
import img1 from '../../assets/Chat.svg'
import img2 from '../../assets/Call.svg'
import img3 from '../../assets/LocA.svg'


export function Header3(){
    return(
        <div>
            <header className={styles.header}>
                <img src={img} alt="" />

                <p>O.R.O.S</p>

                <span>  </span>
            </header>

            <div className={styles.subdiv}>
                <img 
                    src={img1} 
                    alt="" 
                />

                <img 
                    src={img2} 
                    alt="" 
                />

                <img 
                    src={img3} 
                    alt="" 
                />
            </div>
        </div>
    );
}