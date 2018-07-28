import PropTypes from 'prop-types';
import React from 'react';
import CartItem from './CartItem.jsx';
import style from './style.scss';

const CartItemList = ({items}) => (
    <div className={style.cartItemListContainer}>
        <div className={style.cartItemListHeader}>
            <div className={style.cartItemTitle}>
                Product
            </div>
            <div className={style.cartItemPrice}>
                Price
            </div>
            <div className={style.cartItemQuantity}>
                Quantity
            </div>
            <div className={style.cartItemRemove}>
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
