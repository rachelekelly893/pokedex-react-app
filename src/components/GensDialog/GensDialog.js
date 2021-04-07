import React from 'react';
import GenChart from '../GenChart/GenChart';
import { Dialog } from '@material-ui/core';
import './style.css';

function TypesDialog(props) {
	const { onDialogClose, selectedValue, dialogOpen, filteredPokemon } = props;

	const handleDialogClose = () => {
		onDialogClose(selectedValue);
	};

	return (
		<Dialog fullWidth maxWidth="sm" onClose={handleDialogClose} open={dialogOpen}>
			<div className="dialog">
				<h2>Pokemon types</h2>
				<p>There are 18 Pokemon types which apply to Pokemon and their moves.</p>
				<br />
				<h3>About Types</h3>
				<p>
					Pokemon can have up to 2 types and these dictate which pokemon/moves they are strong or weak against
				</p>
				<br />
				<p>A Pokemon can lose or change types on evolution</p>
				<br />
				<h3>The distribution of Pokemon Types</h3>
				<div style={{width: '100% !important',height: '100% !important'}}>
				<GenChart className="TypeChart" pokemon={filteredPokemon} showButton={false} />
				</div>
			</div>
		</Dialog>
	);
}

export default TypesDialog;
