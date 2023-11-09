const surveyResp = require("../api/sequelize/models/survey-resp");

export default async function Gerador(req, res) {
    const ret = await surveyResp.findAll();
    var retorno = [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ];
    let i = 0
    ret.map((n) => {
        if (n.resp.hasOwnProperty("question1")) {
            for (let j = 0; j < n.resp.question1.length; j++) {
                retorno[0][n.resp.question1[j]-1]++;
            }
        }
        if (n.resp.hasOwnProperty("question2")) {
            for (let j = 0; j < n.resp.question2.length; j++) {
                retorno[1][n.resp.question2[j]-1]++;
            }
        }
        if (n.resp.hasOwnProperty("question3")) {
            retorno[2][n.resp.question3-1]++;
        }
        if (n.resp.hasOwnProperty("question4")) {
            for (let j = 0; j < n.resp.question4.length; j++) {
                retorno[3][n.resp.question4[j]-1]++;
            }
            
        }
        if(n.resp.hasOwnProperty("question5")){
            let k = 1;
            for (let j = 0; j < n.resp.question5.length; j++) {
                retorno[4][n.resp.question5[j]-1] += k;
                k -= 0.25
            }
            k = 1;
        }
        if (n.resp.hasOwnProperty("question6")) {
            retorno[5][n.resp.question6-1]++;
        }
        if (n.resp.hasOwnProperty("question7")) {
            for (let j = 0; j < n.resp.question7.length; j++) {
                retorno[6][n.resp.question7[j]-1]++;
            }
        }
        if (n.resp.hasOwnProperty("question8")) {
            for (let j = 0; j < n.resp.question8.length; j++) {
                retorno[7][n.resp.question8[j]-1]++;
            }
        }
        if (n.resp.hasOwnProperty("question9")) {
            retorno[8][n.resp.question9-1]++;
        }
        if (n.resp.hasOwnProperty("question10")) {
            for (let j = 0; j < n.resp.question10.length; j++) {
                retorno[9][n.resp.question10[j]-1]++;
            }
        }
    })
    res.status(200).json(retorno);
}