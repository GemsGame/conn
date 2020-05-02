import React from 'react';
import { Bar } from 'react-chartjs-2';

import './_barChart.scss';

const options = {
  title: {
    display: false,
  },
  responsive: true,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [{
      gridLines: {
        display: false,
      },
    }],
    yAxes: [{
      gridLines: {
        display: false,
      },
    }],
  },
};


const BarChart = (props) => {
  const { value } = props;
  const data = {
    labels: value.labels[0],
    datasets: [
      {
        label: 'Ответы',
        borderWidth: 2,
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'white',
        borderColor: '#28a745',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        hoverBackgroundColor: '#28a745',
        pointBorderWidth: 7,
        pointHoverRadius: 7,
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: value.data[0],
      },
    ],
  };
  return (<div className="col-md-6 col-sm-12 mt-1 mb-1">
  <div className="card">
    <div className="card-body">
    <Bar
        data={data}
        options={options}
    />
      </div>
  </div>
</div>);
};

BarChart.propTypes = {

};

export default BarChart;
