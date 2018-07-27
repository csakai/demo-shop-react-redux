import PropTypes from 'prop-types';

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
    subtotal: PropTypes.number,
    tax: PropTypes.number,
    shipping: PropTypes.number,
    total: PropTypes.number
};

export default CartDetails;
