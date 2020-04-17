import React from 'react';
import './_main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoins, faChartLine, faTasks, faServer, faWrench, faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
import Menu from '../../components/Menu';
import Navbar from '../../components/Navbar';
import Dashboard from '../Dashboard/Dashboard';

const Main = () => <div className="container-fluid">
    <div className="row">
        <Menu
            li={[
              ['Dashboard', <FontAwesomeIcon icon={faChartLine} size="lg" color="white"/>, '/dashboard'],
              ['Projects', <FontAwesomeIcon icon={faTasks} size="lg" color="white"/>, '/dashboard/projects'],
              ['Calls records', <FontAwesomeIcon icon={faServer} size="lg" color="white"/>, '/dashboard/records'],
              ['Constructor', <FontAwesomeIcon icon={faWrench} size="lg" color="white"/>, '/'],
              ['Connections', <FontAwesomeIcon icon={faCoins} size="lg" color="white"/>, '/'],
              ['Support', <FontAwesomeIcon icon={faQuestionCircle} size="lg" color="white"/>, '/'],
            ]}
        />
        <div className="col">
        <Navbar />
            <div className="row">
                <div className="col">
                    <Switch>
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route path="/dashboard/projects" component={Navbar} />
                        <Route path="/dashboard/records" component={Navbar} />
                    </Switch>
                </div>
            </div>
        </div>
    </div>

</div>;
export default Main;
