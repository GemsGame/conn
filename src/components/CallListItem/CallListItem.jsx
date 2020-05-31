import React from 'react';
import PropTypes from 'prop-types';
import './_call-list-item.scss';
import Player from '../Player';

const CallListItem = (props) => (
        <div className='call-list-item'>
            <div className="call-list-item__body">
            <div className="call-list-item__wrapper">
             <div className="call-list-item__time">
                 31.05.2020, 14:21
             </div>
             <div className="call-list-item__time">
             <i class="fas fa-download"></i>
             </div>
            </div>
            <Player trackLink="https://www.free-stock-music.com/music/jay-someday-family-business.mp3"/>
            </div>
        </div>
);

CallListItem.propTypes = {

};

export default CallListItem;
