const comentario = require("../sequelize/models/comentario");
const usuario = require("../sequelize/models/usuario");

async function getComentarios(n) {
    let lista = []
    const teste = await comentario.findAll({ where: { idPost: n } });
    for (let i = 0; i < teste.length; i++) {
        lista[i] = JSON.stringify(teste[i].dataValues);
    }
    //lista = JSON.stringify(teste[0].dataValues);
    return lista;
}

/*
(async function getUsuario(n) {
    const teste = await usuario.findByPk(n);
    return teste.dataValues.nome;
})()
*/
export default async function Gerador(req, res) {
    if(req.method === "GET"){
        const {id_Post} = req.query;
        console.log(id_Post)
        const ret = await comentario.findAll({ where: { idPost: id_Post } });
        res.status(200).json(ret);
    }
    
}

