import React, { Component } from 'react';
import './App.css';
import TopicList from './components/TopicList';
import 'bootstrap/dist/css/bootstrap.css';
import CommentList from './components/CommentList';

class App extends Component {
  hanleTopicSelect(topic) {
    console.log(`${topic} selected...`);
  }
  render() {
    return (
      <div className="container">
        <hr />
        <h1> React - hoc pattern </h1>
        <hr />
        <div className="row">
          <div className="col-4 col-sm-4 col-md-4">
            <TopicList onTopicSelect={this.hanleTopicSelect.bind(this)} />
          </div>
          <div className="col-8 col-sm-8 col-md-8">
            <CommentList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
