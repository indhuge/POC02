/* eslint-disable jsx-a11y/alt-text */
import Styles from "./style.module.scss"
import Link from "next/link"
import Image from "next/image"
import Logo from "../../public/assets/logoInd.png"
import Logoinstagram from "../../public/assets/iconeinstagram.png"
import Logofacebook from "../../public/assets/iconefacebook.png"
import Logolinkedin from "../../public/assets/iconelinkedin.png"
import Logoyoutube from "../../public/assets/iconeyoutube.png"


const Rodape = ({
    menu,
    conteudos
}) => {
    return <div className={Styles.container}>
        <div className={Styles.contato}>
            <h2>INDHUGE</h2>
            <label>0800 800 800</label>
            <label>email@indhuge.com</label>
        </div>
        <div className={Styles.menu}>
            <h4>{menu?.titulo}</h4>
            <Link href={menu?.link1}>{menu?.linklabel1}</Link>
            <Link href={menu?.link2}>{menu?.linklabel2}</Link>
            <Link href={menu?.link3}>{menu?.linklabel3}</Link>
            <Link href={menu?.link4}>{menu?.linklabel4}</Link>
        </div>
        <div className={Styles.conteudos}>
            <h4>{conteudos?.titulo}</h4>
            <Link href={conteudos?.link1}>{conteudos?.linklabel1}</Link>
            <Link href={conteudos?.link2}>{conteudos?.linklabel2}</Link>
            <Link href={conteudos?.link3}>{conteudos?.linklabel3}</Link>
        </div>
        <div className={Styles.logo}>
            <div id={Styles.logo}>
                <Image alt="logo" src={Logo}/>
            </div>
            <div className={Styles.redessociais}>
                <Link href={"https://www.instagram.com"}><Image alt="instagram" src={Logoinstagram}/></Link>
                <Link href={"https://www.facebook.com"}><Image alt="facebook" src={Logofacebook}/></Link>
                <Link href={"https://www.linkedin.com"}><Image alt="linkedin" src={Logolinkedin}/></Link>
                <Link href={"https://www.youtube.com"}><Image alt="youtube" src={Logoyoutube}/></Link>
            </div>
        </div>
    </div>
}

export default Rodape