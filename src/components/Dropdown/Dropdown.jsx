import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './_dropdown.scss';

class Dropdown extends React.Component {
    state = {
        visible: false
    };
    closeW = () => {
        this.setState(() => {
            return { visible: false };
        });
    };
  
    listenEvent = (event) => {
        if (event.target.id !== "button") {
            this.closeW();
        }
    }
    componentDidMount() {
        document.addEventListener('click', e => this.listenEvent(e));
    }
    componentWillUnmount() {
        document.removeEventListener('click', e => this.listenEvent(e));
    }

    openClose = () => {
        console.log(this.state);
        this.setState(() => {
            return { visible: !this.state.visible };
        });
    };

    render() {
        const { statistic, select, buttonText,  buttonSize, list, button, title, icons, header, span } = this.props;
        console.log(span);
        let style = "hidden";
        if (this.state.visible) {
            style = "animated bounceIn";
        }
        let itemsList;
        let head;
        let sp;

        if (span) {
            sp = <span className={`badge ${span.style} badge-counter`}>{span.count}</span>
        }
        if (list) {
            itemsList = list.map((item, index) => {
                return <div key={index} className="dropdown-list__item" onClick={() => select(item.id)}>
                    <div className="dropdown-list__image">
                        <FontAwesomeIcon
                            icon={item.icon}
                           
                        />
                    </div>
                    <div className="dropdown-list__item-name" >{item.name}</div>
                </div>
            })
        }
        if (statistic) {
            itemsList = Object.keys(statistic).map((item, index) => {
                return <div key={index} className="dropdown-list__item" onClick={() => select(item)}>
                    <div className="dropdown-list__image">
                        <FontAwesomeIcon
                            icon={icons}
                           
                        />
                    </div>
                    <div className="dropdown-list__item-name">{statistic[item].name}</div>
                </div>
            })

            head = <div className="dropdown-list">
                <div className="dropdown-list__item">
                    <div className="dropdown-list__image">
                        <FontAwesomeIcon
                            icon={header.icon}
                        />
                    </div>
                    <div className="dropdown-list__item-name" onClick={() => select('all')}>{header.name}</div>
                </div>
            </div>
        }
        return (
            <div className="dropdown-box">
                <div className="dropdown-m">
                    <div className="dropdown-m__button">
                        <FontAwesomeIcon
                            icon={button}
                            id="button"
                            size={buttonSize}
                            onClick={this.openClose}
                        />
                        {sp}
                    </div>
                </div>
                <div className="dropdown-container">
                    <div className={`dropdown-container__card ${style}`}>
                        <div className="dropdown-container__body">
                            <div className="dropdown-container__title">
                                {title}
                            </div>
                            {head}
                            {itemsList}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Dropdown;
