import React, {useState} from "react";
import "./style.css"
import pokemonType from "../../helpers/pokemonTypes.js"
import { Button, Dialog, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props

    const handleClose = () => {
        onClose(selectedValue)
    }

    return (
        <Dialog
        onClose={handleClose}
        open={open}
        >
            Stuff about the pokemon
        </Dialog>
    )
}


function Card({pokemon}) {

    const classes = useStyles();

    const [open, setOpen ] = useState(false)
    const [selectedValue, setSelectedValue] = useState("");

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = (value) => {
        setOpen(false)
        setSelectedValue(value)
    }

    return (
        <div className="Card">
            <div className="Card__no">
            #{String(pokemon.id).padStart(3, '0')}
            </div>
            <div className="Card__img">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            <div className="Card__name">
                {pokemon.name}
            </div>
            <div className="Card__types">
                {pokemon.types.map(type => {
                    return (
                        <div 
                        className="Card__type" 
                        style={{backgroundColor: pokemonType[type.type.name]}}>
                            {type.type.name}
                        </div>
                    )
                })}
            </div>
            <div className="Card__info">
                <div className="Card__data Card__data--weight">
                    <p className="title">Weight</p>
                    <p>{pokemon.weight}</p>
                </div>
                <div className="Card__data Card__data--height">
                    <p className="title">Height</p>
                    <p>{pokemon.height}</p>
                </div>
                <div className="Card__data Card__data--ability">
                    <p className="title">Ability</p>
                    <p>{pokemon.abilities[0].ability.name}</p>
                </div>
                <Box display="flex" justifyContent="center">
                    <Button 
                    variant="contained"
                        color="secondary"
                        className={classes.button} 
                        onClick={handleClickOpen}>More Info
                    </Button>
                    <SimpleDialog 
                        selectedPokemon={selectedValue}
                        open={open}
                        onClose={handleClose}/>
                </Box>
            </div>
        </div>
    )
}

export default Card