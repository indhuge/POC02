/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/next-script-for-ga */
import Head from 'next/head'
import Styles from "./style.module.scss"
import Header from "../../components/headerLanding"
import Banner from "../../components/banner"
import { isFilled } from "@prismicio/client";
import { Inter } from 'next/font/google'
import Rodape from '../../components/rodapeLanding'
import { useEffect } from "react";
import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import Popup from '../../components/Popup';
import { ParallaxProvider } from 'react-scroll-parallax'


const inter = Inter({ subsets: ['latin'] })

export default function Home({ page, metadata }) {
	console.log(page?.data);
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
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="ROBOTS" content="INDEX, FOLLOW"></meta>
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
				<Popup
					texto={page?.data?.popuptexto}
					imagem={page?.data?.popupimagem}
				/>
				<Header
					className={Styles.header}
					dados={page?.data?.header[0]}
				/>
				<ParallaxProvider><Banner dados={page?.data?.banner[0]} /></ParallaxProvider>
				<SliceZone slices={page?.data?.slices} components={components} />
				<Rodape
					menu={page?.data?.rodapemenu[0]}
					conteudos={page?.data?.rodapeconteudos[0]}
				/>
			</div>
			<script src="https://cdn.botpress.cloud/webchat/v0/inject.js" />
		</>
	);
}

export async function getServerSideProps({ params, previewData }) {
	const client = createClient({ previewData });
	const page = await client.getByUID("landing_page", "landing_page_en");

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