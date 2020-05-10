import React from 'react';
import PropTypes from 'prop-types';
import './Select.scss';

const Select = ({
  id, className, options, value, label, error, defaultValue, ...props
}) => (
        <div className="select-wrapper">
            <label htmlFor={id}>{label}</label>
            <select id={id} className={className} {...props}>
                {options.map((item, i) => <option key={i} value={item.value}> {item.label}</option>)}
            </select>
            {error
            && <small id={id} className="error-text">{error}</small>
            }
        </div>
);

Select.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  options: PropTypes.array,
  label: PropTypes.string,
};
Select.defaultProps = {
  id: 'someid',
  className: '',
  options: ['first', 'second', 'third', 'fourthly'],
  label: 'label',
};
export default Select;
