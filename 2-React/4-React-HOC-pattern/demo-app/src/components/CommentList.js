import React, { Component } from 'react';
import Comment from './Comment';

import store from '../store';

class CommentList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // "DataSource" is some global data source
            comments: store.getComments()
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
            comments: store.getComments()
        });
    }


    render() {
        let comments = this.state.comments.map((comment, idx) => <Comment key={idx} comment={comment} />);
        return (
            <div className="list-group">
                {comments}
            </div>
        );
    }
}

export default CommentList;