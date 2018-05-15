import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import classNames from 'classnames';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 1,
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
  changeTab(tabIdx) {
    this.setState({ tab: tabIdx })
  }
  renderBuyBtn(item) {
    if (item.canBuy) return <button className="btn btn-sm btn-primary">buy</button>
    else
      return null;
  }
  renderTabPanel(item) {
    let { tab } = this.state;
    let panel;
    switch (tab) {
      case 1:
        panel = (
          <div>{item.description}</div>
        )
        break;
      case 2:
        panel = (
          <div>Not Yet</div>
        )
        break;
      case 3:
        panel = (
          <div>None yet</div>
        )
        break;
      default:
        panel = null;
    }
    return panel;
  }
  renderProducts() {
    let { products, tab } = this.state;
    return products.map((item, idx) => {
      return (
        <div className="list-group-item" key={idx}>
          <div className="row">
            <div className="col-3 col-sm-3 col-md-3">
              <img src={item.image} className="img-fluid" alt="pic" />
            </div>
            <div className="col-9 col-sm-9 col-md-9">
              <h5>{item.name}</h5>
              <h6>&#8377;{item.price}</h6>
              {this.renderBuyBtn(item)}
              <hr />
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className={classNames('nav-link', { active: tab === 1 })} onClick={() => { this.changeTab(1) }}>Description</a>
                </li>
                <li className="nav-item">
                  <a className={classNames('nav-link', { active: tab === 2 })} onClick={() => { this.changeTab(2) }}>Specification</a>
                </li>
                <li className="nav-item">
                  <a className={classNames('nav-link', { active: tab === 3 })} onClick={() => { this.changeTab(3) }}>Reviews</a>
                </li>
              </ul>
              {this.renderTabPanel(item)}
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">shopIT</span>
        </nav>
        <hr />
        <div className="list-group">
          {this.renderProducts()}
        </div>
      </div>
    );
  }
}

export default App;
