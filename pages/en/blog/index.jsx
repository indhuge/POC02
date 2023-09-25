/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head'
import Styles from "./style.module.scss"
import Header from "../../../components/headerBlog"
import Rodape from '../../../components/rodapeBlog'
import { Inter } from 'next/font/google'
import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

const inter = Inter({ subsets: ['latin'] })

export default function Home({ page }) {
    console.log(page?.data);
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />

                <script async src="https://www.googletagmanager.com/gtag/js?id=G-DJMN7XBGQ3" />

                <script
                    dangerouslySetInnerHTML={{
                        __html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', 'G-DJMN7XBGQ3');
						`
                    }}
                />
            </Head>
            <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/43697916.js" />
            <div className={Styles.container}>
                <Header
                    className={Styles.header}
                    dados={page?.data?.header[0]}
                />
                <SliceZone slices={page?.data?.slices} components={components} />
                <Rodape dados={page?.data?.rodape[0]}/>
            </div>
            <script src="https://cdn.botpress.cloud/webchat/v0/inject.js" />
        </>
    );

}

export async function getServerSideProps({ params, previewData }) {
	const client = createClient({ previewData });
	const page = await client.getByUID("blog", "blog_en")
	return{
		props: { page },
	};
}