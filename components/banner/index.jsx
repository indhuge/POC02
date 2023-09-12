/* eslint-disable jsx-a11y/alt-text */
import Styles from "./style.module.scss"
import Link from "next/link"
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

const Banner = ({dados}) => {
    return <div className={Styles.container}>
        <div className={Styles.cima}>
            <PrismicNextImage alt="triangulo" className={Styles.triangulo} field={dados.img_esq} id="home"/>
        
            <div className={Styles.texto}><PrismicRichText field={dados.texto}/></div>
        
            <PrismicNextImage alt="Engrenagem" className={Styles.engrenagens} field={dados.img_dir}/>
        </div>
        <div className={Styles.baixo}>
            <div className={Styles.botao}><button><Link href={dados.linkbotao}><label>{dados.botaolabel}</label></Link></button></div>
            <PrismicNextImage alt="seta" className={Styles.seta} field={dados.img_baixo}/>
        </div>
    </div>;
};

export default Banner;