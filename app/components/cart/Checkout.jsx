import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';

import style from './style.scss';

class Checkout extends React.Component {
    constructor(props) {
        super(props);
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
                    className={style.cartCheckoutButton}
                    onClick={this.handleClick}>
                    Checkout
                </button>
                {message && (
                    <div className={cn(style.checkoutMessage, {
                        [style.checkoutError]: isError,
                        [style.checkoutSuccess]: !isError
                    })}>
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
