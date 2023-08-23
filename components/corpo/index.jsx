/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link"
import Styles from "./style.module.scss"
import Image from "next/image"
import Cliente from "../../public/assets/cliente.png"

const Corpo = () => {
    return <div className={Styles.container} id="produtos" >
        <div className={Styles.item1} >
            <h2>SISTEMA PARA GERÊNCIAMENTO DE ATIVOS EM TEMPO REAL</h2>
        </div>
        <div className={Styles.item2}>
            <h2>MANUTENÇÃO PRESCRITIVA</h2>
        </div>
        <div className={Styles.item3}>
            <h2>ACOMPANHAMENTO DE DADOS</h2>
        </div>
        <div className={Styles.item4} id="clientes">
            <h2>CONHEÇA NOSSOS CLIENTES</h2>
            <div className={Styles.imagens}>
                <div><Image src={Cliente}/></div>
                <div><Image src={Cliente}/></div>
                <div><Image src={Cliente}/></div>
            </div>
            <div className={Styles.botao}>
                <button id="botao"><Link href="https://www.youtube.com/"><label>VER MAIS</label></Link></button>
            </div>
        </div>
    </div>

}

export default Corpo