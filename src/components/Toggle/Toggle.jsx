import React from 'react';
import PropTypes from 'prop-types';
import './_Toggle.scss';

const Toggle = (props) => (
    <div className="toggle">
     <button className="toggle__button_first">Фон</button>
     <button className="toggle__button_second">Текст</button>
    </div>
);

Toggle.propTypes = {

};

export default Toggle;
