import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import NavBar from './components/NavBar';
import TypeSelect from './components/TypeSelect/TypeSelect'
import { getAllPokemon, getPokemon } from './services/pokemon.js';
import './App.css';

import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import MenuIcon from '../src/images/580b57fcd9996e24bc43c31f.png';


// STYLES
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


// APP

function App() {

	// RETRIEVE POKEMON
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
		setFilteredPokemon(_pokemonData);
	};

	useEffect(() => {
		async function fetchData() {
			let response = await getAllPokemon(initialUrl);
			await loadingPokemon(response.results);
			setLoading(false);
		}
		fetchData();
	}, []);

	
	// FILTER POKEMON
	const [ nameFilter, setNameFilter ] = useState('');
	const [ filteredPokemon, setFilteredPokemon ] = useState([]);
	const [ typeFilter, setTypeFilter ] = useState('');
	// FILTER BY NAME
	const handleNameChange = (e) => {
		let name = e.target.value;
		filterName(name);
	};

	const filterName = (name) => {
		setNameFilter(name);
		let nameFiltered = pokemonData.filter((poke) => poke.name.toLowerCase().includes(name.toLowerCase()));
		setFilteredPokemon(nameFiltered)
	};
	// FILTER BY TYPE
	const handleTypeChange = (e) => {
		let type = e.target.value;
		filterType(type);
	};

	const filterType = (type) => {
		setTypeFilter(type);
		let typeFiltered = pokemonData.filter((poke) => 
			poke.types[1] ? 
			poke.types[0].type.name.includes(type) || poke.types[1].type.name.includes(type) : 
			poke.types[0].type.name.includes(type));
			setFilteredPokemon(typeFiltered)
	}

	// RENDER
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
					<NavBar nameFilter={nameFilter} setNameFilter={setNameFilter} handleNameChange={handleNameChange} typeFilter ={typeFilter} setTypeFilter={setTypeFilter} set handleTypeChange={handleTypeChange}/>
					<div className="grid-container">
						{filteredPokemon.map((pokemon, i) => {
							return <Card key={i} pokemon={pokemon} />;
						})}
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
