import React from 'react';
import PropTypes from 'prop-types';

const WidgetType = ({ changeWidget }) => (
    <div className="widget-type">
      <div className="widget-type__wrapper">
        <div className="window window__type1" onClick={() => changeWidget({ widgetType: 'type1' })}>
          <div className="window__image_circle"></div>
          <div className="window__row"></div>
        </div>
        <div className="window window__type2" onClick={() => changeWidget({ widgetType: 'type2' })}>
          <div className="window__row no-opacity"></div>
        </div>
        <div className="window window__type2" onClick={() => changeWidget({ widgetType: 'type3' })}>
          <div className="window__row no-opacity"></div>
        </div>
        <div className="window window__type2" onClick={() => changeWidget({ widgetType: 'type4' })}>
          <div className="window__row no-opacity"></div>
        </div>
        <div className="window window__type2" onClick={() => changeWidget({ widgetType: 'type5' })}>
          <div className="window__row no-opacity"></div>
        </div>
        <div className="window window__type2" onClick={() => changeWidget({ widgetType: 'type6' })}>
          <div className="window__row no-opacity"></div>
        </div>
      </div>
    </div>
);

WidgetType.propTypes = {

};

export default WidgetType;
