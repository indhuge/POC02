/* eslint-disable jsx-a11y/alt-text */
import Styles from "./style.module.scss"
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { useState } from "react";

const Popup = ({ texto, imagem }) => {

    const [fechado, setFechado] = useState(false)

    return <div 
        className={Styles.fundo} 
        style={{["display"]: fechado? "none" : "grid"}}
    >
        <div className={Styles.container}>
            <div className={Styles.texto}>
                <PrismicRichText field={texto}/>
                <button onClick={() => {setFechado(true); console.log(fechado)}}>X</button>
            </div>
            <PrismicNextImage field={imagem}/>
        </div>
    </div>;
};

export default Popup;