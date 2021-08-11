// https://bluuweb.github.io/vue-udemy/01-fundamentos/
// const numero = (num1, num2 = 10) =>
//   `los numeros ${num1} y ${num2} suman ${num1 + num2}`;
// const resultado = numero(69,96);
// console.log(resultado);

const postData = async function (url = "", data = {}) {
	const response = await fetch(url, {
	method: "GET", // *GET, POST, PUT, DELETE, etc.
	mode: "cors", // no-cors, *cors, same-origin
	cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
	credentials: "same-origin", // include, *same-origin, omit
	headers: {
		"Content-Type": "application/json" // 'application/x-www-form-urlencoded',
	},
	redirect: "follow", // manual, *follow, error
	referrerPolicy: "no-referrer" // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
	//body: JSON.stringify(data) // body data type must match "Content-Type" header
	})
	// return response.json(); // parses JSON response into native JavaScript objects
	return response;
}

postData("https://pokeapi.co/api/v2/pokemon/", { answer: 42 })
	.then(res => res.json())
	.then(data => {
		console.log('postData function starts here . . .');
		data.results.forEach((element) => {
			console.log(element.name)
		});
		console.log('postData function ends here / / /');
	})
	.catch(error => console.log(error));

(
	async () => {
		try {
			const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
			const data = await res.json();
			const arrayPokemons = data.results.map((element) => element.name);
			const arrayPokemons2 = data.results.filter(
				(element) => element.name !== "bulbasaur"
			);
			console.log('auto invoke function');
			console.log(arrayPokemons);
			// console.log(arrayPokemons2);
		} catch (error) {
			console.log(error);
		}
	}
)()

const puppeteer = () => {
	console.log('fetching data . . .');
	fetch('http://puppeteer.leovidal.es/data')
		.then(res => res.json())
		.then(data => console.log(data))
		.catch(err => console.log(err))
}

puppeteer()



