import React from 'react';
import PropTypes from 'prop-types';
import LineChart from '../../components/LineChart';
import BarChart from '../../components/BarChart/BarChart';
import DashboardHeader from '../../components/DashboardHeader';


const Dashboard = () => {


  return (<>
       <DashboardHeader />
       <div className='row mt-4 mr-2 ml-2 mb-4'>
      <LineChart />
      <BarChart />
    </div>
  </>);
};

Dashboard.propTypes = {
};


export default Dashboard;
