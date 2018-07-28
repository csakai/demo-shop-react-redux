import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import style from './style.scss';

const CartDetails = ({
    subtotal,
    tax,
    shipping,
    total
}) => (
    <div className="cart-details">
        <div className={style.cartDetailContainer}>
            <div className={style.cartDetailTitle}>
                Subtotal
            </div>
            <div className={style.cartDetailPrice}>
                {subtotal}
            </div>
        </div>
        <div className={style.cartDetailContainer}>
            <div className={style.cartDetailTitle}>
                Tax
            </div>
            <div className={style.cartDetailPrice}>
                {tax}
            </div>
        </div>
        <div className={style.cartDetailContainer}>
            <div className={style.cartDetailTitle}>
                Shipping
            </div>
            <div className={style.cartDetailPrice}>
                {shipping}
            </div>
        </div>
        <div className={cn(style.cartDetailContainer, style.cartTotal)}>
            <div className={style.cartDetailTitle}>
                Total
            </div>
            <div className={style.cartDetailPrice}>
                {total}
            </div>
        </div>
    </div>
);

CartDetails.propTypes = {
    subtotal: PropTypes.string,
    tax: PropTypes.string,
    shipping: PropTypes.string,
    total: PropTypes.string
};

export default CartDetails;
