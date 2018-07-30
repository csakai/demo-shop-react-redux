import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import QuantityStepper from '../quantity_stepper/QuantityStepper.jsx';
import style from './style.scss';

class AddToCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            showWarning: false,
            showConfirm: false
        };
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleQuantityChange(newValue) {
        this.setState(prevState => (
            {
                ...prevState,
                quantity: newValue
            }
        ));
    }
    handleClick() {
        const {
            addToCart,
            id,
            inStock
        } = this.props;
        const {
            showWarning,
            quantity
        } = this.state;
        if (inStock) {
            addToCart(id, quantity);
            this.setState(prevState => ({
                ...prevState,
                showConfirm: true
            }), () => {
                if (this.state.showConfirm) {
                    setTimeout(() => this.setState(prevState => (
                        {
                            ...prevState,
                            showConfirm: false,
                            quantity: 1
                        }
                    )), 1000);
                }
            });
        } else if (!showWarning) {
            this.setState(prevState => (
                {
                    ...prevState,
                    showWarning: true
                }
            ), () => {
                if (this.state.showWarning) {
                    setTimeout(() => this.setState(prevState => (
                        {
                            ...prevState,
                            showWarning: false
                        }
                    )), 1000);
                }
            });
        }
    }

    render() {
        const { inStock } = this.props;
        const { quantity, showConfirm, showWarning } = this.state;
        return (
            <div className={style.itemCartContainer}>
                <div className="item-quantity">
                    <QuantityStepper
                        isDisabled={!inStock}
                        onChange={this.handleQuantityChange}
                        quantity={quantity}
                    />
                </div>
                <div className="item-cart-add">
                    <button
                        className={cn(style.addToCartButton, {
                            [style.disabled]: !inStock
                        })}
                        onClick={this.handleClick}
                        disabled={showConfirm}>
                        Add To Cart
                    </button>
                    {showConfirm && (
                        <div className={style.confirm}>
                            {`${quantity} added to cart!`}
                        </div>
                    )}
                    {showWarning && (
                        <div className={style.warning}>
                            Sorry, this item is out of stock
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
AddToCart.propTypes = {
    id: PropTypes.string,
    inStock: PropTypes.bool,
    addToCart: PropTypes.func
};


export default AddToCart;
