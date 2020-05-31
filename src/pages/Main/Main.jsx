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
import Projects from '../Projects';
import Records from '../Records';


const Main = () => <div className="container-fluid">
    <div className="row">
            <Menu
                li={[
                  ['Cтатистика', <FontAwesomeIcon icon={faChartLine} size="lg" color="white" />, '/dashboard'],
                  ['Проекты', <FontAwesomeIcon icon={faTasks} size="lg" color="white" />, '/dashboard/projects'],
                  ['Записи звонков', <FontAwesomeIcon icon={faServer} size="lg" color="white" />, '/dashboard/records'],
                  ['Конструктор', <FontAwesomeIcon icon={faWrench} size="lg" color="white" />, '/'],
                  ['Баланс CONN', <FontAwesomeIcon icon={faCoins} size="lg" color="white" />, '/'],
                  ['Справка', <FontAwesomeIcon icon={faQuestionCircle} size="lg" color="white" />, '/'],
                ]}
            />
         <div className="col">
            <Navbar />
            <Switch>
                <Route exact path="/dashboard" component={Dashboard} />
                <Route path="/dashboard/projects" component={Projects} />
                <Route path="/dashboard/records" component={Records} />
            </Switch>
            </div>
    </div>

</div>;
export default Main;
