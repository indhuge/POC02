/**
 * @typedef {import("@prismicio/client").Content.CorpoSlice} CorpoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CorpoSlice>} CorpoProps
 * @param {CorpoProps}
 */

import Styles from "./style.module.scss"
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

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
										<a>{i.frase}</a>							
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
