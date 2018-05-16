import React, { Component } from 'react';
import Comment from './Comment';

import { withSubscription } from '../hoc';

class CommentList extends Component {
    render() {
        let { data: comments } = this.props;
        comments = comments.map((comment, idx) => <Comment key={idx} comment={comment} />);
        return (
            <div className="list-group">
                {comments}
            </div>
        );
    }
}

export default withSubscription(CommentList, store => store.getComments());