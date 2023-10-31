const modelSurvey = require("./sequelize/models/survey-resp");

export default async function Gerador(req, res) {
    let dados = {
        "respostas": 0,
        "question1": {
            "item1": 0,
            "item2": 0,
            "item3": 0,
            "item4": 0,
        },
        "question2": {
            "item1": 0,
            "item2": 0,
            "item3": 0,
            "item4": 0,
        },
        "question3": {
            "item1": 0,
            "item2": 0,
            "item3": 0,
            "item4": 0,
        },
        "question4": {
            "item1": 0,
            "item2": 0,
            "item3": 0,
            "item4": 0,
        },
        "question5": {
            "item1": 0,
            "item2": 0,
            "item3": 0,
            "item4": 0,
        },
        "question6": {
            "item1": 0,
            "item2": 0,
            "item3": 0,
            "item4": 0,
        },
        "question7": {
            "item1": 0,
            "item2": 0,
            "item3": 0,
            "item4": 0,
        },
        "question8": {
            "item1": 0,
            "item2": 0,
            "item3": 0,
            "item4": 0,
        },
        "question9": {
            "item1": 0,
            "item2": 0,
            "item3": 0,
            "item4": 0,
        },
        "question10": {
            "item1": 0,
            "item2": 0,
            "item3": 0,
            "item4": 0,
        }
    }
    let reto = [{}];
    reto = await modelSurvey.findAll({attributes: ["resp"], plain:true});
    let ret = reto;


    console.log(ret.length)
    dados.respostas = ret.length;
    /*for (let index = 0; index < ret.length; index++) {
        for (let index2 = 0; index2 < 10; index2++) {
            console.log(ret2[index][index2]);
            for (let index3 = 0; index3 < 4; index3++)
                
                if (ret[index2].hasOwnProperty('item ' + (index3 + 1))) {
                    dados[index2][index3]++
                }
        }
    }
    */
    res.status(200).json(ret);
}