const modelComentario = require("../api/sequelize/models/comentario");

async function adicionarComentario(user, texto, id_Post) {
    const result = await modelComentario.create({
        idUsuario: user,
        conteudo: texto,
        idPost: id_Post,
    });
    return result;
}

export default async function adicionar(req, res) {
    if (req.method === "POST") {
        const { idUsuario, conteudo, idPost } = JSON.parse(req.body);

        adicionarComentario(idUsuario, conteudo, idPost);
        res.status(200).json({ ok: conteudo });
    }
}