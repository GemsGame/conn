import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Toggle from '../Toggle';

const WidgetColors = ({ changeWidget }) => {
  const [toggle, setToggle] = useState('bColor');
  const changeToggle = (tog) => {
    setToggle(() => tog);
  };
  return <div className="widget-type">
  <div className="widget-type__wrapper">
    <div className="widget-row toggle"><Toggle changeToggle={changeToggle}/></div>
    <div className="widget-row colors-list">
    <div className="widget-color" onClick={() => changeWidget({ [toggle]: 'white' })}></div>
    <div className="widget-color blue" onClick={() => changeWidget({ [toggle]: '#02A0FC' })}></div>
    <div className="widget-color blue-dark" onClick={() => changeWidget({ [toggle]: '#4339F2' })}></div>
    <div className="widget-color green" onClick={() => changeWidget({ [toggle]: '#34B53A' })}></div>
    <div className="widget-color orange" onClick={() => changeWidget({ [toggle]: '#FFB200' })}></div>
    <div className="widget-color red" onClick={() => changeWidget({ [toggle]: '#FF3A29' })}></div>
    <div className="widget-color black" onClick={() => changeWidget({ [toggle]: '#000000' })}></div>
    </div>
  </div>
</div>
};

WidgetColors.propTypes = {

};

export default WidgetColors;
