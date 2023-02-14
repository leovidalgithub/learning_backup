import { useState, useEffect } from "react";

export default function CoordenatesHooks2() {
	const [coordenates, setCoordenates] = useState({
		latitud: null,
		longitud: null
	});

	let geoId;

	useEffect(() => {
		geoId = window.navigator.geolocation.watchPosition(position => {
			setCoordenates({
				latitud: position.coords.latitude,
				longitud: position.coords.longitude
			})
		});

		return () => { /* <--- this return is excecuted when the Component is disposed, similar to "componentWillUnmount()" */
			navigator.geolocation.clearWatch(geoId);
		}
	}, []) /* <---- this empty array as second parameter tells useEffect to be excecuted only once unless a state varialbe is indicated */

	return coordenates.latitud == null ?
		(
			<div>Cargando...</div>
		) :
		(
			<div>
				<h4>Latitud: {coordenates.latitud}</h4>
				<h4>Longitud: {coordenates.longitud}</h4>
			</div>
		)
}


