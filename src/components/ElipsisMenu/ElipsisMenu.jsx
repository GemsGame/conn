import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';
import './_elipsisMenu.scss';

const ElipsisMenu = (props) => {
  const [visible, setVisible] = useState(() => false);
  const openClose = () => {
    setVisible(!visible);
  };
  let style = 'hidden';
  if (visible) {
    style = 'animated rubberBand';
  }
  return <div className="row mr-2 ml-2 mt-3 justify-content-end">
        <div className="col-md-4 col-sm-8 col-lg-2">
            <div className="row">
                <div className="col text-right pointer"><FontAwesomeIcon icon={faEllipsisH} size="lg" color="#dddfeb" onClick={openClose}/></div>
            </div>
            <div className={`card dropdown-menu mr-2 ${style}`}>
                <div className="card-body">
                    <p className="card-title">Card title</p>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    </div>;
};

ElipsisMenu.propTypes = {

};

export default ElipsisMenu;
