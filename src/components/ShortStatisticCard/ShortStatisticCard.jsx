import React from 'react';
import PropTypes from 'prop-types';
import './_shortStatisticCard.scss';
import LanguageContext from '../../multilanguage/context';
import { languageList } from '../../multilanguage/translation';

const ShortStatisticCard = (props) => {
  const {
    title, value, borderColor, textColor, icon,
  } = props;

  return <LanguageContext.Consumer>
    {({ language }) => (
      <div className="col-sm-12 col-md-3">
        <div className={`card ${borderColor}`}>
          <div className="row card-body">
            <div className="col">
              <p className={`text-xs font-weight-bold ${textColor} text-uppercase mb-1`}>{languageList[language][title]}</p>
              <div className="h5 mb-0 font-weight-bold text-gray-800">{value}</div>
            </div>
            <div className="col-auto mt-1">
              {icon}
            </div>
          </div>
        </div>
      </div>


    )}

  </LanguageContext.Consumer>;
};

ShortStatisticCard.defaultProps = {
  title: 'SHORT_STATISTIC_CARD_CALLS_TITLE',
  value: '0',
};

ShortStatisticCard.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
};

export default ShortStatisticCard;
