import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import Button from '@material-ui/core/Button';

const TypeChart = ({ pokemon, showButton }) => {
	
	const statTypes = ['Hp', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed' ];

	let gen1 = [];
	let avgGen1Data=[]
	let gen2 = [];
	let avgGen2Data=[]
	let gen3 = [];
	let avgGen3Data=[]
	let gen4 = [];
	let avgGen4Data=[]
	let gen5 = [];
	let avgGen5Data=[]
	let gen6 = [];
	let avgGen6Data=[]
	let gen7 = [];
	let avgGen7Data=[]
	let gen8 = [];
	let avgGen8Data=[]

	pokemon.forEach(poke => {
		if (poke !== undefined) {
			if (poke.id < 152) {
				gen1.push(poke)
			} else if (poke.id < 252) {
				gen2.push(poke)
			} else if (poke.id < 387) {
				gen3.push(poke)
			} else if (poke.id < 494) {
				gen4.push(poke)
			} else if (poke.id < 650) {
				gen5.push(poke)
			} else if (poke.id < 722) {
				gen6.push(poke)
			} else if (poke.id < 810) {
				gen7.push(poke)
			} else {
				gen8.push(poke)
			}
		}
	});

	for (let i = 0; i < statTypes.length; i++) {
		let total = 0;
		let count = 0;
		gen1.forEach((poke) => {
			if (poke !== undefined) {
				total += poke.stats[i].base_stat;
				count += 1;
			}
		});
		let avg = Math.round(total / count * 10) / 10;
		avgGen1Data.push(avg);
}

for (let i = 0; i < statTypes.length; i++) {
	let total = 0;
	let count = 0;
	gen2.forEach((poke) => {
		if (poke !== undefined) {
			total += poke.stats[i].base_stat;
			count += 1;
		}
	});
	let avg = Math.round(total / count * 10) / 10;
	avgGen2Data.push(avg);
}

for (let i = 0; i < statTypes.length; i++) {
	let total = 0;
	let count = 0;
	gen3.forEach((poke) => {
		if (poke !== undefined) {
			total += poke.stats[i].base_stat;
			count += 1;
		}
	});
	let avg = Math.round(total / count * 10) / 10;
	avgGen3Data.push(avg);
}

for (let i = 0; i < statTypes.length; i++) {
	let total = 0;
	let count = 0;
	gen4.forEach((poke) => {
		if (poke !== undefined) {
			total += poke.stats[i].base_stat;
			count += 1;
		}
	});
	let avg = Math.round(total / count * 10) / 10;
	avgGen4Data.push(avg);
}

for (let i = 0; i < statTypes.length; i++) {
	let total = 0;
	let count = 0;
	gen5.forEach((poke) => {
		if (poke !== undefined) {
			total += poke.stats[i].base_stat;
			count += 1;
		}
	});
	let avg = Math.round(total / count * 10) / 10;
	avgGen5Data.push(avg);
}

for (let i = 0; i < statTypes.length; i++) {
	let total = 0;
	let count = 0;
	gen6.forEach((poke) => {
		if (poke !== undefined) {
			total += poke.stats[i].base_stat;
			count += 1;
		}
	});
	let avg = Math.round(total / count * 10) / 10;
	avgGen6Data.push(avg);
}

for (let i = 0; i < statTypes.length; i++) {
	let total = 0;
	let count = 0;
	gen7.forEach((poke) => {
		if (poke !== undefined) {
			total += poke.stats[i].base_stat;
			count += 1;
		}
	});
	let avg = Math.round(total / count * 10) / 10;
	avgGen7Data.push(avg);
}

for (let i = 0; i < statTypes.length; i++) {
	let total = 0;
	let count = 0;
	gen8.forEach((poke) => {
		if (poke !== undefined) {
			total += poke.stats[i].base_stat;
			count += 1;
		}
	});
	let avg = Math.round(total / count * 10) / 10;
	avgGen8Data.push(avg);
}
	

	let chartData = {
		labels: statTypes,
		datasets: [{
			label: 'Gen 1',
			data: avgGen1Data,
			fill: true,
    		backgroundColor: 'rgba(201, 60, 72, 0.2)',
			borderColor: 'rgb(227, 23, 40)',
			pointBackgroundColor: 'rgb(201, 60, 72)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgb(227, 23, 40)'
		  }, {
			label: 'Gen 2',
			data: avgGen2Data,
			fill: true,
    		backgroundColor: 'rgba(237, 222, 102, 0.2)',
			borderColor: 'rgb(227, 207, 54)',
			pointBackgroundColor: 'rgb(237, 222, 102)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgb(227, 207, 54)'
		  },
		  {
			label: 'Gen 3',
			data: avgGen3Data,
			fill: true,
    		backgroundColor: 'rgba(222, 93, 151, 0.2)',
			borderColor: 'rgb(217, 48, 124)',
			pointBackgroundColor: 'rgb(222, 93, 151)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgb(217, 48, 124)'
		  },
		  {
			label: 'Gen 4',
			data: avgGen4Data,
			fill: true,
    		backgroundColor: 'rgba(119, 217, 214, 0.2)',
			borderColor: 'rgb(38, 224, 218)',
			pointBackgroundColor: 'rgb(119, 217, 214)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgb(38, 224, 218)'
		  },
		  {
			label: 'Gen 5',
			data: avgGen5Data,
			fill: true,
    		backgroundColor: 'rgba(71, 69, 69, 0.2)',
			borderColor: 'rgb(15, 15, 15)',
			pointBackgroundColor: 'rgb(71, 69, 69)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgb(15, 15, 15)'
		  },
		  {
			label: 'Gen 6',
			data: avgGen6Data,
			fill: true,
    		backgroundColor: 'rgba(63, 166, 122, 0.2)',
			borderColor: 'rgb(27, 110, 75)',
			pointBackgroundColor: 'rgb(63, 166, 122)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgb(27, 110, 75)'
		  },
		  {
			label: 'Gen 7',
			data: avgGen7Data,
			fill: true,
    		backgroundColor: 'rgba(219, 163, 64, 0.2)',
			borderColor: 'rgb(240, 158, 14)',
			pointBackgroundColor: 'rgb(219, 163, 64)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgb(240, 158, 14)'
		  },
		  {
			label: 'Gen 8',
			data: avgGen8Data,
			fill: true,
    		backgroundColor: 'rgba(119, 123, 230, 0.2)',
			borderColor: 'rgb(23, 30, 227)',
			pointBackgroundColor: 'rgb(119, 123, 230)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgb(23, 30, 227)'
		  },
		]
	};

	const [ data, setData ] = useState(chartData);

	const updateCharts = () => {
		setData({});
		setData(chartData);
	};

	return (
		<div className="typeChart">
			<Line
				data={data}
				height={250}
        		width={400}
				options={{
					title: {
						display: true,
						text: 'Pokemon stats by Generation'
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

export default TypeChart;
