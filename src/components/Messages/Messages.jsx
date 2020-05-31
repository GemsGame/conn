import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './_messages.scss';

class Messages extends React.Component {
    state = {
        visible: false,
        _isMounted:false,
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
        this._isMounted = true;
        document.addEventListener('click', e => {
            if(this._isMounted) {
               return this.listenEvent(e);
            }
       
            
        });
      
    }
    componentWillUnmount() {
        this._isMounted = false;
        document.removeEventListener('click', e => 
            
          this.listenEvent(e)
            
        );
    }

    openClose = () => {
        this.setState(() => {
            return { visible: !this.state.visible };
        });
    };

    render() {
        const { messages, select, button, title, uid, span } = this.props;
        let style = "hidden";
        if (this.state.visible) {
            style = "animated bounceIn";
        }
        let itemsList;
        let spanCount = 0;

        if (messages) {
            itemsList = Object.keys(messages).map((item, index) => {
                if (messages[item].viewed === false) {
                    spanCount += 1;
                }
                return <div key={index} className="dropdown-list__item" onMouseEnter={() => select(uid, item)}>
                    <div className="dropdown-list__image-message">
                        <div className="dropdown-list__unix-time">{new Date(item * 1000).toLocaleString()}</div>
                    </div>
                    <div className="dropdown-list__item-name-message">{messages[item].text}</div>
                </div>
            })
        }
        return (
            <div className="dropdown-box">
                <div className="dropdown-m">
                    <div className="dropdown-m__button">
                        <FontAwesomeIcon
                            icon={button}
                            id="button"
                            size='lg'
                            onClick={this.openClose}
                        />
                        <span className={`badge ${span.style} badge-counter`}>{spanCount === 0 ? '' : spanCount}</span>
                    </div>
                </div>
                <div className="dropdown-container-messages">
                    <div className={`dropdown-container__card ${style}`}>
                        <div className="dropdown-container__body">
                            <div className="dropdown-container__title">
                                {title}
                            </div>
                            {itemsList}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Messages;
