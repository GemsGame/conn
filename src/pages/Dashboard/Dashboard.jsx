import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone, faComments, faPercent, faDollarSign,
} from '@fortawesome/free-solid-svg-icons';
import ShortStatisticCard from '../../components/ShortStatisticCard';
import LineChart from '../../components/LineChart';
import BarChart from '../../components/BarChart/BarChart';
import { getStatistic } from '../../actions/statistic';


const Dashboard = ({ authentication, statistic, getStatistic }) => {
  useEffect(() => {
    getStatistic(authentication.user.uid);
  }, []);

  const summ = (object, field) => {
    const result = [];
    if (object) {
      Object.keys(object).map((item) => result.push(Object.keys(object[item][field]).length));
    }
    return result.reduce((prev, curr, index, arr) => prev + curr, 0);
  };

  const conversion = () => {
    const result = summ(statistic.projects, 'answers') / summ(statistic.projects, 'calls') * 100;
    return result.toFixed(2);
  };


  return (<>
    <div className='row mt-5 mr-2 ml-2'>
      <ShortStatisticCard title="SHORT_STATISTIC_CARD_CALLS_TITLE" value={summ(statistic.projects, 'calls')} borderColor="border-left-primary" textColor="text-primary" icon={<FontAwesomeIcon icon={faPhone} size="2x" color="#dddfeb" />} />
      <ShortStatisticCard title="SHORT_STATISTIC_CARD_ANSWERS_TITLE" value={summ(statistic.projects, 'answers')} borderColor="border-left-success" textColor="text-success" icon={<FontAwesomeIcon icon={faComments} size="2x" color="#dddfeb" />} />
      <ShortStatisticCard title="SHORT_STATISTIC_CARD_CR_TITLE" value={conversion()} borderColor="border-left-warning" textColor="text-warning" icon={<FontAwesomeIcon icon={faPercent} size="2x" color="#dddfeb" />} />
      <ShortStatisticCard title="SHORT_STATISTIC_CARD_CPL_TITLE" value="$0,02" borderColor="border-left-info" textColor="text-info" icon={<FontAwesomeIcon icon={faDollarSign} size="2x" color="#dddfeb" />} />
    </div>
    <div className='row mt-4 mr-2 ml-2 mb-4'>
      <LineChart />
      <BarChart />

    </div>
  </>);
};

Dashboard.propTypes = {
};

const mapStateToProps = (state) => ({
  statistic: state.statistic,
  authentication: state.authentication,
});

const mapDispatchToProps = {
  getStatistic,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
