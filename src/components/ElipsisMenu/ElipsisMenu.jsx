import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';

const ElipsisMenu = (props) => (
    <div className="row mr-2 ml-2 mt-3">
        <div className="col text-right"><FontAwesomeIcon icon={faEllipsisH} size="lg" color="#dddfeb" /></div>
    </div>
);

ElipsisMenu.propTypes = {

};

export default ElipsisMenu;
