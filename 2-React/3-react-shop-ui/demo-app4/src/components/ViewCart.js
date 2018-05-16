import React, { Component } from 'react';
import PropTypes from 'prop-types'
class ViewCart extends Component {
    submitNewOrder() {
        //let { cart } = this.props;
        let total_amount = this.total_amount;
    }
    renderCartItems() {
        let { cart } = this.props;
        let keys = Object.keys(cart);
        this.total_amount = 0;
        return keys.map((key, idx) => {
            let cartLine = cart[key];
            let item = cartLine.item;
            this.total_amount += item.price * cartLine.qty;
            return (
                <tr key={idx}>
                    <td>{item.code}</td>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                    <td>{cartLine.qty}</td>
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
                        Total amount : &#8377; {this.total_amount}
                        <hr />
                        <button onClick={() => { this.submitNewOrder() }} className="btn btn-primary">submit order</button>
                    </div>
                </div>
            </div>
        );
    }
}
ViewCart.propTypes = {
    cart: PropTypes.object.isRequired
}
export default ViewCart;