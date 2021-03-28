import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import { getAllPokemon, getPokemon } from './services/pokemon.js';
import './App.css';
import Loading from './components/Loading/Loading'
import Pokemon from './components/Pokemon/Pokemon';
import BasicPagination from './components/BasicPagination/BasicPagination'


// APP
function App() {

	// RETRIEVE POKEMON DATA FROM API
	const [ pokemonData, setPokemonData ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	const initialUrl = 'https://pokeapi.co/api/v2/pokemon?limit=898';
	

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
	const [ isSorted, setIsSorted ] = useState(false)
	
	// FILTER BY NAME
	const handleNameChange = (e) => {
		let name = e.target.value;
		filterName(name);
		if (name !== '') {
			setHasName(true)
		}
	};

	const filterName = (name) => {
		setNameFilter(name);
		let nameFiltered = pokemonData.filter((poke) => (poke !== undefined) && poke.name.toLowerCase().includes(name.toLowerCase()));
		let typeNameFiltered = nameFiltered.filter((poke) => 
			poke.types[1] ? 
			poke.types[0].type.name.includes(typeFilter) || poke.types[1].type.name.includes(typeFilter) : 
			poke.types[0].type.name.includes(typeFilter))
				hasType ? setFilteredPokemon(typeNameFiltered) : setFilteredPokemon(nameFiltered)
	};

	// FILTER BY TYPE
	const handleTypeChange = (e) => {
		let type = e.target.value;
		filterType(type);
		if (type !== '') {
			setHasType(true)
		}
	};

	const filterType = (type) => {
		setTypeFilter(type);
		let typeFiltered = pokemonData.filter((poke) => (poke !== undefined) && 
			(poke.types[1] ? 
			poke.types[0].type.name.includes(type) || poke.types[1].type.name.includes(type) : 
			poke.types[0].type.name.includes(type)))
			let nameTypeFiltered = typeFiltered.filter((poke) => poke.name.toLowerCase().includes(nameFilter.toLowerCase()));
			hasName ? setFilteredPokemon(nameTypeFiltered) : setFilteredPokemon(typeFiltered)
	}

	// SortBy
	const handleSortChange = (e) => {
		console.log(e.target.value);
		let sortBy = e.target.value;
		sortPokemon(sortBy)
		if (sortBy !== '') {
			setIsSorted(true)
		}
		
	};

	const sortPokemon = (sortBy) => {
		let sortCriteria;
		if (sortBy === 'ID') {
			sortCriteria = (a, b) => a.id > b.id ? 1 : -1;
			}
		else if (sortBy === 'name') {
			sortCriteria = (a, b) => a.name > b.name ? 1 : -1;
		}
		else if (sortBy === 'type') {
			sortCriteria = (a, b) => a.types[0].type.name > b.types[0].type.name ? 1 : -1;
		}
		else if (sortBy === 'HP') {
			sortCriteria = (a, b) => a.stats[0].base_stat < b.stats[0].base_stat ? 1 : -1;
		}
		else if (sortBy === 'attack') {
			sortCriteria = (a, b) => a.stats[1].base_stat < b.stats[1].base_stat ? 1 : -1;
		}
		else if (sortBy === 'defense') {
			sortCriteria = (a, b) => a.stats[2].base_stat < b.stats[2].base_stat ? 1 : -1;
		}
		else if (sortBy === 'specialAttack') {
			sortCriteria = (a, b) => a.stats[3].base_stat < b.stats[3].base_stat ? 1 : -1;
		}
		else if (sortBy === 'specialDefense') {
			sortCriteria = (a, b) => a.stats[4].base_stat < b.stats[4].base_stat ? 1 : -1;
		}
		else if (sortBy === 'speed') {
			sortCriteria = (a, b) => a.stats[5].base_stat < b.stats[5].base_stat ? 1 : -1;
		}
		setFilteredPokemon((poke)=>[...poke.sort(sortCriteria)])
		console.log(filteredPokemon)
	}

	// PAGINATION
	const [currentPage, setCurrentPage] = useState(1);
  	const [pokemonPerPage] = useState(20);
	const indexOfLastPokemon = currentPage * pokemonPerPage;
  	const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  	const currentPokemon = filteredPokemon.slice(indexOfFirstPokemon, indexOfLastPokemon);
	
	const handlePageChange = (event, value) => {
		setCurrentPage(value);
	};

	// RENDER
	return (
			<div className="page-content">
				<NavBar 
				nameFilter={nameFilter} 
				setNameFilter={setNameFilter} 
				handleNameChange={handleNameChange} 
				typeFilter ={typeFilter} setTypeFilter={setTypeFilter} 
				handleTypeChange={handleTypeChange}
				handleSortChange={handleSortChange}/>
			{loading ? (
				<Loading/>
			) : (
				<div>
					<BasicPagination
						pokemonPerPage={pokemonPerPage}
						totalPokemon={filteredPokemon.length}
						handlePageChange={handlePageChange}
						currentPage={currentPage}
					/>
					<Pokemon pokemon={currentPokemon} loading={loading} />
					<BasicPagination
						pokemonPerPage={pokemonPerPage}
						totalPokemon={filteredPokemon.length}
						handlePageChange={handlePageChange}
						currentPage={currentPage}
					/>
				</div>
			)}
		
		</div>
	);
}

export default App;
