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
        backgroundColor:['rgb(49, 185, 83)', 'rgb(207, 55, 28)', 'rgb(235, 116, 36)', 'rgb(36, 235, 36)', 'rgb(149, 235, 36)', 'rgb(71, 202, 39)']
      }
    ]
  })

    return (
      <div className="chart">
        <HorizontalBar
          data={chartData}
          options={{
            legend: {
              labels: {fontColor: 'black'}},
            responsive: true,
    maintainAspectRatio: false,
            hover: {
              color: 'white'
            },
            legend: {
              display: false,
          },
            scales: {
              xAxes: [{
                ticks: {min:0, max: 255, display: false, fontColor: 'black'},
                gridLines: {
                    display:false
                }
              }],
              yAxes: [{
                ticks: {fontColor: 'black', fontSize: 18, fontWeight: 500},
                categoryPercentage: 1.0,
                barPercentage: .8,
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