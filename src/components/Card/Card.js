import React, {useState} from "react";
import "./style.css"
import pokemonType from "../../helpers/pokemonTypes.js"
import { Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DetailsDialog from '../DetailsDialog/DetailsDialog';

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
            <p>#{String(pokemon.id).padStart(3, '0')}</p>
            </div>
            <div className="Card__img">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            <div className="Card__name">
                <h3>{pokemon.name}</h3>
            </div>
            <div className="Card__types">
                {pokemon.types.map(type => {
                    return (
                        <div 
                        className="Card__type" 
                        style={{backgroundColor: pokemonType[type.type.name]}}>
                            <p>{type.type.name}</p>
                        </div>
                    )
                })}
            </div>
            <div className="Card__info">
                <Box display="flex" justifyContent="center">
                    <Button 
                    variant="contained"
                        color="secondary"
                        className={classes.button} 
                        onClick={handleClickOpen}>View Card
                    </Button>
                    <DetailsDialog 
                        selecetedValue={selectedValue}
                        pokemon={pokemon}
                        open={open}
                        onClose={handleClose}/>
                </Box>
            </div>
        </div>
    )
}

export default Card