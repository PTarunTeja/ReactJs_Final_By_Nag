

const apiUrl = "http://localhost:8080/api/products";

export function loadProducts() {
    return function (dispatch) {
        fetch(apiUrl)
            .then(response => response.json())
            .then(products => {
                dispatch({ type: 'LOAD_PRODUCTS', products }) // Async Action
            })
    }
}