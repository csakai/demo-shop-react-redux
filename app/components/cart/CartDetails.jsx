import PropTypes from 'prop-types';
import React from 'react';

const CartDetails = ({
    subtotal,
    tax,
    shipping,
    total
}) => (
    <div className="cart-details">
        <ul>
            <li className="cart-price-subtotal">
                {subtotal}
            </li>
            <li className="cart-price-tax">
                {tax}
            </li>
            <li className="cart-price-shipping">
                {shipping}
            </li>
            <li className="cart-price-total">
                {total}
            </li>
        </ul>
    </div>
);

CartDetails.propTypes = {
    subtotal: PropTypes.string,
    tax: PropTypes.string,
    shipping: PropTypes.string,
    total: PropTypes.string
};

export default CartDetails;
