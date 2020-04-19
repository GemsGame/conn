import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import './_chart.scss';
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
const LineChart = (props) => (
    <div className="col-md-8 col-sm-12">
        <div className="card">
            <div className="card-body">
              <div className="card-title text-right">
                <FontAwesomeIcon icon = {faEllipsisV} size="lg" color="#dddfeb"/>
              </div>
            <Line data={data} options={options}/>
            </div>
           </div>
    </div>
);

LineChart.propTypes = {
  data: PropTypes.object,
  options: PropTypes.object,
};

export default LineChart;
