/* eslint-disable jsx-a11y/alt-text */
import Styles from "./style.module.scss"
import Link from "next/link"
import Image from "next/image"
import Logo from "../../public/assets/logoInd.png"
import Logoinstagram from "../../public/assets/iconeinstagram.png"
import Logofacebook from "../../public/assets/iconefacebook.png"
import Logolinkedin from "../../public/assets/iconelinkedin.png"
import Logoyoutube from "../../public/assets/iconeyoutube.png"


const Rodape = () => {
    return <div className={Styles.container}>
        <div className={Styles.logo}>
            <div id={Styles.logo}>
                <Image alt="logo" src={Logo}/>
            </div>
        </div>
        <div className={Styles.contato}>
            <Link href="./"><h2>INDHUGE</h2></Link>
            <label>0800 800 800</label>
            <label>email@indhuge.com</label>
        </div>
        <div className={Styles.menu}>
            <h3>Categorias</h3>
            <Link href="./blog#gestao">Gestão</Link>
            <Link href="./blog#manutencao">Manutenção</Link>
            <Link href="./blog#industria40">Industria 4.0</Link>
        </div> 
    </div>
}

export default Rodape