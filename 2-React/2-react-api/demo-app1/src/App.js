import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ActionButton from './ActionButton'
import TotalCountDisplay from './TotalCountDisplay';

class App extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      totalCount: 100
    };
    console.log('App :: constructor()');
  }
  incrementTotalCount(v) {
    let { totalCount } = this.state;
    this.setState({ totalCount: totalCount + v });
  }
  render() {
    console.log('App :: render()');
    let { title } = this.props;
    let { totalCount } = this.state;
    return (
      <div className="container">
        <hr />
        <h1>{title}</h1>
        <hr />
        <div className="card">
          <div className="card-header"> App Component : <span className="badge badge-primary">{totalCount}</span> </div>
          <div className="card-body">
            {/* 
            <ActionButton value={10} onAction={(v) => { this.incrementTotalCount(v) }} />
            <ActionButton value={-10} onAction={(v) => { this.incrementTotalCount(v) }} />
            <ActionButton value={100} onAction={(v) => { this.incrementTotalCount(v) }} /> 
            */}
            {
              [1, 5, 10, -1, -5, 100]
                .map((n,idx) => <ActionButton key={idx} value={n} onAction={(v) => { this.incrementTotalCount(v) }} />)
            }
            <div style={{ clear: 'both' }}>
              <hr />
              <TotalCountDisplay value={totalCount} />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
