import Link from "next/link";
import Styles from "./style.module.scss"
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.GrupoBlogSlice} GrupoBlogSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GrupoBlogSlice>} GrupoBlogProps
 * @param {GrupoBlogProps}
 */
const GrupoBlog = ({ slice }) => {
    return (
        <section
            data-slice-type={slice?.slice_type}
            data-slice-variation={slice?.variation}
        >
            <div className={Styles.container} id={slice?.primary?.idgrupo}>
                <h2><span>{slice?.primary?.titulogrupo}</span></h2>
                <div className={Styles.posts} style={{["grid-template-columns"]: "repeat("+slice.items.length+", 1fr )"}}>
                    {slice.items.map((i, index) => {
                        return (
                            <PrismicNextLink href={i?.link ?? ''} className={Styles?.item} key={index}>
                                <PrismicNextImage field={i?.imagem} />
                                <h3>{i?.titulopost}</h3>
                            </PrismicNextLink>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default GrupoBlog;
