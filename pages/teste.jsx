import { useEffect, useState } from "react";

async function fetchComments() {
    const resp = await fetch(`./api/usuario`, {});
    const j = await resp.json();
    return j;
}

export default function Teste() {
    const [usuarios, setUsuarios] = useState([]);
    const state = useState({
        usuario: "",
    });

    useEffect(() => {
        fetchComments().then((j) => {
            setUsuarios(j);
        });
    }, []);

    console.log(usuarios);
}