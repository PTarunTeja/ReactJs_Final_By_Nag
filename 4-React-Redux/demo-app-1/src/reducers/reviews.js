

export function reviewsReducer(state = {}, action) {
    switch (action.type) {
        case 'LOAD_REVIEWS': {
            let reviews = state[action.productCode] || [];
            reviews = reviews.concat(action.reviews);
            return Object.assign({}, state, { [action.productCode]: reviews })
        }
        case 'ADD_NEW_REVIEW': {
            let reviews = state[action.productCode] || [];
            reviews = [...reviews, action.review];
            return Object.assign({}, state, { [action.productCode]: reviews })
        }
        default:
            return state;

    }
}