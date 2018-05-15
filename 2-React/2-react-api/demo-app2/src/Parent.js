import React, { Component } from 'react';
import Child from './Child';
import PropTypes from 'prop-types';

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bankBalance: 1000
        }
    }
    getChildContext() {
        return { bankBalance: this.state.bankBalance };
    }
    render() {
        return (
            <div className="alert alert-info">
                <Child />
            </div>
        );
    }
}
Parent.childContextTypes = {
    bankBalance: PropTypes.number
};

export default Parent;