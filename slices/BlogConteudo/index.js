import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Styles from "./style.module.scss"

/**
 * @typedef {import("@prismicio/client").Content.BlogConteudoSlice} BlogConteudoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogConteudoSlice>} BlogConteudoProps
 * @param {BlogConteudoProps}
 */

const BlogConteudo = ({ slice }) => {
    return (
        <section
            data-slice-type={slice?.slice_type}
            data-slice-variation={slice?.variation}
        >
            {slice.items.map((i, index) => {
                return (
                    <div className={Styles.container} key={index}>
                        {slice?.variation === "default" && (
                            <div className={Styles?.texto}>
                                <PrismicRichText field={slice?.primary?.texto}/>
                            </div>
                        )}
                        {slice.variation === "imagem" && (
                            <div className={Styles?.imagem}>
                                <PrismicNextImage field={slice?.primary?.imagem}/>
                            </div>
                        )}
                        {slice.variation === "iFrame" && (
                            <div className={Styles?.frame}>
                                <div dangerouslySetInnerHTML={{ __html: slice?.primary?.frame?.html }}/>
                            </div>
                        )}
                    </div>
                );
            })}
        </section >
    );
};

export default BlogConteudo;
