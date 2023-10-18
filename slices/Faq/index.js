/**
 * @typedef {import("@prismicio/client").Content.FaqSlice} FaqSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FaqSlice>} FaqProps
 * @param {FaqProps}
 */

import React from 'react';
import Styles from "./style.module.scss"

const Faq = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.items.map((i, index) => {
				return (
          <div className={Styles.geral}>
					<div className={Styles.conteudo} key={index}>
							  <div className={Styles.pergunta}>
                    <label >{i.pergunta}</label>
                </div>
                <div className={Styles.resposta}>
                    <label>{i.resposta}</label>
                </div>
              </div>
              </div>
				);
			})}

    </section>
  );
};

export default Faq;
