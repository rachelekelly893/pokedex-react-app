import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import NavBar from './components/NavBar';
import { getAllPokemon, getPokemon } from './services/pokemon.js';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import MenuIcon from '../src/images/580b57fcd9996e24bc43c31f.png';

const BorderLinearProgress = withStyles((theme) => ({
	root: {
		height: 20,
		borderRadius: 5
	},
	colorPrimary: {
		backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700]
	},
	bar: {
		borderRadius: 5,
		backgroundColor: '#1a90ff'
	}
}))(LinearProgress);

function App() {
	const [ pokemonData, setPokemonData ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	const initialUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';

	const loadingPokemon = async (data) => {
		let _pokemonData = await Promise.all(
			data.map(async (pokemon) => {
				let pokemonRecord = await getPokemon(pokemon.url);
				return pokemonRecord;
			})
		);
		setPokemonData(_pokemonData);
	};

	const [ filter, setFilter ] = useState('');

	const handleSearchChange = (e) => {
		setFilter(e.target.value);
	};

	useEffect(() => {
		async function fetchData() {
			let response = await getAllPokemon(initialUrl);
			await loadingPokemon(response.results);
			setLoading(false);
		}
		fetchData();
	}, []);

	return (
		<div>
			{loading ? (
				<div>
					<BorderLinearProgress color="secondary" />
					<h2>CATCHING POKEMON...</h2>
					<img src={MenuIcon} height="200em" alt="pokeball" id="pokelogo" />
				</div>
			) : (
				<div className="page-content">
					<NavBar filter={filter} setFilter={setFilter} handleSearchChange={handleSearchChange} />

					<div className="grid-container">
						{pokemonData.map((pokemon, i) => {
							return pokemon.name.includes(filter) && <Card key={i} pokemon={pokemon} />;
						})}
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
