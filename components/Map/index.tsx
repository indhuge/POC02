import React, { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

async function coordenadas(cidade, estado) {
	const r1 = await fetch("https://geocode.maps.co/search?city=" + cidade + "&state=" + estado);
	const r2 = await r1.json();
	return r2;
}


async function arraymarkers(dados) {
	var array = []
	dados.dados.map((i) => {
		const ret = coordenadas(i?.cidade, i?.estado).then(n => {
			array.push({
				"cidade": i?.cidade,
				"estado": i?.estado,
				"lat": n[0]?.lat,
				"lon": n[0]?.lon
			})
		});
	})
	return array;
}

const Map = (dados) => {

	const [markers, setMarkers] = useState([]);
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const carrega = async () => {
			const res = await arraymarkers(dados);
			setMarkers(res);
			setTimeout(() => { setLoading(false) }, 3000)
		}
		carrega();
	}, [dados])

	if (loading) {
		return <>Carregando...</>
	}

	if (!loading) {
		console.log(markers);

		return (
			<MapContainer center={[-10.0566, -55.2139]} zoom={4} style={{ height: '100%', width: '100%' }} attributionControl={false}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{
					markers.map((i, index) => {
						console.log(i)
						return (

							<Marker key={index} position={[i?.lat, i?.lon]}>
								<Popup>
									<h5>{i?.cidade}, {i?.estado}</h5>
								</Popup>
							</Marker>
						)
					})
				}

				{
				/*
					<Marker position={[-25.7346, -53.0585]}>
						<Popup>
							<h5>Dois Vizinhos - PR</h5>
						</Popup>
					</Marker>

					<Marker position={[-12.5587, -55.7141]}>
						<Popup>
							<h5>Sorriso - MT</h5>
						</Popup>
					</Marker>

					<Marker position={[-10.1689, -48.3317]}>
						<Popup>
							<h5>Palmas - TO</h5>
						</Popup>
					</Marker>

					<Marker position={[-25.3935, -51.4562]}>
						<Popup>
							<h5>Guarapuava - PR</h5>
						</Popup>
					</Marker>

					<Marker position={[-23.5515, -51.4614]}>
						<Popup>
							<h5>Apucarana - PR</h5>
						</Popup>
					</Marker>

					<Marker position={[-25.5307, -49.1958]}>
						<Popup>
							<h5>São José dos Pinhais - PR</h5>
						</Popup>
					</Marker>

					<Marker position={[-26.8831, -52.4]}>
						<Popup>
							<h5>Xanxerê - SC</h5>
						</Popup>
					</Marker>

					<Marker position={[-26.2511, -49.3802]}>
						<Popup>
							<h5>São Bento do Sul - SC</h5>
						</Popup>
					</Marker>

					<Marker position={[-29.1678, -51.1794]}>
						<Popup>
							<h5>Caxias do Sul - RS</h5>
						</Popup>
					</Marker>

					<Marker position={[-29.6914, -53.8008]}>
						<Popup>
							<h5>Santa Maria - RS</h5>
						</Popup>
					</Marker>

					<Marker position={[-12.2733, -38.9556]}>
						<Popup>
							<h5>Feira de Santana - BA</h5>
						</Popup>
					</Marker>
				*/
				}
			</MapContainer>
		)
	}
}

export default Map
