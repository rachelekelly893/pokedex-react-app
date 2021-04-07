import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Button from '@material-ui/core/Button';

const TypeChart = ({ pokemon, showButton }) => {
	const types = [
		'bug',
		'dark',
		'dragon',
		'electric',
		'fairy',
		'fighting',
		'fire',
		'flying',
		'ghost',
		'grass',
		'ground',
		'ice',
		'normal',
		'poison',
		'psychic',
		'psychic',
		'steel',
		'water'
	];

	let typesData = [];
	types.forEach((type) => {
		let count = 0;
		pokemon.forEach((poke) => {
			poke !== undefined &&
				(poke.types[1]
					? poke.types[0].type.name.includes(type) || poke.types[1].type.name.includes(type)
					: poke.types[0].type.name.includes(type)) &&
				(count += 1);
		});
		typesData.push(count);
	});

	let chartData = {
		labels: types,
		datasets: [
			{
				data: typesData,
				backgroundColor: [
					'rgb(166, 185, 26)',
					'rgb(112, 87, 70)',
					'rgb(111, 53, 252)',
					'rgb(247, 208, 44)',
					'rgb(214, 133, 173)',
					'rgb(194, 46, 40)',
					'rgb(238, 129, 48)',
					'rgb(169, 143, 243)',
					'rgb(115, 87, 151)',
					'rgb(122, 199, 76)',
					'rgb(226, 191, 101)',
					'rgb(150, 217, 214)',
					'rgb(168, 167, 122)',
					'rgb(163, 62, 161)',
					'rgb(249, 85, 135)',
					'rgb(182, 161, 54)',
					'rgb(183, 183, 206)',
					'rgb(99, 144, 240)'
				],
				hoverOffset: 4
			}
		]
	};

	const [ data, setData ] = useState(chartData);

	const updateCharts = () => {
		setData({});
		setData(chartData);
	};

	return (
		<div className="typeChart">
			<Doughnut
				data={data}
				height={250}
				width={400}
				style={{ margin: 'auto' }}
				options={{
					title: {
						display: true,
						text: 'No. of Pokemon By Type'
					},
					legend: {
						// display: false,
						position: 'right'
					},
					maintainAspectRatio: true,
					responsive: false
				}}
			/>
			{showButton && (
				<Button
					style={{ margin: '1em' }}
					variant="contained"
					color="secondary"
					className="ChartButton"
					onClick={updateCharts}
				>
					Update Chart
				</Button>
			)}
		</div>
	);
};

export default TypeChart;
