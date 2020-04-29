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
            <div key={index} className="list-item padding0rem hov" onClick={() => select(item)}><div className="fa-image"><FontAwesomeIcon icon={faProjectDiagram} size="sm" height="300" className="dropdown-button-pointer" color="#dddfeb" /></div>{statistic[item].name}</div>
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
                    <div className="card-body padding0">
                        <p className="card-title header text-center">Statistics:</p>
                        <div className="list-group">
                            <div className="list-header pointer hov padding1rem" onClick={() => select('all')}>  <div className="fa-image"><FontAwesomeIcon icon={faListUl} size="sm" height="300" className="dropdown-button-pointer" color="#dddfeb" /></div>All projects</div>
                            <div className="list-header padding1rem">  <div className="fa-image"><FontAwesomeIcon icon={faThumbtack} size="sm" height="300" className="dropdown-button-pointer" color="#dddfeb" /> </div>
                            Your projects
                                   
                              
                            </div>
                            {projectsList}
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    };
}


export default ElipsisMenu;
