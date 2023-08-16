/* eslint-disable jsx-a11y/alt-text */
import Styles from "./style.module.scss"
import Image from "next/image"
import Cliente from "../../public/assets/cliente.png"

const Corpo = () => {
    return <div className={Styles.container}>
        <div className={Styles.item1}>
            <h2>SISTEMA PARA GERÊNCIAMENTO DE ATIVOS EM TEMPO REAL</h2>
        </div>
        <div className={Styles.item2}>
            <h2>MANUTENÇÃO PRESCRITIVA</h2>
        </div>
        <div className={Styles.item3}>
            <h2>ACOMPANHAMENTO DE DADOS</h2>
        </div>
        <div className={Styles.item4}>
            <h2>CONHEÇA NOSSOS CLIENTES</h2>
            <div className={Styles.imagens}>
                <div><Image src={Cliente}/></div>
                <div><Image src={Cliente}/></div>
                <div><Image src={Cliente}/></div>
            </div>
            <button id="botao">VER MAIS</button>
        </div>
    </div>

}

export default Corpo