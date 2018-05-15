import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Product from './components/Product';
import ViewCart from './components/ViewCart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCartOpen: false,
      cart: {}, // e.g {code:{item,qty}}
      products: [
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
    }
  }
  toggleCart() {
    let { isCartOpen } = this.state;
    this.setState({ isCartOpen: !isCartOpen })
  }
  addToCart(item) {
    let { cart } = this.state;
    let code = item.code;
    let cartLine;
    if (cart[code]) {
      cartLine = cart[code];
      cartLine = Object.assign({}, cartLine, { qty: cartLine.qty + 1 })
    } else {
      cartLine = Object.assign({}, { item, qty: 1 })
    }
    cart = Object.assign({}, cart, { [code]: cartLine });
    this.setState({ cart })
  }
  renderProducts() {
    let { products, isCartOpen, cart } = this.state;
    if (!isCartOpen) {
      return products.map((item, idx) => {
        return (
          <Product item={item} key={idx} onBuy={(item) => { this.addToCart(item) }} />
        );
      });
    } else {
      return <ViewCart cart={cart} />
    }
  }
  render() {
    let { cart, isCartOpen } = this.state;
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">shopIT</span>
        </nav>
        <hr />
        <i className="fa fa-shopping-cart"></i>{Object.keys(cart).length} item(s) in cart
        <a className="pull-right" href="#/" onClick={() => { this.toggleCart() }}>{isCartOpen ? 'View products' : 'View cart'}</a>
        <hr />
        <div className="list-group">
          {this.renderProducts()}
        </div>
      </div>
    );
  }
}

export default App;
