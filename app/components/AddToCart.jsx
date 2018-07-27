import React from 'react';
import PropTypes from 'prop-types';

class AddToCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(event) {
        this.setState({
            quantity: event.target.value
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
                <input type="number"
                    value={quantity}
                    step="1"
                    min="1"
                    onChange={this.handleChange}
                />
                <button
                    onClick={this.handleClick}>
                    Add To Cart
                </button>
            </div>
        );
    }
}
AddToCart.propTypes = {
    id: PropTypes.string,
    addToCart: PropTypes.func
};


export default AddToCart;
