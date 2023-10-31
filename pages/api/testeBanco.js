const comentario = require("./sequelize/models/comentario");
const survey_resp = require("./sequelize/models/survey-resp");

survey_resp.sync({force:true})
/*
(async () => {
    const teste = await comentario.findAll();
    console.log(JSON.stringify(teste[0].dataValues))
})()
*/
/*(async () => {
    var p = await usuario.findByPk(1);
    p.email = "Teste Email";
    const resultadoSave = await p.save();
    console.log(resultadoSave);
})();*/