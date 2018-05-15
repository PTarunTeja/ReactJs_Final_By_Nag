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
        let { onAction } = this.props;
        this.setState({ count: count + 1 }, () => {
            onAction();
        })
    }
    render() {
        console.log('ActionButton :: render()');
        let { value } = this.props;
        let { count } = this.state;
        return (
            <div className="action-btn">
                <div className="card">
                    <div className="card-body">
                        <button onClick={(e) => { this.handleBtnClick(e) }} className="btn btn-primary">
                            {value} : &nbsp;
                            <span className="badge badge-danger">{count}</span>
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