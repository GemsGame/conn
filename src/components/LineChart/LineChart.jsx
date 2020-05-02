import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import './_chart.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../Dropdown';

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

const LineChart = (props) => {
  const { value } = props;

  const data = {
    labels: value.labels[0],
    datasets: [
      {
        label: 'Звонки',
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
        data: value.data[0],
      },
    ],
  };
    return <div className="col-md-6 col-sm-12 mt-1 mb-1">
        <div className="card">
            <div className="card-body">
            <Line data={data} options={options}/>
            </div>
           </div>
    </div>
};

LineChart.propTypes = {
  data: PropTypes.object,
  options: PropTypes.object,
};

export default LineChart;
