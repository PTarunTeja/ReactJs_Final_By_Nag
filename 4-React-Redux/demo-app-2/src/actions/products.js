

 export function loadProducts() {
    let products = [
        {
            code: '111',
            name: 'Laptop',
            price: 198000,
            description: 'New Mac pro',
            canBuy: true,
            image: 'images/Laptop.png'
        },
        {
            code: '222',
            name: 'Mobile',
            price: 18000,
            description: 'New  pro',
            canBuy: true,
            image: 'images/Mobile.png'
        }
    ]
    return { type: 'LOAD_PRODUCTS', products }
}