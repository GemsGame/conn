import React, { useState } from 'react';
import './_menu.scss';
import { Link } from 'react-router-dom';


const CustomNav = ({ li }) => {
  const [window, setWindow] = useState(true);

  const openClose = () => {
    if (window === false) {
      setWindow(true);
    } else {
      setWindow(false);
    }
  };
  return (
    <nav className="navbar-menu" style={{ width: window === false ? 250 : 60 }}>
      <div className="burger" onClick={() => openClose()}>
        <div className="line-burger" style={{ transform: window === false ? 'rotate(0deg)' : 'rotate(90deg)' }}>
          <div></div>
        </div>
      </div>
      <div className="navbar__logo" style={{ display: window === false ? 'flex' : 'none' }}>
      <img src="../images/connector.png" width="85px" height="85px"></img>
      </div>
      <ul className="navbar__list">
        {li.map((item, i) => (
          <div className="navbar__li-box" key={i}>
              <Link to={item[2]}>
            <div className="navbar__image" style={{ paddingLeft: window === false ? 60 : 17 }}>{item[1]}</div>
            <li
              className="navbar__li"
              style={{ display: window === false ? 'inline-block' : 'none' }}
            >
              {item[0]}
            </li>
            </Link>
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default CustomNav;

/*    <img
              src={item[1]}
              alt={item[1]}
              style={{ paddingLeft: window === false ? 27 : 12 }}
              className="navbar__image"
            /> */
