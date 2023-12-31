/* eslint-disable react-hooks/exhaustive-deps */
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
            <Link href={dados?.link1 ?? ''}>{dados?.linklabel1}</Link>
            <Link href={dados?.link2 ?? ''}>{dados?.linklabel2}</Link>
            <Link href={dados?.link3 ?? ''}>{dados?.linklabel3}</Link>
            <Link href={dados?.link4 ?? ''}>{dados?.linklabel4}</Link>
            <Link href={dados?.link5 ?? ''}>{dados?.linklabel5}</Link>
        </div>
        <div className={Styles.idioma}>
            <Link href={dados?.idioma? "../../blog" : "../en/blog"}>{dados?.idioma? "EN-US" : "PT-BR"}</Link>
        </div>
    </div>
};

export default Header;