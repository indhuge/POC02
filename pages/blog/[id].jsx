import Head from "next/head";
import { isFilled } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import Styles from "./style.module.scss";
import { components } from "@/slices";
import { createClient } from "@/prismicio";
import Header from "@/components/headerBlog";
import Rodape from "@/components/rodapeBlogPost";
import { useEffect, useState } from "react";



export default function Page({ page }) {

    const [data, setData] = useState([])
    const [logo, setLogo] = useState([])
    const [dados, setDados] = useState([])
    const [header, setHeader] = useState([])

    useEffect(() =>{
        setData(data);
    }, [])

    useEffect(() =>{
        setLogo(logo);
    }, [])

    useEffect(() =>{
        setDados(dados);
    }, [])

    useEffect(() =>{
        setHeader(header);
    }, [])

    return (
        <>
            <Head>
                <title>{page?.data?.meta_title}</title>
                {isFilled.keyText(page?.data?.meta_description) ? (
                    <meta name="description" content={page?.data?.meta_description} />
                ) : null}
            </Head>
            <>
                <Header
                    className={Styles.header}
                    dados={page?.data?.header[0]}
                />
                <SliceZone slices={page?.data?.slices} components={components} />
                <Rodape />
            </>
        </>
    );
}



export async function getStaticProps({ params }) {
    const client = createClient();
    const page = await client.getByUID("blog_post", params.id);
    return {
        props: { page },
    };
}

export function getStaticPaths() {
    return {
        paths: ["/blog/teste"],
        fallback: true,
    };
}
