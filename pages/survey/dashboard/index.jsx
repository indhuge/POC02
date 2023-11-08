/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head'
import Styles from "./style.module.scss"
import SurveyChart from "../../../components/surveyChart"
import { Inter } from 'next/font/google'
import { createClient } from "@/prismicio";

const inter = Inter({ subsets: ['latin'] })

export default function Home({ page, metadata }) {
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
                <div className={Styles.card}><SurveyChart /></div>
                <div className={Styles.card}><SurveyChart /></div>
                <div className={Styles.card}><SurveyChart /></div>
                <div className={Styles.card}><SurveyChart /></div>
                <div className={Styles.card}><SurveyChart /></div>
                <div className={Styles.card}><SurveyChart /></div>
                <div className={Styles.card}><SurveyChart /></div>
            </div>
            <script src="https://cdn.botpress.cloud/webchat/v0/inject.js" />
        </>
    );

}

export async function getServerSideProps({ params, previewData }) {
    const client = createClient({ previewData });
    const page = await client.getByUID("dashboard", "survey")
    
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