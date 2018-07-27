import PropTypes from 'prop-types';
import React from 'react'

class Checkout extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { checkout } = this.props;
        checkout();
    }

    render() {
        const {
            isError,
            message
        } = this.props;

        return (
            <div className="cart-checkout-container">
                <button
                    className="cart-checkout-button"
                    onClick={this.handleClick}>
                    Checkout
                </button>
                {message && (
                    <div className={isError ? 'checkout-error' : 'checkout-success'}>
                        {message}
                    </div>
                )}
            </div>
        );
    }
}

Checkout.propTypes = {
    checkout: PropTypes.func,
    isError: PropTypes.bool,
    message: PropTypes.string
};

export default Checkout;
