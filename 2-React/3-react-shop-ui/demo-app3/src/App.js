import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Product from './components/Product';
import ViewCart from './components/ViewCart';
import Login from './components/Login';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './components/Home';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    let { products } = this.state;
    return products.map((item, idx) => {
      return (
        <Product item={item} key={idx} onBuy={(item) => { this.addToCart(item) }} />
      );
    });

  }
  render() {
    let { cart } = this.state;
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">
              <Link to="/">shopIT</Link>
            </span>
            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link" href="/login">Login</a>
              </li>
            </ul>
          </nav>
          <hr />
          <i className="fa fa-shopping-cart"></i>{Object.keys(cart).length} item(s) in cart
          |
          <Link to="/products" >View Products </Link>
          <Link className="pull-right" to="/cart">View cart </Link>
          <hr />
          <Route exact={true} path={"/"} component={Home} />
          <Route path={"/login"} component={Login} />
          <Route path={"/products"} render={() => this.renderProducts()} />
          <Route path={"/cart"} render={() => <ViewCart cart={cart} />} />
        </div>
      </Router >

    );
  }
}

export default App;
