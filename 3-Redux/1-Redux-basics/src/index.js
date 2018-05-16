console.log('-index.js-');
import 'bootstrap/dist/css/bootstrap.css';
import { combineReducers, createStore } from 'redux';
//----------------------------------------
// step-1 : Action creator(s)
function increment(value) {
    return { type: 'INCREMENT', value };
}
function decrement(value) {
    return { type: 'DECREMENT', value }
}

function submitNewReview(productCode, review) {
    return { type: 'ADD_NEW_REVIEW', productCode, review }
}

//----------------------------------------
// Reducer(s)
function counterReducer(state = { count: 0 }, action) {
    console.log('counterReducer');
    switch (action.type) {
        case 'INCREMENT':
        case 'ADD_NEW_REVIEW':
            return Object.assign({}, { count: state.count + (action.value ? action.value : 1) });
        case 'DECREMENT':
            return Object.assign({}, { count: state.count - action.value });
        default:
            return state;
    }
}
function reviewsReducer(state = {}, action) {
    console.log('reviewsReducer');
    switch (action.type) {
        case 'ADD_NEW_REVIEW': {
            let reviews = state[action.productCode] || [];
            reviews = [...reviews, action.review];
            return Object.assign({}, state, { [action.productCode]: reviews })
        }
        default:
            return state;

    }
}
//----------------------------------------
const rootReducer = combineReducers({
    counter: counterReducer,
    reviews: reviewsReducer
});
//----------------------------------------
// store
let initialState = {
    counter: {
        count: 100
    },
    reviews: {
        "111": [
            { stars: 1, author: 'who@mail.com', body: 'sample review' }
        ]
    }
};
const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//----------------------------------------


// View ( plain-js )

document.getElementById('incBtn')
    .addEventListener('click', () => {
        let action = increment(10);
        store.dispatch(action);
    });

document.getElementById('decBtn')
    .addEventListener('click', () => {
        let action = decrement(10);
        store.dispatch(action);
    });

document.getElementById('lapReviewBtn')
    .addEventListener('click', () => {
        let action = submitNewReview("111", { stars: 1, author: '', body: 'love this' });
        store.dispatch(action);
    });

document.getElementById('mobReviewBtn')
    .addEventListener('click', () => {
        let action = submitNewReview("222", { stars: 1, author: '', body: 'love this' });
        store.dispatch(action);
    });


// get initial state
let spanEle = document.getElementById('countDisplay');
let state = store.getState();
spanEle.innerText = state.counter.count

// subscribe for state changes
store.subscribe(() => {
    let state = store.getState();
    spanEle.innerText = state.counter.count
});

