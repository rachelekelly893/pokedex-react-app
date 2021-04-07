import React from 'react';
import AvgStatsChart from '../AvgStatsChart/AvgStatsChart';
import { Dialog } from '@material-ui/core';
import './style.css';

function StatsDialog(props) {
	const { onDialogClose, selectedValue, dialogOpen, filteredPokemon } = props;

	const handleDialogClose = () => {
		onDialogClose(selectedValue);
	};

	return (
		<Dialog fullWidth maxWidth="sm" onClose={handleDialogClose} open={dialogOpen}>
			<div className="dialog">
				<h2>Pokemon Stats</h2>
				<p>Pokemon have 6 stats that determine their performance in battles.</p>
				<br />
				<h3>About Stats</h3>
				<p>A Pokemon's stats can change as they level up or evolve</p>
				<br />
				<p>They can also be affected by the Pokemon's nature and items</p>
				<br />
				<AvgStatsChart className="AvgStatsChart" pokemon={filteredPokemon} showButton={false} />
			</div>
		</Dialog>
	);
}

export default StatsDialog;
