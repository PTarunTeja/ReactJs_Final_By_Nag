
export function loadReviews(productCode) {
    let reviews = [
        { stars: 5, author: 'who@mail.com', body: 'sample review' }
    ]
    return { type: 'LOAD_REVIEWS', productCode, reviews }
}

export function addNewReview(productCode, review) {
    return { type: 'ADD_NEW_REVIEW', productCode, review }
}