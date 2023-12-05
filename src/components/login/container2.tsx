import styles from "./container2.module.css"

export function Container2(){
    return(
        <div>
            <div className={styles.div} >

                <input type="text" placeholder="CPF" id="cpf" className={styles.input}/>
                <br />
                <input type="password" placeholder="Senha" id="password" className={styles.input}/>

                <div  className={styles.divcheck}>
                    <div className={styles.subdiv}>
                        <input className={styles.menor} type="checkbox" name="" id=""/> 
                        <label>Lembrar</label>
                    </div>

                    <a >Esqueci minha senha</a>
                </div>

                <button className={styles.button} >Entrar</button>
            </div>

            <div>
                <p>ou</p>

                <p className={styles.criar}>Criar nova conta</p>

            </div>

        </div>

        /*
            <p> Senha: <input type="password" name="senha" id="senha" title="Campo para inserir a senha de login do funcionário" size="30" maxlength="32" required=""> <button type="button" title="Ver ou ocultar senha" onclick="viewSenha()"> Ver ou ocultar senha </button> </p>
        */
    );
}