import React from 'react';
import PropTypes from 'prop-types';
import './_Toggle.scss';

const Toggle = ({changeToggle}) => (
    <div className="toggle">
     <button className="toggle__button_first" onClick={() => changeToggle('bColor')}>Фон</button>
     <button className="toggle__button_second" onClick={() => changeToggle('tColor')}>Текст</button>
    </div>
);

Toggle.propTypes = {

};

export default Toggle;
