import React, {useState} from 'react';
import {HorizontalBar} from 'react-chartjs-2';

const StatChart = ({pokemon}) => {

  const [chartData, setChartData] = useState({
    labels: ['Hp', 'Attack', 'Defense', 'Special Attack', 'Special Defense','Speed'],
    datasets: [
      {
        data:[ 
          pokemon.stats[0].base_stat,
          pokemon.stats[1].base_stat, 
          pokemon.stats[2].base_stat, 
          pokemon.stats[3].base_stat, 
          pokemon.stats[4].base_stat, 
          pokemon.stats[5].base_stat],
        backgroundColor:['rgb(31, 238, 76)', 'rgb(226, 33, 33)', 'rgb(245, 241, 18)', 'rgb(18, 237, 245)', 'rgb(60, 18, 245)', 'rgb(181, 18, 245)']
      }
    ]
  })

    return (
      <div className="chart">
        <HorizontalBar
          data={chartData}
          options={{
            legend: {
              display: false,
          },
            scales: {
              xAxes: [{
                ticks: {min:0, max: 100, display: false},
                gridLines: {
                    display:false
                }
              }],
              yAxes: [{
                  gridLines: {
                      display:false
                  }  
              }]
          }
          }}
        />
      </div>
    )
  }

export default StatChart;