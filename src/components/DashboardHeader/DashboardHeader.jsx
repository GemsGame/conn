import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone, faComments, faPercent, faDollarSign, faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import ShortStatisticCard from '../../components/ShortStatisticCard';
import { getStatistic, elementsCount, getAllElements } from '../../actions/statistic';


const DashboardHeader = (props) => {
  const {
    authentication, statistic, elementsCount: childrenCounts, getAllElements: getAllEl,
  } = props;
  useEffect(() => {
    getAllEl(authentication.user.uid);
  }, []);

  const count = (prop) => {
    let result = 0;
    if (Object.keys(statistic).length > 0) {
      result = Object.keys(statistic).reduce((prev, curr) => statistic[prev][prop] + statistic[curr][prop]);
    } else {
      result = 0;
    }
    return result;
  };

  const conversion = () => {
    if (Object.keys(statistic).length > 0) {
      return count('answers') / count('calls') * 100;
    }
    return 0;
  };

  const cost = (callPrice) => {
    if (Object.keys(statistic).length > 0) {
      return count('calls') * callPrice / count('answers');
    }
    return 0;
  };

  return <>
        <div className='row mt-5 mr-2 ml-2'>
            <ShortStatisticCard title="SHORT_STATISTIC_CARD_CALLS_TITLE" value={count('calls')} borderColor="border-left-primary" textColor="text-primary" icon={<FontAwesomeIcon icon={faPhone} size="2x" color="#dddfeb" />} />
            <ShortStatisticCard title="SHORT_STATISTIC_CARD_ANSWERS_TITLE" value={count('answers')} borderColor="border-left-success" textColor="text-success" icon={<FontAwesomeIcon icon={faComments} size="2x" color="#dddfeb" />} />
            <ShortStatisticCard title="SHORT_STATISTIC_CARD_CR_TITLE" value={conversion().toFixed(2)} borderColor="border-left-warning" textColor="text-warning" icon={<FontAwesomeIcon icon={faPercent} size="2x" color="#dddfeb" />} />
            <ShortStatisticCard title="SHORT_STATISTIC_CARD_CPL_TITLE" value={cost(0.001).toFixed(5)} borderColor="border-left-info" textColor="text-info" icon={<FontAwesomeIcon icon={faDollarSign} size="2x" color="#dddfeb" />} />
        </div>
    </>;
};

DashboardHeader.propTypes = {

};


const mapStateToProps = (state) => ({
  statistic: state.statistic,
  authentication: state.authentication,
});

const mapDispatchToProps = {
  getStatistic,
  elementsCount,
  getAllElements,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardHeader);
