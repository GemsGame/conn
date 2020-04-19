import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './_navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUserCircle, faCoins } from '@fortawesome/free-solid-svg-icons';


const Navbar = (props) => {
  const { email } = props.authentication.user;

  return <div className="row row-nav">
    <div className="col">
      <div className="navbar justify-content-end">
        <div className="coins mr-4">
          <FontAwesomeIcon icon={faCoins} size="lg" color="#dddfeb" />
          <span className="badge badge-success badge-counter">1000</span>
        </div>
        <div className="messages mr-4">
          <FontAwesomeIcon icon={faEnvelope} size="lg" color="#dddfeb" />
          <span className="badge badge-danger badge-counter">4</span>
        </div>
        <div className="line mr-4"></div>
        <div className="dropdown">
          <button className="person mt-1 mr-2 border-0">
            <FontAwesomeIcon icon={faUserCircle} size="2x" color="#dddfeb" />
            <small className="text-muted ml-2 mb-1" style={{
              position: 'relative',
              top: '-0.4em',
            }}>{email}</small>
          </button>
        </div>

      </div>
    </div>
  </div>;
};

Navbar.propTypes = {
  email: PropTypes.string,
};

Navbar.defaultProps = {
  email: 'email',
};

const mapStateToProps = (state) => ({
  authentication: state.authentication,
});

export default connect(mapStateToProps)(Navbar);
