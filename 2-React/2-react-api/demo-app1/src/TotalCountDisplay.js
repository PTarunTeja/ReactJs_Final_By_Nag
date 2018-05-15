import React, { Component } from 'react';
import PropTypes from 'prop-types';
class TotalCountDisplay extends Component {
    constructor(props) {
        super(props);
        console.log('TotalCountDisplay :: constructor()');
    }
    render() {
        console.log('TotalCountDisplay :: render()');
        let { value } = this.props
        return (
            <div className="alert alert-info">
                <span className="badge badge-warning">{value}</span>
            </div>
        );
    }
}
TotalCountDisplay.defaultProps = {
    value: 0
}
TotalCountDisplay.propTypes = {
    value: PropTypes.number
}

export default TotalCountDisplay;