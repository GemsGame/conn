import React, { Children } from 'react';
import PropTypes from 'prop-types';
import './_modal-window.scss';

const ModalWindow = (props) => (
    <div className="modal-window-wrapper">
        <div className="modal-window">
            <div className="modal-window__body">
                {props.children}
            </div>
        </div>
    </div>
);

ModalWindow.propTypes = {

};

export default ModalWindow;
