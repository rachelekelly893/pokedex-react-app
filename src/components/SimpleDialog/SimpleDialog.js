import React from "react";
import pokemonType from "../../helpers/pokemonTypes.js"
import { Dialog } from '@material-ui/core';
import './style.css'
import StatChart from '../StatChart/StatChart'


function SimpleDialog(props) {
    const { onClose, selectedValue, open, pokemon } = props

    const handleClose = () => {
        onClose(selectedValue)
    }


    return (
        <Dialog
        fullWidth
        maxWidth="sm"
        onClose={handleClose}
        open={open}
        >
            <div className="Dialog">
                <div className="Card__no">
                    <p>#{String(pokemon.id).padStart(3, '0')}</p>
                </div>
                <div className="Card__img">
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
                <div className="Card__name">
                    <h1>{pokemon.name}</h1>
                </div>
                <div className="Card__data Card__data--weight">
                        <p className="title">Weight</p>
                        <p>{pokemon.weight}</p>
                    </div>
                    <div className="Card__data Card__data--height">
                        <p className="title">Height</p>
                        <p>{pokemon.height}</p>
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
                   <div className="Card__abilities Card__data--ability">
                   {pokemon.abilities.map(ability => {
                        return (
                            <div 
                            className="Card__ability" 
                            style={{backgroundColor: 'rgb(236, 88, 88)'}}>
                                 <p>{ability.ability.name}</p>
                            </div>
                        )
                    })}
                </div>
                    {/* <div className="Card__data Card__data--hp">
                        <p className="title">HP</p>
                        <p>{pokemon.stats[0].base_stat}</p>
                    </div> */}
                    <StatChart chartData={pokemon} /> 
            </div>
        </Dialog>
    )
}

export default SimpleDialog