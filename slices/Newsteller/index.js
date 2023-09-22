/**
 * @typedef {import("@prismicio/client").Content.NewstellerSlice} NewstellerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NewstellerSlice>} NewstellerProps
 * @param {NewstellerProps}
 */

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

const Newsteller = ({ slice }) => {
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
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<div 
				className={Styles.container}
				style={{ ["backgroundColor"]: slice.primary.cor }}
			>
				<h2>{slice.primary.titulo}</h2>
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
		</section>
	);
};

export default Newsteller;
