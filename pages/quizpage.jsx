import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Header from "../components/headerLanding";
import Rodape from '../components/rodapeLanding';
import Styles from "./style.module.scss";
import { useEffect } from "react";
import Head from 'next/head';

export default function Page({ page, metadata }) {
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
				<Rodape
					menu={page?.data?.rodapemenu[0]}
					conteudos={page?.data?.rodapeconteudos[0]}
				/>
			</div>
		</>
	);
}

export async function getServerSideProps({ params, previewData }) {
    const client = createClient({ previewData });
	const page = await client.getByUID("quiz", "quiz");

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