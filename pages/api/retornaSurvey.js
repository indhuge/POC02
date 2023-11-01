const modelSurvey = require("./sequelize/models/survey-resp");

async function adicionarResp(resp) {
    const result = await modelSurvey.create({
        resp: resp
    });
    return result;
}

export default async function adicionar(req, res) {
    if (req.method === "POST") {
        const resp = req.body;

        adicionarResp(resp);
        //res.status(200).json({ ok: conteudo });
    }
}