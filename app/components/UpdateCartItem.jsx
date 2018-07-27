import React from 'react';
import PropTypes from 'prop-types';

import beautifyCurrency from '../util/beautifyCurrency';

class UpdateCartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showWarning: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.dismissWarning = this.dismissWarning.bind(this);
    }
    handleChange(event) {
        const {
            updateCartItemQuantity,
            id
        } = this.props;
        const newValue = Number.parseInt(event.target.value, 10);
        if (newValue < 1) {
            this.setState({
                showWarning: true
            });
        } else {
            updateCartItemQuantity(id, newValue);
        }
    }
    handleClick() {
        const {
            removeCartItem,
            id
        } = this.props;
        removeCartItem(id);
    }
    dismissWarning(event) {
        event.preventDefault();
        this.setState({
            showWarning: false
        });
    }

    render() {
        const { price, quantity } = this.props;
        const { showWarning } = this.state;
        return (
            <div>
                <div className="cart-item-quantity">
                    <input type="number"
                        value={quantity}
                        step="1"
                        min="1"
                        onChange={this.handleChange}
                    />
                    {
                        showWarning &&
                        <div className="warning">
                            If you wish to remove this item from the cart, please click Remove item
                            <a className="dismiss" href="#" onClick={this.dismissWarning}>X</a>
                        </div>
                    }
                </div>
                <div className="cart-item-price">
                    {beautifyCurrency(price)}
                </div>
                <button
                    onClick={this.handleClick}>
                    Remove Item
                </button>
            </div>
        );
    }
}
UpdateCartItem.propTypes = {
    id: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    updateCartItemQuantity: PropTypes.func,
    removeCartItem: PropTypes.func
};


export default UpdateCartItem;
