import Head from "next/head";
import { isFilled, asLink } from "@prismicio/client";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import Styles from "./style.module.scss";
import { components } from "@/slices";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import Header from "@/components/headerBlog";
import Rodape from "@/components/rodapeBlogPost";

export default function Page({ page }) {
    return (
        <>
            <Head>
                <title>{page.data.meta_title}</title>
                {isFilled.keyText(page.data.meta_description) ? (
                    <meta name="description" content={page.data.meta_description} />
                ) : null}
            </Head>
            <>
                <Header
                    className={Styles.header}
                    dados={page.data.header[0]}
                />
                <SliceZone slices={page.data.slices} components={components}/>
                <Rodape/>
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
