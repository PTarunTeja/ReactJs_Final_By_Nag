

export function cartReducer(state = {}, action) {

    switch (action.type) {
        case 'BUY': {
            let code = action.item.code;
            let cartLine;
            if (state[code]) {
                cartLine = state[code];
                cartLine = Object.assign({}, cartLine, { qty: cartLine.qty + (action.qty ? action.qty : 1) })
            } else {
                cartLine = Object.assign({}, { item: action.item, qty: 1 })
            }
            return Object.assign({}, state, { [code]: cartLine });
        }
        default:
            return state
    }

}