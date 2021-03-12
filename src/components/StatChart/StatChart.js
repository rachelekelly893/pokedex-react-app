import React, {Component} from 'react';
import {HorizontalBar} from 'react-chartjs-2';

class StatChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData: 
      {
        labels: ['Hp', 'Attack', 'Defense', 'Special Attack', 'Special Defense','Speed'],
        datasets: [
          {
            data:[ 
              props.chartData.stats[0].base_stat,
              props.chartData.stats[1].base_stat, 
              props.chartData.stats[2].base_stat, 
              props.chartData.stats[3].base_stat, 
              props.chartData.stats[4].base_stat, 
              props.chartData.stats[5].base_stat],
            backgroundColor:['rgb(31, 238, 76)', 'rgb(226, 33, 33)', 'rgb(245, 241, 18)', 'rgb(18, 237, 245)', 'rgb(60, 18, 245)', 'rgb(181, 18, 245)']
          }
        ]
      }
    }
  }

  render(){
    return (
      <div className="chart">
        <HorizontalBar
          data={this.state.chartData}
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
}

export default StatChart;