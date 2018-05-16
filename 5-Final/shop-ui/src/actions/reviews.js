
export function loadReviews(productId) {
    return function (dispatch) {
        let apiUrl = `http://localhost:8080/api/products/${productId}/reviews`
        fetch(apiUrl)
            .then(response => response.json())
            .then(reviews => {
                dispatch({ type: 'LOAD_REVIEWS', productId, reviews }) // Async Action
            })
    }
}

export function addNewReview(productId, review) {
    return function (dispatch) {
        let apiUrl = `http://localhost:8080/api/products/${productId}/reviews`
        fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
        })
            .then(response => response.json())
            .then(review => {
                dispatch({ type: 'ADD_NEW_REVIEW', productId, review }) // Async Action
            })
    }
}