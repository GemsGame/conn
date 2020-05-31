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
import { getBalance } from '../../actions/balance';
import { getProjects } from '../../actions/projects';
import LineChart from '../LineChart';
import BarChart from '../BarChart';
import Dropdown from '../Dropdown';
import './_dashboard-container.scss';

const DashboardContainer = (props) => {
  const [select, setSelect] = useState('all');
  const {
    authentication, projects, getProjects: getProj, getBalance: balance,
  } = props;
  useEffect(() => {
    balance(authentication.user.uid);
    getProj(authentication.user.uid);
  }, []);

  const count = (prop, sel) => {
    let result = 0;
    if (Object.keys(projects).length > 0) {
      if (sel === 'all') {
        result = Object.keys(projects).map((item) => {
          if (Object.prototype.hasOwnProperty.call(projects[item], '_statistic')) {
            return result = projects[item]._statistic[prop];
          } return result = 0;
        }).reduce((prev, curr) => prev + curr);
      } else if (Object.prototype.hasOwnProperty.call(projects[sel], '_statistic')) {
        result = projects[sel]._statistic[prop];
      } else return 0;
    } else {
      result = 0;
    }
    return result;
  };


  const conversion = (sel) => {
    if (Object.keys(projects).length > 0) {
      const result = count('answers', sel) / count('calls', sel) * 100;
      if (result) {
        return result;
      } return 0;
    }
    return 0;
  };

  const cost = (callPrice, sel) => {
    if (Object.keys(projects).length > 0) {
      const result = count('calls', sel) * callPrice / count('answers', sel);
      if (result) {
        return result;
      } return 0;
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
    if (Object.keys(projects).length > 0) {
      if (sel === 'all') {
        Object.keys(projects).map((item) => {
          if (Object.prototype.hasOwnProperty.call(projects[item], '_statistic')) {
            Object.keys(projects[item]._statistic[`_time_${prop}`]).map((i) => {
              if (ob[i]) {
                ob[i] += projects[item]._statistic[`_time_${prop}`][i];
              } else {
                ob[i] = projects[item]._statistic[`_time_${prop}`][i];
              }
            });
          } else {
            return ob;
          }
        });

        result.labels.push(Object.keys(ob));
        result.data.push(Object.keys(ob).map((i) => ob[i]));
      } else if (Object.prototype.hasOwnProperty.call(projects[sel], '_statistic')) {
        result.labels.push(Object.keys(projects[sel]._statistic[`_time_${prop}`]));
        result.data.push(Object.keys(projects[sel]._statistic[`_time_${prop}`]).map((item) => projects[sel]._statistic[`_time_${prop}`][item]));
      }
    }
    return result;
  };
  return <>
    <div className="row justify-content-end mr-4 mt-4">
      <div className="col ml-4"><h4>Статистика</h4></div>
      <div className='block'>
        <Dropdown
          projects={projects}
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
    <div className='row mt-1 mr-2 ml-2'>
      <LineChart value={chartData(select, 'calls')} />
      <BarChart value={chartData(select, 'answers')} />
    </div>
  </>;
};

DashboardContainer.propTypes = {

};


const mapStateToProps = (state) => ({
  projects: state.projects,
  authentication: state.authentication,
});

const mapDispatchToProps = {
  getStatistic,
  elementsCount,
  getAllElements,
  countAnswersCalls,
  getBalance,
  getProjects,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
