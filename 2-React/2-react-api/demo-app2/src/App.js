import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Greeting from './Greeting';
import Box from './Box';
import Employee from './Employee';
import Product from './Product';
import Parent from './Parent';
import Child from './Child';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { message: 'greetings' }
    console.log('App :: constructor()');
  }
  changeMessage(message) {
    this.setState({ message })
  }
  renderMessage() {
    let { message } = this.state;
    if (message) return <Greeting message={message} />
    return null;
  }
  componentDidCatch() {
    //.
  }
  render() {
    console.log('App :: render()');
    return (
      <div className="container">
        <hr /><h1>react component : lifecycle</h1><hr />

        {
          /*
        <button onClick={() => { this.changeMessage('good morning') }}>GM</button>
        <button onClick={() => { this.changeMessage('good noon') }}>GN</button>
        <button onClick={() => { this.changeMessage('good evening') }}>GE</button>
        <button onClick={() => { this.changeMessage('') }}>Remove</button>
        <hr />
        {this.renderMessage()}
          */
        }


        {
          /* 
          <Box>
            <Employee />
            <Employee />
          </Box>
          <Box>
            <Product />
            <Product />
          </Box> 
          */
        }

        <Parent />

        <Child />

      </div>
    );
  }
}

export default App;
