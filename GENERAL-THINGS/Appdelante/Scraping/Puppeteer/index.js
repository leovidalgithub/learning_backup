const express = require('express');
const app = express();
const cors = require('cors');
const puppeteer = require('puppeteer');

const getData = async function(req, res) {
	try {
		const navegador = await puppeteer.launch(
			{
				headless: true,
				args: ['--no-sandbox'],
				'ignoreHTTPSErrors': true
			})
		const pagina = await navegador.newPage();
		await pagina.goto('https://www.marca.com/futbol/primera-division/clasificacion.html');
		// const html = await pagina.content();

		let data = await pagina.evaluate(() => {
			const q1 = document.querySelector('ue-table-ranking').shadowRoot;
			const q2 = q1.querySelector('ue-table-ranking-extended').shadowRoot;
			const q3 =  q2.querySelectorAll('.ue-c-table-ranking__team-name');

			const equipos = [
				...q2.querySelectorAll('.ue-c-table-ranking__team-name')
			].map(nodeEquipo => nodeEquipo.innerText);
			const puntos = [
				...q2.querySelectorAll('.ue-c-table-ranking__th.ue-table-ranking-extended.is-main')
			].map(nodePunto => nodePunto.nextElementSibling.innerText);
			return equipos.map((nodo, i) => ({equipo: nodo, puntos: puntos[i]}));
		})

		await navegador.close();
		res.json({data: data});

	} catch (e) {
		console.log('error');
		console.log(e);
		res.json(e);
	}
}

//app.use(cors());

app.get('/', function(req, res) {
	res.end('Hello Puppeteer');
});

app.get('/data', cors(), getData);

const server = app.listen(8080, function () {
	let host = server.address().address;
	let port = server.address().port;
	console.log(`Listening at port ${port} - host ${host}`);
})