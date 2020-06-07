import React from 'react';
import PropTypes from 'prop-types';

const WidgetColors = ({ changeWidget }) => (
  <div className="widget-type">
  <div className="widget-type__wrapper">
    <div className="widget-color" onClick={() => changeWidget({ bColor: 'white' })}></div>
    <div className="widget-color blue" onClick={() => changeWidget({ bColor: '#02A0FC' })}></div>
    <div className="widget-color blue-dark" onClick={() => changeWidget({ bColor: '#4339F2' })}></div>
    <div className="widget-color green" onClick={() => changeWidget({ bColor: '#34B53A' })}></div>
    <div className="widget-color orange" onClick={() => changeWidget({ bColor: '#FFB200' })}></div>
    <div className="widget-color red" onClick={() => changeWidget({ bColor: '#FF3A29' })}></div>
    <div className="widget-color black" onClick={() => changeWidget({ bColor: '#000000' })}></div>

  </div>
</div>
);

WidgetColors.propTypes = {

};

export default WidgetColors;
