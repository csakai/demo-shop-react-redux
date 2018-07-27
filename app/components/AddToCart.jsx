import React from 'react';
import PropTypes from 'prop-types';

class AddToCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        };
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleQuantityChange(newValue) {
        this.setState({
            quantity: newValue
        });
    }
    handleClick() {
        const {
            addToCart,
            id
        } = this.props;
        const {
            quantity
        } = this.state;
        addToCart(id, quantity);
    }

    render() {
        const { quantity } = this.state;
        return (
            <div>
                <div className="item-quantity">
                    <QuantityStepper
                        onChange={this.handleQuantityChange}
                        quantity={quantity}
                    />
                </div>
                <div className="item-cart-add">
                    <button
                        onClick={this.handleClick}>
                        Add To Cart
                    </button>
                </div>
            </div>
        );
    }
}
AddToCart.propTypes = {
    id: PropTypes.string,
    addToCart: PropTypes.func
};


export default AddToCart;
