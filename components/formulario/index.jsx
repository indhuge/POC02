import React, { useState } from 'react';
import axios from "axios";
import Styles from "./style.module.scss"

const Formulario = () => {

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
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return <div className={Styles.container} id="formulario">
        <form onSubmit={handleSubmit}>
            <h2>ENTRE EM CONTATO E TRANSFORME A SUA PRODUÇÃO</h2>
            <input type="text" name="nome" onChange={handleChange} placeholder=" NOME" required />
            <input type="email" name="email" onChange={handleChange} placeholder=" EMAIL" required />
            <input type="text" name="telefone" onChange={handleChange} placeholder=" TELEFONE" pattern="^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$" required />
            <input type="text" name="mensagem" onChange={handleChange} className={Styles.msg} placeholder=" MENSAGEM" required />
            <input type="submit" placeholder=" ENVIAR" />
        </form>
    </div>
}

export default Formulario