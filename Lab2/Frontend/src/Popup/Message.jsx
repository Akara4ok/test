import React from 'react';
import classes from './Message.scss';

class Message extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={classes.message}>
                <div
                    className={classes.text}
                    style={{ color: `${this.props.textColor}` }}>
                    {this.props.children}
                </div>
                <button className={classes.button} onClick={this.props.onClose}>
                    Ok
                </button>
            </div>
        );
    }
}

export default Message;
