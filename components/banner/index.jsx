/* eslint-disable jsx-a11y/alt-text */
import Styles from "./style.module.scss"
import Image from "next/image"
import Triangulo from "../../public/assets/triangulobanner.png"
import Engrenagens from "../../public/assets/engrenagensbanner.gif"
import Seta from "../../public/assets/setabanner.png"

const Header = () => {
    return <div className={Styles.container}>
        <div className={Styles.triangulo}>
            <Image src={Triangulo}/>
        </div>
        <div className={Styles.texto}>
            <h1>TRANSFORMANDO A SUA INDÚSTRIA COM A NOSSA TECNOLOGIA</h1>
        </div>
        <div className={Styles.engrenagens}>
            <Image src={Engrenagens}/>
        </div>
        <div className={Styles.seta}>
            <div className={Styles.botao}><button><label>CONHEÇA O QUE OFERECEMOS</label></button></div>
            <Image src={Seta}/>
        </div>
    </div>;
};

    //window.addEventListener("scroll", setScrollVar)


/*function setScrollVar(){
    const htmlElement = document.documentElement
    const porcentagemscroll = htmlElement.scrollTop / htmlElement.clientHeight
    console.log(Math.min(porcentagemscroll * 100, 100))
    htmlElement.style.setProperty("--scroll", Math.min(porcentagemscroll * 100, 100))
}

setScrollVar()*/

export default Header;