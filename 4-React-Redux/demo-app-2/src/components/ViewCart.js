import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { buy } from '../actions/cart'
import { bindActionCreators } from 'redux';
class ViewCart extends Component {
    handleBuy(item, qty) {
        let { actions } = this.props;
        actions.buy(item, qty)
    }
    renderCartItems() {
        let { cart } = this.props;
        let keys = Object.keys(cart);
        this.total_amount = 0;
        return keys.map((key, idx) => {
            let cartLine = cart[key];
            let item = cartLine.item;
            this.total_amount = item.price * cartLine.qty;
            return (
                <tr key={idx}>
                    <td>{item.code}</td>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                    <td>
                        <i className="fa fa-plus" onClick={() => { this.handleBuy(item, 1) }}></i>
                        &nbsp;
                        <span className="badge badge-primary">{cartLine.qty}</span>
                        &nbsp;
                        <i className="fa fa-minus" onClick={() => { this.handleBuy(item, -1) }}></i>
                    </td>
                    <td>&#8377;{item.price * cartLine.qty}</td>
                </tr>
            );
        });
    }
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">Item(s) in cart</div>
                    <div className="card-body">
                        <table className="table table-bordered table-sm">
                            <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderCartItems()}
                            </tbody>
                        </table>
                        <hr />
                        total_amount : &#8377;{this.total_amount}
                    </div>
                </div>
            </div>
        );
    }
}
ViewCart.propTypes = {
    cart: PropTypes.object.isRequired
}

function mapDisptachToProps(dispatch) {
    let actions = { buy };
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(null, mapDisptachToProps)(ViewCart);