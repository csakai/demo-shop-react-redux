import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

class AddToCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            showWarning: false
        };
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.showWarning) {
            setTimeout(() => this.setState(prevState => (
                {
                    ...prevState,
                    showWarning: false
                }
            )), 1000);
        }
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
            quantity
        } = this.state;
        if (inStock) {
            addToCart(id, quantity);
        } else {
            this.setState(prevState => (
                {
                    ...prevState,
                    showWarning: true
                }
            ));
        }
    }

    render() {
        const { inStock } = this.props;
        const { quantity, showWarning } = this.state;
        return (
            <div>
                <div className="item-quantity">
                    <QuantityStepper
                        isDisabled={!inStock}
                        onChange={this.handleQuantityChange}
                        quantity={quantity}
                    />
                </div>
                <div className="item-cart-add">
                    <button
                        className={cn('add-to-cart-button', {
                            'disabled': !inStock
                        })}
                        onClick={this.handleClick}>
                        Add To Cart
                    </button>
                    {showWarning && (
                        <div className="warning">
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
