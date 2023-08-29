/* eslint-disable jsx-a11y/alt-text */
import Styles from "./style.module.scss"
import Link from "next/link"
import Image from "next/image"
import Triangulo from "../../public/assets/triangulobanner.png"
import Engrenagens from "../../public/assets/engrenagensbanner.gif"
import Seta from "../../public/assets/setabanner.png"

const Header = () => {
    return <div className={Styles.container}>
        <div className={Styles.cima}>
            <Image alt="triangulo" className={Styles.triangulo} src={Triangulo} id="home"/>
        
            <h1 className={Styles.texto}>TRANSFORMANDO A SUA INDÚSTRIA<br/>COM A NOSSA TECNOLOGIA</h1>
        
            <Image alt="Engrenagem" className={Styles.engrenagens} src={Engrenagens}/>
        </div>
        <div className={Styles.baixo}>
            <div className={Styles.botao}><button><Link href="/#produtos"><label>CONHEÇA O QUE OFERECEMOS</label></Link></button></div>
            <Image alt="seta" className={Styles.seta} src={Seta}/>
        </div>
    </div>;
};

export default Header;