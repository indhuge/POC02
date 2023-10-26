/**
 * @typedef {import("@prismicio/client").Content.CorpoSlice} CorpoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CorpoSlice>} CorpoProps
 * @param {CorpoProps}
 * 
 */

import Styles from "./style.module.scss"
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";
import React from 'react';
import { PopupWidget } from 'react-calendly';
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('/components/Map'), { ssr: false })
const Corpo = ({ slice }) => {
	let t = 0;
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			{slice.items.map((i, index) => {
				return (
					<div className={Styles.container} key={index}>
						<div 
							className={Styles.item}
							id="clientes" 
							style={{["backgroundColor"]: i.cor}}
						>
							<h2>{i.titulo}</h2>
							{slice.variation === "imagens" && (
								<>
									<div className={Styles.imagens}>
										<div><PrismicNextImage field={i.img1}/></div>
										<div><PrismicNextImage field={i.img2}/></div>
										<div><PrismicNextImage field={i.img3}/></div>
									</div>
									<div className={Styles.botao}>
										<button id="botao"><Link href="https://www.youtube.com/"><label>VER MAIS</label></Link></button>
									</div>
								</>
							)}
							{slice.variation === "iFrame" && (
								<>
									<div className={Styles.frame}>
										<div dangerouslySetInnerHTML={{ __html: i.incorporado.html }}/>
									</div>
								</>
							)}
							{slice.variation === "gatilhossociais" && (
								<>
									<div className={Styles.gs}>
										<h3>{i.numero}</h3>
										<label>{i.frase}</label>							
									</div>
								</>
							)}
							{slice.variation === "logos" && (
								<>
								<div className={Styles.logotitulo}>
								<h3>{i.titulologos}</h3>
								</div>
									<div className={Styles.logos}>
									<div ><PrismicNextImage field={i.logo1}/></div>
									<div ><PrismicNextImage field={i.logo2}/></div>
									<div ><PrismicNextImage field={i.logo3}/></div>
									<div ><PrismicNextImage field={i.logo4}/></div>
									<div ><PrismicNextImage field={i.logo5}/></div>							
									</div>
								</>
							)}
							{slice.variation === "depoimentos" && (
								<>
								<div className={Styles.depoimentos}>
									<div className={Styles.ItemDepoimento}>
										<div className={Styles.textoDepoimentos}><PrismicRichText field={i.depoimento_1} /></div>
										<div className={Styles.nomesDepoimentos}><PrismicRichText field={i.nome_1} /></div>
									</div>
									<div className={Styles.ItemDepoimento}>
										<div className={Styles.textoDepoimentos}><PrismicRichText field={i.depoimento_2} /></div>
										<div className={Styles.nomesDepoimentos}><PrismicRichText field={i.nome_2} /></div>

									</div>
									<div className={Styles.ItemDepoimento}>
										<div className={Styles.textoDepoimentos}><PrismicRichText field={i.depoimento_3} /></div>
										<div className={Styles.nomesDepoimentos}><PrismicRichText field={i.nome_3} /></div>
									</div>
								</div>
								</>
							)}
							{slice.variation === "agenda" && (
								<>
								<div className={Styles.agenda}>
								<button 
								className={Styles.botaoAgendar}
								onClick={() => Calendly.initPopupWidget({
           					 	url: 'https://meetings.hubspot.com/gabriela-hensel',
          						})}>
									<label>{i.linkagenda}</label>	
								</button>
								
								</div>
								</>
							)}
							{slice.variation === "botaoQuiz" && (
								<>
								<div className={Styles.quiz}>
									<h3 className={Styles.textoQuiz}>{i.tituloQuiz}</h3>
									<div className={Styles.botao1}>
									<button className={Styles.botaoQuiz}><a className={Styles.linkQuiz} href="/quizpage">{i.linkQuiz}</a></button>
									</div>
								</div>
								</>
							)}
						</div>
					</div>
				);
			})}
		</section>
	);
};

export default Corpo;
