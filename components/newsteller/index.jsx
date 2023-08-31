import Styles from "./style.module.scss";
import { useState } from "react";

async function register(_email) {
    const res = await fetch("/api/mailchimp", {
        body: JSON.stringify({
            email: _email,
        }),
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
    });

    const { error } = await res.json();
    if (error) console.log(error);

}

export default function Newsletter() {
    let state = useState({
        email: ""
    });

    let onEmailChaged = (e) => {
        let upEmail = e.target.value;
        state.email = upEmail;
    };

    let submit = async (e) => {
        e.preventDefault();
        console.log(state.email);
        register(state.email);
        state.email = "";
    };

    return (
        <div className={Styles.container}>
            <h1>Inscreva-se em nosso Newsteller!</h1>
            <form onSubmit={submit}>
                <input
                    type="email"
                    name="email"
                    placeholder=" Insira seu email"
                    value={state.email}
                    onChange={onEmailChaged}
                    required
                />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}