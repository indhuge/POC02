import Head from 'next/head'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
	return <><Component {...pageProps} /><Head><title>IndHUGE</title></Head></>


}
