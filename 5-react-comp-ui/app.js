
console.log('-app.js-');


// step-1 : define component-class

// class Greeting extends React.Component {
//     render() {
//         let spanEle = React.createElement('span', { className: 'badge badge-primary' }, 'good evening');
//         let divEle = React.createElement('div', { className: 'alert alert-info' }, spanEle);
//         return divEle;
//     }
// }

// or ( use JSX )


class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeNow: new Date().toTimeString()
        };
        console.log('Greeting :: contructor()');
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ timeNow: new Date().toTimeString() });
        }, 100);
    }
    render() {
        console.log('Greeting :: render()');
        // let message = this.props.message;
        // or
        let { message } = this.props
        let { timeNow } = this.state;
        return (
            <div className="alert alert-info">
                <p>{message}</p>
                <hr />
                <p>{timeNow}</p>
            </div>
        );
    }
}

// step-2 : instaniate component-class
// let greeting1 = React.createElement(Greeting, null, null);
// or
let greeting1 = <Greeting message="good evening" />

ReactDOM.render(greeting1, document.getElementById('root'));