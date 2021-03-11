import React, {useState, useEffect} from "react";
import Card from "./components/Card"
import NavBar from "./components/NavBar"
import { getAllPokemon, getPokemon } from './services/pokemon.js';
import './App.css';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import LinearProgress from '@material-ui/core/LinearProgress';




const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    root: {
        '& > *': {
          marginTop: theme.spacing(2),
        },
      },
  }));

  const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 20,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

function App() {
    const [ pokemonData, setPokemonData ] = useState([])
    const [ nextUrl, setNextUrl ] = useState("")
    const [ prevUrl, setPrevUrl ] = useState("")
    const [ loading, setLoading ] = useState(true)
    const initialUrl = "https://pokeapi.co/api/v2/pokemon"
    const [filter, setFilter] = useState("");
    const classes = useStyles();

    const handleSearchChange = (e) => {
        setFilter(e.target.value);
      };

    useEffect(() => {
        async function fetchData() {
            let response = await getAllPokemon(initialUrl);
            setNextUrl(response.next);
            setPrevUrl(response.previous);
            await loadingPokemon(response.results);
            setLoading(false);
        }
        fetchData();
    }, []);

    const next = async () => {
        setLoading(true);
        let data = await getAllPokemon(nextUrl);
        await loadingPokemon(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setLoading(false);
    }

    const prev = async () => {
        if(!prevUrl) return;
        setLoading(true);
        let data = await getAllPokemon(prevUrl);
        await loadingPokemon(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setLoading(false);
    }

    const loadingPokemon = async (data) => {
        let _pokemonData = await Promise.all(data.map(async pokemon => {
            let pokemonRecord = await getPokemon(pokemon.url)
            return pokemonRecord
        }))
        setPokemonData(_pokemonData)
    }

    return (
        <div>
            {
             loading ? 
             <div>
                <BorderLinearProgress color="secondary" />
                <h2>CATCHING POKEMON...</h2>
                </div>
                :(
                <>
                <NavBar filter={filter} setFilter={setFilter} handleSearchChange={handleSearchChange}/>
                <div className="btn">
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<ArrowBackIcon />}
                    onClick={prev}
                >
                    Prev
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<ArrowForwardIcon />}
                    onClick={next}
                >
                    Next
                </Button>
                </div>
                <div className="grid-container">
                {pokemonData.map((pokemon,i) => 
                { 
                    if (pokemon.name.includes(filter)) {
                    return <Card key={i} pokemon={pokemon}/>}
                })}
                </div>
                <div className="btn">
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<ArrowBackIcon />}
                    onClick={prev}
                >
                    Prev
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<ArrowForwardIcon />}
                    onClick={next}
                >
                    Next
                </Button>
                </div>
                </>
             )
            }
        </div>
    );
}

export default App