

import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const initialState = {
    products: [],
    reviews: {},
    cart: {}
};

export default createStore(rootReducer, initialState, applyMiddleware(thunk));