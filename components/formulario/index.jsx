import Styles from "./style.module.scss"

const Formulario = () => {
    return <div className={Styles.container}>
        <form>
            <h2>ENTRE EM CONTATO E TRANSFORME A SUA PRODUÇÃO</h2>
            <input type="text" placeholder=" NOME"/>
            <input type="email" placeholder=" EMAIL"/>
            <input type="text" placeholder=" TELEFONE"/>
            <input type="text" placeholder=" MENSAGEM"/>
            <input type="submit" className="msg" placeholder=" ENVIAR"/>
        </form>
    </div>
}

export default Formulario