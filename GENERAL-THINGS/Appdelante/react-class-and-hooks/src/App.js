import logo from './logo.svg';
import './App.css';
import CoordenatesClass from './coordenates-class';
import CoordenatesHooks1 from './coordenates-hooks-v1';
import CoordenatesHooks2 from './coordenates-hooks-v2';
import GetDataHooks from './get-data-fetch';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h4>Coordenates using React Class Component</h4>
				<CoordenatesClass />
				<h4>Coordenates using React Hooks version 1</h4>
				<CoordenatesHooks1 name="Leonardo" />
				<h4>Coordenates using React Hooks version 2</h4>
				<CoordenatesHooks2 />
				<p>-----------------------------</p>
				<GetDataHooks />
			</header>
		</div>
	);
}

export default App;
