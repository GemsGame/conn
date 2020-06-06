import React from 'react';
import PropTypes from 'prop-types';

const WidgetType = (props) => (
    <div className="widget-type">
      <div className="widget-type__wrapper">
        <div className="window window__type1">
          <div className="window__image_circle"></div>
          <div className="window__row"></div>
        </div>
        <div className="window window__type2">
          <div className="window__row no-opacity"></div>
        </div>
      </div>
    </div>
);

WidgetType.propTypes = {

};

export default WidgetType;
