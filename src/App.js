import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import NavBar from './components/NavBar';
import { getAllPokemon, getPokemon } from './services/pokemon.js';
import './App.css';
import Loading from './components/Loading/Loading'




// APP
function App() {

	// RETRIEVE POKEMON DATA FROM API
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
	const [ hasName, setHasName ] = useState(false)
	const [ hasType, setHasType ] = useState(false)
	
	// FILTER BY NAME (then type)
	const handleNameChange = (e) => {
		let name = e.target.value;
		filterName(name);
		if (name !== '') {
			setHasName(true)
		}
	};

	const filterName = (name) => {
		setNameFilter(name);
		let nameFiltered = pokemonData.filter((poke) => poke.name.toLowerCase().includes(name.toLowerCase()));
		let typeNameFiltered = nameFiltered.filter((poke) => 
			poke.types[1] ? 
			poke.types[0].type.name.includes(typeFilter) || poke.types[1].type.name.includes(typeFilter) : 
			poke.types[0].type.name.includes(typeFilter))
				hasType ? setFilteredPokemon(typeNameFiltered) : setFilteredPokemon(nameFiltered)
	};

	// FILTER BY TYPE (then name)
	const handleTypeChange = (e) => {
		let type = e.target.value;
		filterType(type);
		if (type !== '') {
			setHasType(true)
		}
	};

	const filterType = (type) => {
		setTypeFilter(type);
		let typeFiltered = pokemonData.filter((poke) => 
			poke.types[1] ? 
			poke.types[0].type.name.includes(type) || poke.types[1].type.name.includes(type) : 
			poke.types[0].type.name.includes(type));
			let nameTypeFiltered = typeFiltered.filter((poke) => poke.name.toLowerCase().includes(nameFilter.toLowerCase()));
			hasName ? setFilteredPokemon(nameTypeFiltered) : setFilteredPokemon(typeFiltered)
	}

	// RENDER
	return (
		<div>
			{loading ? (
				<Loading/>
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
