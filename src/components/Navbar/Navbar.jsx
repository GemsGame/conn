import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './_navbar.scss';
import {
  faEnvelope, faUserCircle, faCoins, faHistory, faBell, faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../Dropdown';
import { out } from '../../actions/authentication';
import { getMessages, updateMessage } from '../../actions/messages';
import Messages from '../Messages';

const Navbar = (props) => {
  const { out: signOut, getMessages: messages, updateMessage: updMessage } = props;
  const { email, uid } = props.authentication.user;
  const { connections } = props.balance;
  const [select, setSelect] = useState();

  const selectProject = (id) => {
    setSelect(id);
  };

  useEffect(() => {
    messages(uid);
  }, []);

  if (select === 'sign_out') {
    signOut();
  }
  return <div className="row">
    <div className="col">
      <div className="navbar justify-content-end">
        <div className="coins mr-4">
          <Dropdown
            list={[{ name: 'Пополнить баланс', icon: faCoins, id: 'buy_connections' }]}
            button={faCoins}
            header={{ name: 'All projects', icon: faUserCircle }}
            title="CONN"
            span={{ count: connections, style: 'badge-success' }}
            buttonSize={'lg'}
          />
        </div>
        <div className="messages mr-4">
          <Messages
            messages={props.messages}
            button={faBell}
            title="Оповещения"
            span={{ count: 4, style: 'orange-warning' }}
            buttonSize={'lg'}
            select={updMessage}
            uid = {uid}
          />

        </div>
        <div className="line mr-4"></div>
        <div className="dropdown">
          <div className="person">
            <Dropdown
              list={[{ name: 'Выйти из системы', icon: faSignOutAlt, id: 'sign_out' }]}
              button={faUserCircle}
              buttonText={email}
              buttonSize={'2x'}
              header={{ name: 'All projects', icon: faUserCircle }}
              title={email}
              select={selectProject}
            ></Dropdown>
          </div>
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
const mapDispatchToProps = {
  out,
  getMessages,
  updateMessage,
};

const mapStateToProps = (state) => ({
  authentication: state.authentication,
  balance: state.balance,
  messages: state.messages,
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
