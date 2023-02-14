import React, { Component } from "react";

export default class CoordenatesClass extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		latitud: null,
	// 		longitud: null
	// 	}
	// }

	state = {
		latitud: null,
		longitud: null
	}

	componentDidMount() {
		this.geoID = window.navigator.geolocation.watchPosition(position => {
			this.setState({
				latitud: position.coords.latitude,
				longitud: position.coords.longitude
			})
		})
	}

	componentWillUnmount() {
		navigator.geolocation.clearWatch(this.geoID);
	}

	render() {
		return this.state.latitud == null ?
		(
			<div>Cargando...</div>
		) :
		(
			<div>
				<h4>Latitud: {this.state.latitud}</h4>
				<h4>Longitud: {this.state.longitud}</h4>
			</div>
		)
	}
}
