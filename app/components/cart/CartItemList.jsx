import PropTypes from 'prop-types';
import React from 'react';
import CartItem from './CartItem.jsx';

const CartItemList = ({items}) => (
    <div className="cart-item-list-container">
        <div className="cart-item-list-header">
            <div className="cart-item-title">
                Product
            </div>
            <div className="cart-item-quantity">
                Quantity
            </div>
            <div className="cart-item-price">
                Price
            </div>
            <div className="cart-item-remove">
                Remove Item?
            </div>
        </div>
        <div className="cart-item-list">
            {items.map(
                item => (
                    <CartItem
                        item={item}
                        key={item.id}
                    />
                )
            )}
        </div>
    </div>
);

CartItemList.propTypes = {
    items: PropTypes.array
};

export default CartItemList;
