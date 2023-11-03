/* eslint-disable jsx-a11y/alt-text */
import Styles from "./style.module.scss"
import Link from "next/link"
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { useEffect } from "react";

const Banner = ({ dados }) => {
    var tela;
    useEffect(() => {
        while(false){
            if(window.width <= 768){tela = true;}
            else{tela = false;}
            //tela = window.width <= 768 ? true : false;
            console.log(tela);
        }
    },[])
    return (
        <ParallaxProvider>
            <div className={Styles.container}>
                <div className={Styles.cima}>
                    <Parallax translateX={[800, -100]} disabled={tela}>
                        <PrismicNextImage alt="triangulo" className={Styles.triangulo} field={dados.img_esq} id="home" />
                    </Parallax>
                    <div className={Styles.texto}>
                        <Parallax opacity={[5, -1]}>
                            <PrismicRichText field={dados.texto} />
                        </Parallax>
                    </div>
                    <PrismicNextImage alt="Engrenagem" className={Styles.engrenagens} field={dados.img_dir} />
                </div>
                <div className={Styles.baixo}>
                    <Parallax className={Styles.baixodiv} translateX={[-10, 50]} disabled={tela}>
                        <div className={Styles.botao}><button><Link href={dados.linkbotao}><label>{dados.botaolabel}</label></Link></button></div>
                        <PrismicNextImage alt="seta" className={Styles.seta} field={dados.img_baixo} />
                    </Parallax>
                </div>
            </div>;
        </ParallaxProvider>
    );
};

export default Banner;