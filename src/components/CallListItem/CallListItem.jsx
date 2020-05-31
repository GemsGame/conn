import React from 'react';
import PropTypes from 'prop-types';
import './_call-list-item.scss';

const CallListItem = props => {
    return (
        <div className='call-list-item mr-3 ml-3'>
            <div className="call-list-item__wrapper">
             <div className="call-list-item__time">24.04.2020</div>
             <div className="call-list-item__download"><i class="fas fa-sm fa-download"></i></div>
             </div>
            <div className="call-list-item__body">
               
                <div className="call-list-item__player">player</div>
            </div>
        </div>
    )
}

CallListItem.propTypes = {

}

export default CallListItem;
