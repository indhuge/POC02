/* eslint-disable jsx-a11y/alt-text */
import Styles from "./style.module.scss"
import Link from "next/link"
import Image from "next/image"
import Logo from "../../public/assets/logo.png"
import Logoinstagram from "../../public/assets/iconeinstagram.png"
import Logofacebook from "../../public/assets/iconefacebook.png"
import Logolinkedin from "../../public/assets/iconelinkedin.png"
import Logoyoutube from "../../public/assets/iconeyoutube.png"


const Rodape = () => {
    return <div className={Styles.container}>
        <div className={Styles.contato}>
            <h1>INDHUGE</h1>
            <label>0800 800 800</label>
            <label>email@indhuge.com</label>
        </div>
        <div className={Styles.menu}>
            <h4>MENU</h4>
            <Link href={""}>sobre nós</Link>
            <Link href={""}>produtos</Link>
            <Link href={""}>suporte</Link>
            <Link href={""}>cases</Link>
        </div>
        <div className={Styles.conteudos}>
            <h4>CONTEÚDOS</h4>
            <Link href={""}>blog</Link>
            <Link href={""}>tutoriais</Link>
            <Link href={""}>conteúdo exclusivo</Link>
        </div>
        <div className={Styles.logo}>
            <Image src={Logo} id={Styles.logo}/>
            <div className={Styles.redessociais}>
                <Link href={""}><Image src={Logoinstagram}/></Link>
                <Link href={""}><Image src={Logofacebook}/></Link>
                <Link href={""}><Image src={Logolinkedin}/></Link>
                <Link href={""}><Image src={Logoyoutube}/></Link>
            </div>
        </div>
    </div>
}

export default Rodape