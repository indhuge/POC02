import Styles from "./style.module.scss"

const Formulario = () => {
    return <div className={Styles.container} id="formulario">
        <form>
            <h2>ENTRE EM CONTATO E TRANSFORME A SUA PRODUÇÃO</h2>
            <input type="text" placeholder=" NOME" required/>
            <input type="email" placeholder=" EMAIL" required/>
            <input type="text" placeholder=" TELEFONE" pattern="^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$" required/>
            <input type="text" className={Styles.msg} placeholder=" MENSAGEM" required/>
            <input type="submit" placeholder=" ENVIAR"/>
        </form>
    </div>
}

export default Formulario