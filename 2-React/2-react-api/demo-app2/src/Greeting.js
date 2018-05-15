
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Greeting extends Component {
    constructor(props) {
        super(props)
        // this.state = { serverMessage: '' }
        // this.state = { now: new Date().toTimeString() }
        console.log('Greeting :: constructor()');
    }
    componentWillMount() {
        console.log('Greeting :: componentWillMount()');
    }
    render() {
        console.log('Greeting :: render()');
        let { message } = this.props;
        // let { serverMessage } = this.state;
        // let { now } = this.state
        let now = new Date().toTimeString();
        return (
            <div className="alert alert-info">
                {message}
                <hr />
                {/* {serverMessage} */}
                {now}
            </div>
        );
    }
    componentDidMount() {
        console.log('Greeting :: componentDidMount()');
        // n/w request
        // setTimeout(() => {
        //     let serverMessage = "hello! from server-side";
        //     this.setState({ serverMessage });
        // }, 2000);

        this.interval = setInterval(() => {
            let now = new Date().toTimeString();
            // this.setState({ now })
            this.forceUpdate();
        }, 100);

    }
    componentWillReceiveProps(nextProps) {
        console.log('Greeting :: componentWillReceiveProps()');
        console.log(this.props);
        console.log(nextProps);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Greeting :: shouldComponentUpdate()');
        // return this.props.message !== nextProps.message;
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Greeting :: componentWillUpdate()');
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Greeting :: componentDidUpdate()');
    }
    componentWillUnmount() {
        console.log('Greeting :: componentWillUnmount()');
        clearInterval(this.interval);
    }
}
Greeting.propTypes = {
    message: PropTypes.string
}
Greeting.defaultProps = {
    message: 'i dont know, what to greet'
}

export default Greeting;