import styles from "./container6.module.css"
import img from "../../assets/Mic.svg"

export function Container6(){
    return(
        <div className={styles.subdiv3}> 
            <input type="text" placeholder="   Procure aqui..." className={styles.input}/>

            <img 
                src={img} 
                alt="" 
            />
        </div>

        /*
            <p> Senha: <input type="password" name="senha" id="senha" title="Campo para inserir a senha de login do funcionário" size="30" maxlength="32" required=""> <button type="button" title="Ver ou ocultar senha" onclick="viewSenha()"> Ver ou ocultar senha </button> </p>
        */
    );
}