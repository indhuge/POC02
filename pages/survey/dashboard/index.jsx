/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head'
import Styles from "./style.module.scss"
import SurveyChart from "../../../components/surveyChart"
import React, { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'
import { createClient } from "@/prismicio";
import { useRouter } from "next/navigation";


const inter = Inter({ subsets: ['latin'] })

async function fetchValores() {
    const r1 = await fetch(`/api/contaSurvey`, { method: "GET", });
    const r2 = await r1.json();
    return r2;
}

export default function Dashboard({ page, metadata }) {
    const [valores, setValores] = useState([]);
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const carrega = async () => {
            const res = await fetchValores();
            setValores(res);
            setTimeout(() => { setLoading(false) }, 3000)
        }
        carrega();
    }, [])

    if (loading) {
        return <>Carregando...</>
    }

    if (!loading) {
        console.log(valores);
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
                    <button className={Styles.botao} onClick={()=>router.push("/")}>&#129044;VOLTAR</button>
                    <div className={Styles.containerInt}>
                        {valores.map((n, index) => {
                            return (
                                <div className={Styles.card} key={index}><SurveyChart labels={labels[index]} valores={n} /></div>
                            );
                        })}
                    </div>
                </div>
                <script src="https://cdn.botpress.cloud/webchat/v0/inject.js" />
            </>
        );
    }
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

export const labels = [
    [
        "What are the key maintenance challenges your organization faces?",
        "Equipment downtime and breakdowns",
        "Inefficient work order management",
        "Lack of asset visibility and tracking",
        "Compliance and regulatory issues"
    ],
    [
        "How do you currently manage maintenance activities?",
        "Spreadsheets and manual processes",
        "Basic maintenance software",
        "Pen and paper",
        "No structured system in place"
    ],
    [
        "Are you looking for a CMMS solution to improve maintenance efficiency and productivity?",
        "Disagree",
        "Neutral",
        "Agree",
        "Strongly Agree"
    ],
    [
        "Which features of a CMMS solution are most important to you?",
        "Asset management",
        "Preventive maintenance scheduling",
        "Work order tracking and management",
        "Reporting and analytics"
    ],
    [
        "Rank the following features in order of importance to your organization.",
        "Drag and drop work order scheduling",
        "Mobile access and app functionality",
        "Integration with existing systems",
        "Advanced reporting and trend analysis"
    ],
    [
        "Rate the ease of use of our CMMS software based on the landing page information.",
        "Difficult",
        "Neutral",
        "Easy",
        "Very easy"
    ],
    [
        "What specific features or aspects of the interface are appealing to you?",
        "Intuitive navigation",
        "Clean and modern design",
        "Clearly labeled icons and buttons",
        "Quick access to essential functions"
    ],
    [
        "Is there any element of the user interface that you find confusing or challenging?",
        "Menu organization",
        "Terminology used",
        "Access to help/documentation",
        "Customization options"
    ],
    [
        "How important is integration with existing systems (e.g., ERP, EAM) for your organization when choosing a CMMS solution?",
        "Not important",
        "Somewhat important",
        "Very important",
        "Extremely important"
    ],
    [
        "Do you anticipate scaling your operations in the near future? If so, what scalability features are crucial for your organization?",
        "Ability to handle a growing number of assets",
        "Multi-site support and management",
        "Scalable pricing based on usage",
        "Flexible permissions and access control"
    ]
]