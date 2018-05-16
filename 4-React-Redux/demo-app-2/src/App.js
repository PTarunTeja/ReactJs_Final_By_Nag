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

import { loadProducts } from './actions/products';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends Component {
  componentDidMount() {
    let { actions } = this.props;
    setTimeout(() => {
      actions.loadProducts();
    }, 2000);
  }
  renderProducts() {
    let { products } = this.props;
    return products.map((item, idx) => {
      return (
        <Product item={item} key={idx} />
      );
    });

  }
  render() {
    let { cart } = this.props;
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">
              <Link to="/">shopIT</Link>
            </span>
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
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

function mapStateToProps(state) {
  return {
    products: state.products,
    cart: state.cart
  }
}
function mapDisptachToProps(dispatch) {
  let actions = { loadProducts };
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDisptachToProps)(App);
