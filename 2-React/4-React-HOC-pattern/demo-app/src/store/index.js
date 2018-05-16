
const store = {
    getTopics() {
        return ['React', 'Redux', 'Jest', "JavaScript", 'Java'];
    },
    getComments() {
        let comments = [{
            id: 1,
            author: 'Nagabhushanam',
            body: 'react awesome'
        },
        {
            id: 2,
            author: 'Ria N',
            body: 'this is good UI lib'
        }
        ];
        return comments;
    },
    subscribe(listener) {
        // 
    },
    unsubscribe(listener) {
        //
    }

}

export default store;