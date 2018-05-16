
import React, { Component } from 'react';
import { withSubscription } from '../hoc';

class TopicList extends Component {

    render() {
        let { data: topics } = this.props;
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

export default withSubscription(TopicList, store => store.getTopics());