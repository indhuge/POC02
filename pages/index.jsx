/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/next-script-for-ga */
import Head from 'next/head'
import Styles from "./style.module.scss"
import Header from "../components/headerLanding"
import Banner from "../components/banner"
import { Inter } from 'next/font/google'
import { isFilled } from "@prismicio/client";
import Rodape from '../components/rodapeLanding'
import { useEffect } from "react";
import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import Popup from '../components/Popup'


const inter = Inter({ subsets: ['latin'] })

export default function Home({ page }) {
	/*conexão com o servidor do chatbot*/
	useEffect(() => {
		async function carregaBot() {
			await window.botpressWebChat?.init({
				composerPlaceholder: "Chat with IndHelp",
				botConversationDescription: "Tire suas duvidas",
				botId: "a65625bb-64c9-4a57-b4db-a7bd2aa1270b",
				hostUrl: "https://cdn.botpress.cloud/webchat/v0",
				messagingUrl: "https://messaging.botpress.cloud",
				clientId: "a65625bb-64c9-4a57-b4db-a7bd2aa1270b",
				botName: "IndHelp",
			});
		}
		carregaBot();
	});
	console.log(page?.data);
	return (
		<>
			<Head>
				<title>{page?.data?.meta_title}</title>
				{isFilled.keyText(page?.data?.meta_description) ? (
					<meta name="description" content={page?.data?.meta_description} />
				) : null}
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
				<Popup
					texto={page?.data?.popuptexto}
					imagem={page?.data?.popupimagem}
				/>
				<Header
					className={Styles.header}
					dados={page?.data?.header[0]}
				/>
				<Banner dados={page?.data?.banner[0]} />
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
	const page = await client.getByUID("landing_page", "landing_page")
	return {
		props: { page },
	};
}