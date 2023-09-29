import { useEffect, useState } from "react";
import Styles from "./style.module.scss"
import { useRouter } from 'next/router';

async function fetchComentarios(id_Post) {
    const r1 = await fetch(`/api/geradorComentarios/${id_Post}`, { method: "GET", });
    const r2 = await r1.json();
    return r2;
}

async function adicionarComentario(usuario, conteudo, id_Post) {
    const comentario = {
        idUsuario: usuario,
        conteudo: conteudo,
        idPost: id_Post,
    };
    fetch("/api/adicionarComentario", {
        method: "POST",
        body: JSON.stringify(comentario),
    });
}

const Comentario = ({ idPost }) => {
    
    const router = useRouter();

    const [listaComentarios, setListaComentarios] = useState([]);
    const comentarioEscrito = useState({
        usuario: "",
        conteudo: "",
    });

    let alterarUsuario = (n) => {
        comentarioEscrito.usuario = n.target.value;
        console.log(comentarioEscrito.conteudo);
    };

    let alterarConteudo = (n) => {
        comentarioEscrito.conteudo = n.target.value;
        console.log(comentarioEscrito.conteudo);
    };

    let enviarComentario = (n) => {
        n.preventDefault();
        adicionarComentario(comentarioEscrito.usuario, comentarioEscrito.conteudo, idPost);
        comentarioEscrito.usuario = "";
        comentarioEscrito.conteudo = "";
        router.reload()
    };

    useEffect(() => {
        fetchComentarios(idPost).then((n) => { setListaComentarios(n); });
    }, []);

    console.log(listaComentarios);

    return (
        <div className={Styles.container}>
            <label className={Styles.titulo}>Comentarios</label>
            <form className={Styles.escrever} onSubmit={enviarComentario}>
                <div>
                    <label>Nome:</label>
                    <input type="text" placeholder="ex: João Silva" onChange={alterarUsuario} required></input>
                </div>
                <div>
                    <label>Comentario:</label>
                    <input type="text" placeholder="digite seu Comentário..." onChange={alterarConteudo} required></input>
                </div>
                <div className={Styles.botaoEnviar}><input type="submit" value="Enviar"></input></div>
            </form>
            {listaComentarios.map((c, index) => {
                return (
                    <div className={Styles.containerCard} key={index}>
                        <h4>{c?.idUsuario}</h4>
                        <p>{c?.conteudo}</p>
                    </div>
                );
            })}
        </div>
    );
}
export default Comentario;