import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { themeJson } from "./theme";
import { json } from "./json";
import { useRouter } from "next/navigation";

async function enviar(resp, router) {
    //resp = JSON.parse(resp);
    console.log(resp);

    /*resp.forEach(element => {
        
    });*/

    fetch("/api/retornaSurvey", {
        method: "POST",
        body: resp,
    });
    //router.push("/")
}

function SurveyComponent() {
    let data;
    const router = useRouter()
    const survey = new Model(json);
    survey.applyTheme(themeJson);
    survey.onComplete.add((sender, options) => {
        data = JSON.stringify(sender.data);
        console.log(sender.data);
        enviar(data, router);
    });
    return (<Survey model={survey} />);
}

export default SurveyComponent;