/* eslint-disable jsx-a11y/alt-text */
import Styles from "./style.module.scss"
import Image from "next/image"
import Link from "next/link"
import Logo from "../../public/assets/logo.png"

const Header = () => {
    return <div className={Styles.container}>
        <div className={Styles.logo}>
            <Image alt="logo" src={Logo}/>
        </div>
        <div className={Styles.menu}>
            <Link href="/#home">HOME</Link>
            <Link href="/#produtos">PRODUTOS</Link>
            <Link href="/#clientes">CASES</Link>
        </div>
        <div className={Styles.botao}>
            <Link href="/#formulario"><button><label>ENTRE EM CONTATO</label></button></Link>
        </div>
    </div>
};

export default Header;