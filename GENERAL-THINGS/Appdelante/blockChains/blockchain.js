const SHA256 = require('crypto-js/sha256');
const _dificultad = 4;

function calcularHash(block) {
	return SHA256(
		block.index +
		block.timestamp +
		block.hashAnterior +
		JSON.stringify(block.data) +
		block.nonce
	).toString()
}

class Block {
	constructor(index, timestamp, data, hashAnterior = '') {
		this.index = index;
		this.hashAnterior = hashAnterior;
		this.timestamp = timestamp;
		this.data = data;
		this.nonce = 0;
		this.hash = calcularHash(this);
	}

	minarBloque(dificultad) {
		let begin = Date.now();

		if(!this.hash) this.hash = calcularHash(this);
		while (this.hash.substring(0, dificultad) !== Array(dificultad + 1).join('0')) {
			this.nonce++;
			this.hash = calcularHash(this);
		}
		let end = Date.now();
		let timeSpent = (end - begin) / 1000 + 'secs';
		console.log(`Bloque ${this.index} minado después de ${this.nonce.toLocaleString('en')} iteraciones en ${timeSpent}`)
	}
}

class Blockchain {
	constructor() {
		const genesisBlock = new Block(0, new Date().getTime(), 'Bloque Genesis', null)
		genesisBlock.minarBloque(_dificultad);
		this.chain = [genesisBlock]
	}

	getUltimoBloque() {
		return this.chain[this.chain.length -1];
	}
	crearNuevoBloque(data) {
		const ultimoBloque = this.getUltimoBloque();
		const nuevoBloque = new Block(ultimoBloque.index + 1, new Date().getTime(), data, ultimoBloque.hash);
		nuevoBloque.minarBloque(_dificultad);
		this.agregarBloque(nuevoBloque);
	}

	agregarBloque(nuevoBloque) {
		const ultimoBloque = this.getUltimoBloque();
		if(ultimoBloque.index + 1 !== nuevoBloque.index) {
			console.log('Indice no valido!');
		} else if (nuevoBloque.hashAnterior !== ultimoBloque.hash) {
			console.log('Hash anterior no corresponde');
		} else if (nuevoBloque.hash !== calcularHash(nuevoBloque)) {
			console.log('No minaste el bloque apropiadamente');
		} else {
			this.chain.push(nuevoBloque)
		}
	}

	imprimir() {
		this.chain.forEach((block) => console.log(`${JSON.stringify(block)} \n`))
	}
}

const blockchain = new Blockchain(); // creating the genesis block

blockchain.crearNuevoBloque({de: 'ricardo',  a: 'diego',   cantidad: 1});
blockchain.crearNuevoBloque({de: 'leonardo', a: 'lydia',   cantidad: 3});
blockchain.crearNuevoBloque({de: 'lydia',    a: 'ricardo', cantidad: 7});
blockchain.crearNuevoBloque({de: 'ricardo',  a: 'diego',   cantidad: 1});
blockchain.crearNuevoBloque({de: 'leonardo', a: 'lydia',   cantidad: 3});
blockchain.crearNuevoBloque({de: 'alex',     a: 'monica',  cantidad: 3});
blockchain.crearNuevoBloque({de: 'fernando', a: 'jenny',   cantidad: 4});
blockchain.crearNuevoBloque({de: 'jenny',    a: 'lily',    cantidad: 1});

// const blockHackeado = new Block(4, new Date().getTime(), {de: 'ricardo', a: 'leonardo', cantidad: 7}, blockchain.getUltimoBloque().hash);
// console.log('hash', blockHackeado.hash);
// blockHackeado.hash = '00f0ref09erjf09erjf0e9rjf09er'
// blockchain.agregarBloque(blockHackeado);

blockchain.imprimir();