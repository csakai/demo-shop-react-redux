import PropTypes from 'prop-types';
import React from 'react';
import beautifyCurrency from '../../util/beautifyCurrency';
import UpdateCartItem from '../../containers/cart/ConnectedUpdateCartItem.jsx';

import style from './style.scss';

const CartItem = ({item}) => (
    <div className={style.cartItemContainer}>
        <div className={style.cartItemTitle}>
            {item.title}
        </div>
        <div className={style.cartItemPrice}>
            {beautifyCurrency(item.price)}
        </div>
        <UpdateCartItem
            id={item.id}
            quantity={item.quantity}
        />
    </div>
);

CartItem.propTypes = {
    item: PropTypes.object
};

export default CartItem;
