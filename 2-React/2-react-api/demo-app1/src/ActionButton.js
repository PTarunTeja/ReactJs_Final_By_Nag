import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './ActionButton.css';

class ActionButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        // this.handleBtnClick = this.handleBtnClick.bind(this);
        console.log('ActionButton :: constructor()');
    }
    handleBtnClick(e) {
        let { count } = this.state;
        let { onAction, value } = this.props;
        this.setState({ count: count + 1 }, () => {
            let { count } = this.state;
            onAction(count * value);
        })
    }
    render() {
        console.log('ActionButton :: render()');
        let { value } = this.props;
        let { count } = this.state;
        let className=`btn ${value>0?'btn-success':'btn-danger'}`;
        return (
            <div className="action-btn">
                <div className="card">
                    <div className="card-body">
                        <button onClick={(e) => { this.handleBtnClick(e) }} className={className}>
                            {value} : &nbsp;
                            <span className="badge badge-dark">{count}</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

ActionButton.defaultProps = {
    value: 'action-btn'
}
ActionButton.propTypes = {
    value: PropTypes.number,
    onAction: PropTypes.func
}

export default ActionButton;