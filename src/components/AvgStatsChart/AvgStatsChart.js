import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Button from '@material-ui/core/Button';

const AvgStatsChart = ({ pokemon, showButton }) => {
	const statTypes = [ 'Hp', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed' ];

	let avgStatsData = [];
	for (let i = 0; i < statTypes.length; i++) {
		let total = 0;
		let count = 0;
		pokemon.forEach((poke) => {
			if (poke !== undefined) {
				total += poke.stats[i].base_stat;
				count += 1;
			}
		});
		let avg = Math.round(total / count * 10) / 10;
		avgStatsData.push(avg);
	}
	console.log(avgStatsData);

	let chartData = {
		labels: statTypes,
		datasets: [
			{
				data: avgStatsData,
				backgroundColor: [
					'rgb(49, 185, 83)',
					'rgb(207, 55, 28)',
					'rgb(235, 116, 36)',
					'rgb(36, 235, 36)',
					'rgb(149, 235, 36)',
					'rgb(71, 202, 39)'
				]
			}
		]
	};

	const [ data, setData ] = useState(chartData);

	const updateCharts = () => {
		setData({});
		setData(chartData);
	};

	return (
		<div className="AvgStatsChart">
			<Bar
				data={data}
				height={250}
        		width={400}
				options={{
					scales: {
						yAxes: [
							{
								stacked: true
							}
						],
						xAxes: [
							{
								stacked: true
							}
						]
					},
					title: {
						display: true,
						text: 'Average Base Stats'
					},
					legend: {
						display: false
					},
					maintainAspectRatio: true,
					responsive: false,
				}}
			/>
			{showButton && (
				<Button style={{margin:'1em'}} variant="contained" color="secondary" className="ChartButton" onClick={updateCharts}>
					Update Chart
				</Button>
			)}
		</div>
	);
};

export default AvgStatsChart;
