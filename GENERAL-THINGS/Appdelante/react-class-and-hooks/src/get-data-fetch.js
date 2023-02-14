import React, { useState, useEffect } from "react";

function GetData(url) {
	const [data, setData] = useState({
		data: null,
		count: null
	});

	useEffect(() => {
		fetch(url)
			.then(res => res.json())
			.then(data => {
				setData({
					data: data.results,
					count: data.count
				})
			})
	}, [])	/* <---- this empty array as second parameter tells useEffect to be excecuted only once unless a state varialbe is indicated */

	return data;
}

export default function GetDataHooks() {
	const {data, count} = GetData('https://pokeapi.co/api/v2/pokemon/');

	return count == null ?
		(
			<div>Retrieving data...</div>
		) :
		(
			<div>
				<p>count: {count}</p>
				<p>name: {data[2].name}</p>
				<p>{JSON.stringify(data)}</p>
			</div>
		)
}