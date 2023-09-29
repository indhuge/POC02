/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import { isFilled } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import Styles from "./style.module.scss";
import { components } from "@/slices";
import { createClient } from "@/prismicio";
import Header from "@/components/headerBlogPost";
import Comentario from "@/components/comentario";
import Rodape from "@/components/rodapeBlogPost";
import { useEffect, useState } from "react";
//import Gerador from "../api/geradorComentarios";

export default function Page({ page, metadata }) {

    const [data, setData] = useState([])
    const [logo, setLogo] = useState([])
    const [dados, setDados] = useState([])
    const [header, setHeader] = useState([])
    const [auth, setAuth] = useState([])


    useEffect(() => {
        setData(data);
    }, [])

    useEffect(() => {
        setLogo(logo);
    }, [])

    useEffect(() => {
        setDados(dados);
    }, [])

    useEffect(() => {
        setHeader(header);
    }, [])

    useEffect(() => {
        setAuth(auth);
    }, [])

    return (
        <>
            <Head>
                <title>{metadata?.meta_title}</title>
                <link
                    rel="canonical"
                    href={`http://localhost:3000${metadata?.meta_url}`}
                />
                <meta name="description" content={metadata?.meta_description} />
                <meta property="og:image" content={metadata?.meta_image.url} />
            </Head>
            <>
                <Header
                    className={Styles.header}
                    dados={page?.data?.header[0]}
                />
                <SliceZone slices={page?.data?.slices} components={components} />
                <Comentario idPost={page?.uid} />
                <Rodape />
            </>
        </>
    );
}



export async function getServerSideProps({ params }) {
    const client = createClient();
    const page = await client.getByUID("blog_post", params?.id);
    
    const metadata = {
        meta_description: page.data.meta_description,
        meta_image: page.data.meta_image,
        meta_title: page.data.meta_title,
        meta_url: page.url,
    };

    return {
        props: { page, metadata },
    };
}

export function getServerSidePaths() {
    return {
        paths: ["/blog/teste"],
        fallback: true,
    };
}
