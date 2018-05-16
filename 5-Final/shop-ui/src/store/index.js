
import { createStore } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension'

let middleware = [thunk];
const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});


const initialState = {
    products: [],
    reviews: {},
    cart: {},
};

const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
));

export default store;