import React from 'react';
import './_modal-window.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ModalWindow = (props) => {
    const { closeW, isOpen } = props;
    let style;
    if (!isOpen) {
        style = 'display-none';
    }
    return (
        <div className={`modal-window-wrapper ${style}`}>
            <div className="modal-window">
                <div className="modal-window__body">
                    {props.children}
                </div>

            </div>
        </div>);
};
export default ModalWindow;
