import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';

const options = {
  title: {
    display: false,
  },
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
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Calls',
      fill: false,
      lineTension: 0.5,
      backgroundColor: '#00d9f6',
      borderColor: '#00d9f6',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#00d9f6',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 7,
      pointHoverRadius: 7,
      pointHoverBackgroundColor: '#00d9f6',
      pointHoverBorderColor: '#00d9f6',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const BarChart = (props) => (
  <div className="col-md-4 col-sm-12">
  <div className="card">
    <div className="card-body">
    
    <Bar
        data={data}
        height={328}
        options={options}
    />
      </div>
  </div>
</div>
);

BarChart.propTypes = {

};

export default BarChart;
