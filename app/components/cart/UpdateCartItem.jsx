import PropTypes from 'prop-types';
import React from 'react';

import QuantityStepper from '../quantity_stepper/QuantityStepper.jsx';
import style from './style.scss';

class UpdateCartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showWarning: false
        };
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.dismissWarning = this.dismissWarning.bind(this);
    }
    handleQuantityChange(newValue, wasOutOfBounds) {
        const {
            updateCartItemQuantity,
            id
        } = this.props;
        const showWarning = wasOutOfBounds;
        this.setState({
            showWarning
        });
        if (!showWarning) {
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
        const { quantity } = this.props;
        const { showWarning } = this.state;
        return (
            <div className={style.updateCartItemContainer}>
                <div className={style.cartItemQuantity}>
                    <QuantityStepper
                        onChange={this.handleQuantityChange}
                        quantity={quantity}
                    />
                    {
                        showWarning &&
                        <div className="warning">
                            If you wish to remove this item from the cart, please click Remove item
                            <a className="dismiss" href="#" onClick={this.dismissWarning}>X</a>
                        </div>
                    }
                </div>
                <div className="cart-item-remove">
                    <button
                        className={style.cartItemRemoveButton}
                        onClick={this.handleClick}>
                        Remove Item
                    </button>
                </div>
            </div>
        );
    }
}
UpdateCartItem.propTypes = {
    id: PropTypes.string,
    quantity: PropTypes.number,
    updateCartItemQuantity: PropTypes.func,
    removeCartItem: PropTypes.func
};


export default UpdateCartItem;
