import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisH, faProjectDiagram, faCog, faListUl, faThumbtack
} from '@fortawesome/free-solid-svg-icons';
import './_elipsisMenu.scss';


class ElipsisMenu extends React.Component {

    state = {
        visible: false
    }
    closeW = () => {
        this.setState(() => {
            return { visible: false }
        })
    };
    componentDidMount() {
        document.addEventListener('click', (event) => {
            if (event.target.id !== 'dropdown-id') {
                this.closeW();
            }
        });
    }
    openClose = () => {
        this.setState(() => {
            return { visible: !this.state.visible }
        })
    };


    render() {
        const { statistic, select } = this.props;
        let projectsList = Object.keys(statistic).map((item, index) =>
            <li key={index} className="list-group-item li-item" onClick={() => select(item)}><div className="ml-5 mr-4">  <FontAwesomeIcon icon={faProjectDiagram} size="sm" height="300" className="dropdown-button-pointer mr-2" color="#dddfeb" />{item}</div></li>
        )
        let style = 'hidden';
        if (this.state.visible) {
            style = 'animated bounceIn';
        }
        return <div className="row mr-2 ml-2 mt-3 justify-content-end">
            <div className="col-md-4 col-sm-4 col-lg-2">
                <div className="row">
                    <div className="col text-right">
                        <FontAwesomeIcon icon={faEllipsisH} size="lg" height="300" className="dropdown-button-pointer" id="dropdown-id" onClick={this.openClose} color="#dddfeb" />
                    </div>
                </div>
                <div className={`card dropdown-menu ${style}`}>
                    <div className="card-body padding-05">
                        <p className="card-title header text-center">Statistics:</p>
                        <ul className="list-group">
                            <li className="list-group-item li-item"><div className="ml-3 mr-4" onClick={() => select('all')}>  <FontAwesomeIcon icon={faListUl} size="sm" height="300" className="dropdown-button-pointer mr-2" color="#dddfeb" />All</div></li>
                            <li className="list-group-item li-header"><div className="ml-3 mr-4">  <FontAwesomeIcon icon={faThumbtack} size="sm" height="300" className="dropdown-button-pointer mr-2" color="#dddfeb" />Your projects</div>
                                <ul className="list-group">
                                    {projectsList}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>;
    };
}


export default ElipsisMenu;
