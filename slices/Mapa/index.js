/**
 * @typedef {import("@prismicio/client").Content.MapaSlice} MapaSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MapaSlice>} MapaProps
 * @param {MapaProps}
 */

import Styles from "./style.module.scss"
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('/components/Map'), { ssr: false })
const Mapa = ({ slice }) => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <>
                <div className={Styles.containerMapa}>
                    <div className={Styles.textoMapa}>
                        <label>{slice?.primary?.textomapa}</label>
                    </div>
                    <div className={Styles.mapa}>
                        <Map dados={slice?.items} />
                    </div>
                </div>
            </>
        </section>
    );
};

export default Mapa;
