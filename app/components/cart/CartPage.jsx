import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import CartItemList from '../../containers/cart/ConnectedCartItemList.jsx';
import CartDetails from '../../containers/cart/ConnectedCartDetails.jsx';
import Checkout from '../../containers/cart/ConnectedCheckout.jsx';

const CartPage = ({hasItems}) => (
    <div className="cart-page-container">
        {!hasItems && (
            <div className="empty-cart-warning">
                You have no items in your cart!
                Try shopping <Link to="/">here</Link>!
            </div>
        )}
        {hasItems && (
            <div className="cart-display">
                <CartItemList />
                <CartDetails />
                <Checkout />
            </div>
        )}
    </div>
);

CartPage.propTypes = {
    hasItems: PropTypes.bool
};

export default CartPage;
