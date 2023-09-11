/**
 * @typedef {import("@prismicio/client").Content.FormularioSlice} FormularioSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FormularioSlice>} FormularioProps
 * @param {FormularioProps}
 */

import React, { useState } from 'react';
import axios from "axios";
import Styles from "./style.module.scss"

const Formulario = ({ slice }) => {

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        mensagem: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/send-email', formData);
            alert("Email enviado!")
        } catch (error) {
            alert("Erro!")
        }
    };

    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <div
                className={Styles.container}
                id="formulario"
                style={{ ["backgroundColor"]: slice.primary.cor }}
            >
                <form onSubmit={handleSubmit}>
                    <h2>{slice.primary.titulo}</h2>
                    <input type="text" name="nome" onChange={handleChange} placeholder=" NOME" required />
                    <input type="email" name="email" onChange={handleChange} placeholder=" EMAIL" required />
                    <input type="text" name="telefone" onChange={handleChange} placeholder=" TELEFONE" /*pattern="^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$"*/ required />
                    <textarea className={Styles.mensagem} name="mensagem" onChange={handleChange} placeholder=' MENSAGEM' required ></textarea>
                    <input type="submit" placeholder=" ENVIAR" />
                </form>
            </div>
        </section>
    );
};

export default Formulario;
