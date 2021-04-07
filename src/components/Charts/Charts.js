import React, { useState } from 'react';
import './style.css';
import TypeChart from '../TypeChart/TypeChart';
import AvgStatsChart from '../AvgStatsChart/AvgStatsChart';
import AttDefChart from '../AttDefChart/AttDefChart';
import GenChart from '../GenChart/GenChart';

import Button from '@material-ui/core/Button';

const Charts = ({ filteredPokemon }) => {
	//  SHOW/HIDE CHARTS

	const [ buttonText, setButtonText ] = useState('Hide Charts');

	function toggleChart() {
		const x = document.getElementById('charts');
		if (x.style.display === 'none') {
			x.style.display = 'block';
			setButtonText('Hide Charts');
		} else {
			x.style.display = 'none';
			setButtonText('Show Charts');
		}
	}

	return (
		<div className="Charts">
			<Button variant="contained" color="secondary" className="ChartButton" onClick={toggleChart}>
				{buttonText}
			</Button>
			<div id="charts">
				<div  id="chart1" >
					<AvgStatsChart showButton={true} className="TypeChart" pokemon={filteredPokemon} />
				</div>
				<div  id="chart2" >
					<TypeChart showButton={true} className="TypeChart" pokemon={filteredPokemon} />
				</div>
				<div  id="chart3" >
					<AttDefChart showButton={true} className="AttDefChart" pokemon={filteredPokemon} />
				</div>
				<div  id="chart3" >
					<GenChart showButton={true} className="GenChart" pokemon={filteredPokemon} />
				</div>
			</div>
		</div>
	);
};

export default Charts;
