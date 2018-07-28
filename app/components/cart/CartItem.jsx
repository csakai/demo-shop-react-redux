import PropTypes from 'prop-types';
import React from 'react';
import UpdateCartItem from '../../containers/ConnectedUpdateCartItem.jsx';

const CartItem = ({item}) => (
    <div className="cart-item">
        <div className="cart-item-title">
            {item.title}
        </div>
        <UpdateCartItem
            id={item.id}
            quantity={item.quantity}
            price={item.price}
        />
    </div>
);

CartItem.propTypes = {
    item: PropTypes.object
};

export default CartItem;
