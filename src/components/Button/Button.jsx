import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({
  children, onClick, disabled, active, className, ...others
}) => {
  let style;
  if (disabled) {
    style += ' disabled';
  }
  if (active) {
    style += ' active';
  }
  return <button
    className={`${className} ${style}`}
    onClick={onClick}
    disabled={disabled}
    active={active}
    {...others}
    >{children}
    </button>;
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  active: PropTypes.string,
};

Button.defaultProps = {
  children: 'default text',
  onClick: () => {},
  disabled: false,
  active: 'false',
  className: '',
};
export default Button;
