import styles from "./container4.module.css"

export function Container4(){
    return(
        <div>
            <div className={styles.div} >

                <input type="text" placeholder="Nome Completo" id="Nome Completo" className={styles.input}/>

                <input type="text" placeholder="CPF" id="cpf" className={styles.input}/>
            
                <div className={styles.subdiv}>
                    <input type="text" placeholder="Email ou telefone" name="Email_Telefone" id="" className={styles.subinput}/>

                    <input type="number" placeholder="Idade" name="idade" id="" />
                </div>

                <input type="password" name="senha" id="idsenha" placeholder="Senha" className={styles.button} />

                <input type="password" name="senha" id="idsenhaconfirm" placeholder="Confirme sua senha" className={styles.button} />


                <button>Criar Conta</button>
                

                <p>ou</p>

                <p className={styles.criar}>Usar conta já existente</p>
            </div>

        </div>

        /*
            <p> Senha: <input type="password" name="senha" id="senha" title="Campo para inserir a senha de login do funcionário" size="30" maxlength="32" required=""> <button type="button" title="Ver ou ocultar senha" onclick="viewSenha()"> Ver ou ocultar senha </button> </p>
        */
    );
}