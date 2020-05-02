import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone, faComments, faPercent, faDollarSign, faEllipsisH, faProjectDiagram, faCog, faListUl, faThumbtack,
} from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import ShortStatisticCard from '../ShortStatisticCard';
import {
  getStatistic, elementsCount, getAllElements, countAnswersCalls,
} from '../../actions/statistic';
import { getBalance } from "../../actions/balance";
import LineChart from '../LineChart';
import BarChart from '../BarChart';
import Dropdown from '../Dropdown';
import './_dashboard-container.scss';

const DashboardContainer = (props) => {
  const [select, setSelect] = useState('all');
  const {
    authentication, statistic, elementsCount: childrenCounts, getAllElements: getAllEl, countAnswersCalls: countAC, getBalance: balance,
  } = props;
  useEffect(() => {
    countAC(authentication.user.uid);
    balance(authentication.user.uid);
  }, []);

  const count = (prop, sel) => {
    let result = 0;
    if (Object.keys(statistic).length > 0) {
      if (sel === 'all') {
        result = Object.keys(statistic).map((item) => statistic[item][prop]).reduce((prev, curr) => prev + curr);
      } else {
        result = statistic[sel][prop];
      }
    } else {
      result = 0;
    }
    return result;
  };


  const conversion = (sel) => {
    if (Object.keys(statistic).length > 0) {
      return count('answers', sel) / count('calls', sel) * 100;
    }
    return 0;
  };

  const cost = (callPrice, sel) => {
    if (Object.keys(statistic).length > 0) {
      return count('calls', sel) * callPrice / count('answers', sel);
    }
    return 0;
  };
  const selectProject = (id) => {
    setSelect(id);
  };

  const chartData = (sel, prop) => {
    const result = {
      labels: [],
      data: [],
    };
    const ob = {};
    if (Object.keys(statistic).length > 0) {
      if (sel === 'all') {
        Object.keys(statistic).map((item) => Object.keys(statistic[item][`_time_${prop}`]).map((i) => {
          if (ob[i]) {
            ob[i] += statistic[item][`_time_${prop}`][i];
          } else {
            ob[i] = statistic[item][`_time_${prop}`][i];
          }
        }));

        result.labels.push(Object.keys(ob));
        result.data.push(Object.keys(ob).map((i) => ob[i]));
      } else {
        result.labels.push(Object.keys(statistic[sel][`_time_${prop}`]));
        result.data.push(Object.keys(statistic[sel][`_time_${prop}`]).map((item) => statistic[sel][`_time_${prop}`][item]));
      }
    }
    return result;
  };
  return <>
 <div className="row justify-content-end mr-4 mt-2">
      <div className='block'>
        <Dropdown
          statistic={statistic}
          icons={faProjectDiagram}
          select={selectProject}
          button={faEllipsisH}
          header={{ name: 'Все проекты', icon: faListUl }}
          title="Статистика"
        />
     </div>
    </div>
    <div className='row mt-2 mr-2 ml-2'>
      <ShortStatisticCard title="SHORT_STATISTIC_CARD_CALLS_TITLE" value={count('calls', select)} borderColor="border-left-primary" textColor="text-primary" icon={<FontAwesomeIcon icon={faPhone} size="2x" color="#dddfeb" />} />
      <ShortStatisticCard title="SHORT_STATISTIC_CARD_ANSWERS_TITLE" value={count('answers', select)} borderColor="border-left-success" textColor="text-success" icon={<FontAwesomeIcon icon={faComments} size="2x" color="#dddfeb" />} />
      <ShortStatisticCard title="SHORT_STATISTIC_CARD_CR_TITLE" value={conversion(select).toFixed(2)} borderColor="border-left-warning" textColor="text-warning" icon={<FontAwesomeIcon icon={faPercent} size="2x" color="#dddfeb" />} />
      <ShortStatisticCard title="SHORT_STATISTIC_CARD_CPL_TITLE" value={cost(0.001, select).toFixed(5)} borderColor="border-left-info" textColor="text-info" icon={<FontAwesomeIcon icon={faDollarSign} size="2x" color="#dddfeb" />} />
    </div>
    <div className='row mt-5 mr-2 ml-2'>
      <LineChart value={chartData(select, 'calls')} />
      <BarChart value={chartData(select, 'answers')} />
    </div>
  </>;
};

DashboardContainer.propTypes = {

};


const mapStateToProps = (state) => ({
  statistic: state.statistic,
  authentication: state.authentication,
});

const mapDispatchToProps = {
  getStatistic,
  elementsCount,
  getAllElements,
  countAnswersCalls,
  getBalance,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
