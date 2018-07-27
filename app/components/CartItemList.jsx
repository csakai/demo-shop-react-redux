import PropTypes from 'prop-types';

import CartItem from './CartItem.jsx';

const CartItemList = ({items}) => (
    <div className="cart-item-list">
        {items.map(
            (item, index) => (
                <CartItem
                    item={item}
                    key={index}
                />
            )
        )}
    </div>
);

CartItemList.propTypes = {
    items: PropTypes.array
};

export default CartItemList;
