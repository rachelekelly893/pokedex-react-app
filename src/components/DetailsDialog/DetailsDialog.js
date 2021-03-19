import React from 'react';
import pokemonType from '../../helpers/pokemonTypes.js';
import { Dialog } from '@material-ui/core';
import './style.css';
import StatChart from '../StatChart/StatChart';

function DetailsDialog(props) {
	const { onClose, selectedValue, open, pokemon } = props;

	const handleClose = () => {
		onClose(selectedValue);
	};

	return (
		<Dialog
			PaperProps={{
				style: {
					backgroundColor: 'transparent',
					boxShadow: 'none'
				}
			}}
			fullWidth
			maxWidth="sm"
			onClose={handleClose}
			open={open}
		>
			<div
				className="Dialog"
				style={{
					background: pokemon.types[1]
						? `linear-gradient(${pokemonType[pokemon.types[0].type.name]}, ${pokemonType[
								pokemon.types[1].type.name
							]}`
						: `linear-gradient(${pokemonType[pokemon.types[0].type.name]}, rgb(218, 218, 200)`
				}}
			>
				<div className="Details__name">
					<h1>{pokemon.name}</h1>
				</div>
				<div className="Details__no">
					<p>#{String(pokemon.id).padStart(3, '0')}</p>
				</div>
				<div className="Details__img">
					<img src={pokemon.sprites.front_default} alt={pokemon.name} />
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
					{pokemon.types.map((type) => {
						return (
							<div className="Card__type" style={{ backgroundColor: pokemonType[type.type.name] }}>
								<p>{type.type.name}</p>
							</div>
						);
					})}
				</div>
				<div className="Card__abilities Card__data--ability">
					{pokemon.abilities.map((ability) => {
						return (
							<div className="Card__ability" style={{ backgroundColor: 'rgb(236, 88, 88)' }}>
								<p>{ability.ability.name}</p>
							</div>
						);
					})}
				</div>
				<StatChart pokemon={pokemon} />
			</div>
		</Dialog>
	);
}

export default DetailsDialog;
