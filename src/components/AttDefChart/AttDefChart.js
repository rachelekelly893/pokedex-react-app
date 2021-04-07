import React, { useState } from 'react';
import { Scatter } from 'react-chartjs-2';
import Button from '@material-ui/core/Button';

const AttDefChart = ({ pokemon }) => {
	let attData = [];
	let defData = [];

	pokemon.forEach((poke) => {
		if (poke !== undefined) {
			attData.push(poke.stats[1].base_stat);
			defData.push(poke.stats[2].base_stat);
		}
	});

	var attDefData = attData.map((x, i) => {
		return {
			x: x,
			y: defData[i],
			r: (pokemon[i].name)
		};
	});

	let chartData = {
		datasets: [
			{
				label: 'Filtered Pokemon',
				data: attDefData,
				backgroundColor: 'rgb(255, 99, 132)'
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
			<Scatter
				data={data}
				height={250}
				width={400}
				options={{
					tooltips: {
						callbacks: {
							label: function(tooltipItem, data) {
								var rLabel = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].r;
								return rLabel +': ('+ tooltipItem.xLabel + ',' + tooltipItem.yLabel +')';
							}
						}
					},
					legend: {
						display: false
					},
					title: {
						display: true,
						text: 'Pokemon Attack/Defense'
					},
					maintainAspectRatio: true,
					responsive: false,
					scales: {
						yAxes: [
							{
								scaleLabel: {
									display: true,
									labelString: 'Defense'
								}
							}
						],
						xAxes: [
							{
								scaleLabel: {
									display: true,
									labelString: 'Attack'
								}
							}
						]
					}
				}}
			/>
			<Button
				style={{ margin: '1em' }}
				variant="contained"
				color="secondary"
				className="ChartButton"
				onClick={updateCharts}
			>
				Update Chart
			</Button>
		</div>
	);
};

export default AttDefChart;
