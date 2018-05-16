
import React, { Component } from 'react';
import store from '../store';

class TopicList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            topics: store.getTopics()
        };
    }

    componentDidMount() {
        // Subscribe to changes
        store.subscribe(this.handleChange);
    }

    componentWillUnmount() {
        // Clean up listener
        store.unsubscribe(this.handleChange);
    }

    handleChange() {
        // Update component state whenever the data source changes
        this.setState({
            topics: store.getTopics()
        });
    }
 
    render() {
        let { topics } = this.state;
        let { onTopicSelect } = this.props;
        let topicElements = topics.map((topic, idx) => <div onClick={() => { onTopicSelect(topic) }} key={idx} className="list-group-item">{topic}</div>);
        return (
            <div className="card">
                <div className="card-header">All Topics</div>
                <div className="card-body">
                    <div className="list-group">
                        {topicElements}
                    </div>
                </div>
            </div>

        );
    }
}

export default TopicList;