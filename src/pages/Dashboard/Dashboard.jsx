import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone, faTasks, faComments, faPercent, faDollarSign,
} from '@fortawesome/free-solid-svg-icons';
import ShortStatisticCard from '../../components/ShortStatisticCard';
import LineChart from '../../components/Chart';


const Dashboard = (props) => (
  <>
    <div className='row mt-5 mr-2 ml-2'>
      <ShortStatisticCard title="SHORT_STATISTIC_CARD_CALLS_TITLE" value="1984" borderColor="border-left-primary" textColor="text-primary" icon={<FontAwesomeIcon icon={faPhone} size="2x" color="#dddfeb" />} />
      <ShortStatisticCard title="SHORT_STATISTIC_CARD_ANSWERS_TITLE" value="2" borderColor="border-left-success" textColor="text-success" icon={<FontAwesomeIcon icon={faComments} size="2x" color="#dddfeb" />} />
      <ShortStatisticCard title="SHORT_STATISTIC_CARD_CR_TITLE" value="14,12" borderColor="border-left-warning" textColor="text-warning" icon={<FontAwesomeIcon icon={faPercent} size="2x" color="#dddfeb" />} />
      <ShortStatisticCard title="SHORT_STATISTIC_CARD_CPL_TITLE" value="$0,02" borderColor="border-left-info" textColor="text-info" icon={<FontAwesomeIcon icon={faDollarSign} size="2x" color="#dddfeb" />} />
    </div>
    <div className='row mt-4 mr-2 ml-2 mb-4'>
      <LineChart />
      <div className="col-md-4 col-sm-12">
        <div className="card">
       
        </div>
      </div>
    </div>
  </>
);

Dashboard.propTypes = {

};

export default Dashboard;
