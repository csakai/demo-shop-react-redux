import { connect } from 'react-redux';
import { removeCartItem, updateCartItemQuantity } from '../reducers/cart';
import UpdateCartItem from '../components/cart/UpdateCartItem.jsx';

const mapDispatchToProps = dispatch => ({
    removeCartItem: id => dispatch(removeCartItem(id)),
    updateCartItemQuantity: (id, quantity) => dispatch(updateCartItemQuantity(id, quantity))
});

export default connect(
    null,
    mapDispatchToProps
)(UpdateCartItem);
