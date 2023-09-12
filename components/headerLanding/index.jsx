/* eslint-disable @next/next/no-img-element */
import Styles from "./style.module.scss"
import Link from "next/link"
import { useEffect, useState } from "react";


const Header = ({
    className,
    dados
}) => {

    const [logo, setLogo] = useState([])

    useEffect(() =>{
        setLogo(logo);
    }, [])
    
    console.log({dados});
    return <div className={Styles.container}>
        <div className={Styles.logo}>
            <img alt="logo" src={dados?.logo?.url}/>
        </div>
        <div className={Styles.menu}>
            <Link href={dados?.link1}>{dados?.linklabel1}</Link>
            <Link href={dados?.link2}>{dados?.linklabel2}</Link>
            <Link href={dados?.link3}>{dados?.linklabel3}</Link>
        </div>
        <div className={Styles.botao}>
            <Link href={dados?.linkbotao}><button><label>{dados?.botaolabel}</label></button></Link>
        </div>
    </div>
};

export default Header;