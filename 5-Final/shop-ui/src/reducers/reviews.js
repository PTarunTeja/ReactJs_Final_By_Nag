

export function reviewsReducer(state = {}, action) {
    switch (action.type) {
        case 'LOAD_REVIEWS': {
            let reviews = state[action.productId] || [];
            reviews = reviews.concat(action.reviews);
            return Object.assign({}, state, { [action.productId]: reviews })
        }
        case 'ADD_NEW_REVIEW': {
            let reviews = state[action.productId] || [];
            reviews = [...reviews, action.review];
            return Object.assign({}, state, { [action.productId]: reviews })
        }
        default:
            return state;

    }
}